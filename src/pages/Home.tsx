import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate scale: starts at 1, decreases to 0.3 as you scroll down
      const newScale = Math.max(0.3, 1 - (scrollPosition / (windowHeight * 2)));
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 overflow-hidden fixed top-0 left-0 w-full">
        <h1 
          className="text-hero font-bold uppercase tracking-tight leading-[0.85] text-center transition-transform duration-100 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          UMAIR KHAN
        </h1>
      </section>

      {/* About Preview Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10" style={{ marginTop: "100vh" }}>
        <div className="max-w-2xl">
          <p className="text-body text-center md:text-left">
            Grew up in Saudi Arabia, roots in Bhopal, now based in the UK.
            <br />
            <br />
            I build, write, and reflect.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-nav text-muted-foreground">
          © Umair 2025
        </p>
      </footer>
    </div>
  );
};

export default Home;
