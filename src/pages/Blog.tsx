import Navbar from "@/components/Navbar";
import ContentHero from "@/components/content/ContentHero";
import ContentList from "@/components/content/ContentList";
import blogData from "@/content/blog/posts.json";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContentHero title="blog" />
      <ContentList items={blogData} basePath="/blog" />
    </div>
  );
};

export default Blog;
