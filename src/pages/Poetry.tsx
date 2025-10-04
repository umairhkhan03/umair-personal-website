import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Poetry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-heading font-bold mb-4">Coming Soon</h1>
          <p className="text-body text-muted-foreground mb-8">Poetry</p>
          <Link 
            to="/" 
            className="text-nav underline hover:opacity-60 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Poetry;
