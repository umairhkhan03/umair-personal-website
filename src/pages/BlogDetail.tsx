import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import MarkdownRenderer from "@/components/content/MarkdownRenderer";
import { loadMarkdownFile } from "@/lib/markdown";
import { MarkdownContent } from "@/types/content";

const BlogDetail = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<MarkdownContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      if (!slug) return;
      
      setLoading(true);
      const data = await loadMarkdownFile('blog', slug);
      setContent(data);
      setLoading(false);
    };

    loadContent();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-body">loading...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-heading font-bold mb-4">blog post not found</h1>
            <Link 
              to="/blog" 
              className="text-nav underline hover:opacity-60 transition-opacity"
            >
              back to blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-14 md:px-24 lg:px-32">
        <div className="max-w-3xl">
          <Link 
            to="/blog"
            className="text-nav text-muted-foreground hover:opacity-60 transition-opacity inline-block mb-8"
          >
            ← back to blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {content.frontmatter.title}
          </h1>
          
          <div className="flex gap-4 text-nav text-muted-foreground">
            <span>{new Date(content.frontmatter.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            {content.frontmatter.category && (
              <>
                <span>·</span>
                <span>{content.frontmatter.category}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-14 md:px-24 lg:px-32">
        <div className="max-w-3xl">
          <MarkdownRenderer content={content.content} />
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

