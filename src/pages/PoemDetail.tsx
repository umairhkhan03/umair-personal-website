import Navbar from "@/components/Navbar";
import { Link, useParams } from "react-router-dom";

const PoemDetail = () => {
  const { slug } = useParams();
  
  const formattedTitle = slug
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || '';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-heading font-bold mb-6">Coming Soon</h1>
          <p className="text-body text-muted-foreground mb-8">{formattedTitle}</p>
          <Link 
            to="/poetry" 
            className="text-nav underline hover:opacity-60 transition-opacity"
          >
            Back to Poetry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PoemDetail;
