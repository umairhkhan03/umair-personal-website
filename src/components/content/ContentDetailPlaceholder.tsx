import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

interface ContentDetailPlaceholderProps {
  title: string;
  backPath: string;
  backLabel: string;
}

const ContentDetailPlaceholder = ({ 
  title, 
  backPath, 
  backLabel 
}: ContentDetailPlaceholderProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-heading font-bold mb-6">Coming Soon</h1>
          <p className="text-body text-muted-foreground mb-8">{title}</p>
          <Link 
            to={backPath} 
            className="text-nav underline hover:opacity-60 transition-opacity"
          >
            {backLabel}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContentDetailPlaceholder;
