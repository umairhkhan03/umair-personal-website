import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/content/ContentHero";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Book } from "@/types/book";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ReadingList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const { toast } = useToast();

  const fetchBooks = async (goodreadsUserId: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('fetch-goodreads', {
        body: { userId: goodreadsUserId, shelf: 'to-read' }
      });

      if (error) throw error;

      setBooks(data.books || []);
      localStorage.setItem('goodreads_user_id', goodreadsUserId);
      
      toast({
        title: "Success",
        description: `Loaded ${data.books?.length || 0} books from your reading list`,
      });
    } catch (error) {
      console.error('Error fetching books:', error);
      toast({
        title: "Error",
        description: "Failed to fetch books from Goodreads. Please check your user ID.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedUserId = localStorage.getItem('goodreads_user_id');
    if (savedUserId) {
      setUserId(savedUserId);
      fetchBooks(savedUserId);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId.trim()) {
      fetchBooks(userId.trim());
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContentHero title="READING LIST" />
      
      <section className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl">
          {/* Goodreads User ID Input */}
          <form onSubmit={handleSubmit} className="mb-16 flex gap-4">
            <Input
              type="text"
              placeholder="Enter your Goodreads user ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Fetch Books"}
            </Button>
          </form>

          {/* Books List */}
          {books.length > 0 ? (
            books.map((book, index) => (
              <div 
                key={`${book.isbn || book.title}-${index}`}
                className={`${index !== 0 ? 'mt-20 md:mt-24' : ''}`}
              >
                <a 
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <h3 className="text-[24px] md:text-[28px] font-medium mb-2 group-hover:opacity-60 transition-opacity">
                    {book.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground">
                    {book.author}
                    {book.rating && ` · ${book.rating}★`}
                  </p>
                </a>
              </div>
            ))
          ) : !loading && (
            <p className="text-body text-muted-foreground">
              Enter your Goodreads user ID to see your reading list.
              <br />
              <span className="text-[14px]">Find it in your Goodreads profile URL: goodreads.com/user/show/YOUR_USER_ID</span>
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ReadingList;
