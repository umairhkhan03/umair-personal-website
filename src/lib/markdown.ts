import matter from 'gray-matter';
import { MarkdownContent } from '@/types/content';

/**
 * Parse markdown content with frontmatter
 */
export function parseMarkdown(markdownText: string): MarkdownContent {
  const { data, content } = matter(markdownText);
  
  return {
    frontmatter: {
      title: data.title || '',
      date: data.date || '',
      language: data.language,
      category: data.category,
      tech: data.tech,
      liveLink: data.liveLink,
      githubLink: data.githubLink,
    },
    content: content.trim(),
  };
}

/**
 * Load markdown file from the content directory
 * This uses Vite's dynamic import feature
 */
export async function loadMarkdownFile(
  type: 'poetry' | 'blog' | 'projects',
  slug: string
): Promise<MarkdownContent | null> {
  try {
    // Use Vite's glob import to load markdown files
    const modules = import.meta.glob('/src/content/**/*.md', { 
      query: '?raw',
      import: 'default'
    });
    
    const path = `/src/content/${type}/${slug}.md`;
    const loader = modules[path];
    
    if (!loader) {
      console.error(`Markdown file not found: ${path}`);
      return null;
    }
    
    const markdownText = await loader() as string;
    return parseMarkdown(markdownText);
  } catch (error) {
    console.error(`Error loading markdown file: ${type}/${slug}`, error);
    return null;
  }
}

