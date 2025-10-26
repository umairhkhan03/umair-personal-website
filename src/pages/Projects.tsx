import Navbar from "@/components/Navbar";
import ContentHero from "@/components/content/ContentHero";
import ContentList from "@/components/content/ContentList";
import projectsData from "@/content/projects/projects.json";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContentHero title="PROJECTS" />
      <ContentList items={projectsData} basePath="/projects" />
    </div>
  );
};

export default Projects;

