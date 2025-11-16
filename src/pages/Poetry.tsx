import Navbar from "@/components/Navbar";
import ContentHero from "@/components/content/ContentHero";
import ContentList from "@/components/content/ContentList";
import poetryData from "@/content/poetry/poems.json";

const Poetry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContentHero title="poetry" />
      <ContentList items={poetryData} basePath="/poetry" />
    </div>
  );
};

export default Poetry;
