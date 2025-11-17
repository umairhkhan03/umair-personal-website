import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import MarkdownRenderer from "@/components/content/MarkdownRenderer";
import { loadMarkdownFile } from "@/lib/markdown";
import { MarkdownContent } from "@/types/content";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<MarkdownContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      if (!slug) return;
      
      setLoading(true);
      const data = await loadMarkdownFile('projects', slug);
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
            <h1 className="text-heading font-bold mb-4">project not found</h1>
            <Link 
              to="/projects" 
              className="text-nav underline hover:opacity-60 transition-opacity"
            >
              back to projects
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
      <section className="pt-32 pb-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <Link 
            to="/projects"
            className="text-nav text-muted-foreground hover:opacity-60 transition-opacity inline-block mb-8"
          >
            ← back to projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {content.frontmatter.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-nav text-muted-foreground mb-4">
            <span>{new Date(content.frontmatter.date).getFullYear()}</span>
            {content.frontmatter.category && (
              <>
                <span>·</span>
                <span>{content.frontmatter.category}</span>
              </>
            )}
            {content.frontmatter.tech && (
              <>
                <span>·</span>
                <span>{content.frontmatter.tech}</span>
              </>
            )}
          </div>

          {/* Links */}
          {(content.frontmatter.liveLink || content.frontmatter.githubLink) && (
            <div className="flex gap-4 mt-6">
              {content.frontmatter.liveLink && (
                <a
                  href={content.frontmatter.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav underline hover:opacity-60 transition-opacity"
                >
                  view live →
                </a>
              )}
              {content.frontmatter.githubLink && (
                <a
                  href={content.frontmatter.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav underline hover:opacity-60 transition-opacity"
                >
                  view code →
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <MarkdownRenderer content={content.content} />
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

