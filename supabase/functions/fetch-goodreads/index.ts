import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Book {
  title: string;
  author: string;
  date: string;
  link: string;
  rating?: string;
  isbn?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userId, shelf = 'to-read' } = await req.json();
    
    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'Goodreads user ID is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Fetching Goodreads RSS for user ${userId}, shelf: ${shelf}`);
    
    const rssUrl = `https://www.goodreads.com/review/list_rss/${userId}?shelf=${shelf}`;
    const response = await fetch(rssUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch Goodreads RSS: ${response.status}`);
    }

    const xmlText = await response.text();
    console.log('RSS feed fetched successfully');
    
    // Parse RSS XML
    const books: Book[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const matches = xmlText.matchAll(itemRegex);
    
    for (const match of matches) {
      const itemContent = match[1];
      
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
      const authorMatch = itemContent.match(/<author_name><!\[CDATA\[(.*?)\]\]><\/author_name>/);
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const dateMatch = itemContent.match(/<user_date_created><!\[CDATA\[(.*?)\]\]><\/user_date_created>/);
      const ratingMatch = itemContent.match(/<average_rating>(.*?)<\/average_rating>/);
      const isbnMatch = itemContent.match(/<isbn><!\[CDATA\[(.*?)\]\]><\/isbn>/);
      
      if (titleMatch && authorMatch) {
        books.push({
          title: titleMatch[1].trim(),
          author: authorMatch[1].trim(),
          date: dateMatch ? dateMatch[1].trim() : new Date().toISOString(),
          link: linkMatch ? linkMatch[1].trim() : '',
          rating: ratingMatch ? ratingMatch[1].trim() : undefined,
          isbn: isbnMatch ? isbnMatch[1].trim() : undefined,
        });
      }
    }

    console.log(`Parsed ${books.length} books from RSS feed`);

    return new Response(
      JSON.stringify({ books }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error fetching Goodreads data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
