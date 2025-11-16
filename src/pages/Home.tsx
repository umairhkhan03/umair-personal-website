import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import TimezoneClock from "@/components/TimezoneClock";

const Home = () => {
  const [showScrollContent, setShowScrollContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Hide navbar title when scrolled past 200px
      const navbarTitle = document.querySelector('.navbar-title');
      if (navbarTitle) {
        if (scrollPosition > 200) {
          navbarTitle.classList.add('opacity-0');
          navbarTitle.classList.remove('opacity-100');
        } else {
          navbarTitle.classList.add('opacity-100');
          navbarTitle.classList.remove('opacity-0');
        }
      }
      
      // Show content below clock when scrolled past 300px
      setShowScrollContent(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero/Intro Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 pt-44">
        <div className="max-w-6xl w-full flex flex-col items-center gap-40">
          {/* Timezone Clock */}
          <TimezoneClock />

          {/* Content that appears on scroll */}
          <div 
            className={`transition-all duration-700 w-full ${
              showScrollContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="max-w-2xl">
              <p className="text-foreground mb-4" style={{ fontSize: '2rem' }}>
                hey hey! i'm <span className="font-bold">umair</span>.
              </p>
              
              <p className="text-base md:text-lg text-foreground mb-12">
                welcome to my corner of the internet!!
              </p>
              
              <p className="text-base md:text-lg text-foreground">
                i've split the website into two main sections: create and consume.

                <br />
                - create includes my <Link to="/poetry" className="underline">poetry</Link>, <Link to="/blog" className="underline">blog</Link>, and <Link to="/projects" className="underline">projects</Link>.
                <br />
                - consume includes content on my <Link to="/content" className="underline">reading list</Link> and a short section <Link to="/about" className="underline">about</Link> this website.
                <br />
                <br />
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center px-6">
        <p className="text-nav text-muted-foreground mb-4">
          © umair 2025
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <Link to="/about" className="hover:opacity-60 transition-opacity">
            about
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/projects" className="hover:opacity-60 transition-opacity">
            projects
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/blog" className="hover:opacity-60 transition-opacity">
            blog
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/poetry" className="hover:opacity-60 transition-opacity">
            poetry
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
