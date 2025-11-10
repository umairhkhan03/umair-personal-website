import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import TimezoneClock from "@/components/TimezoneClock";
import poetryData from "@/content/poetry/poems.json";
import blogData from "@/content/blog/posts.json";
import projectsData from "@/content/projects/projects.json";

type FilterType = "all" | "writing" | "projects";

const Home = () => {
  // Get the latest items
  const latestPoem = poetryData[0];
  const latestBlog = blogData[0];
  const latestProject = projectsData[0];

  const [filter, setFilter] = useState<FilterType>("all");
  const [showScrollContent, setShowScrollContent] = useState(false);
  const [showWorkSection, setShowWorkSection] = useState(false);
  const [hoveredWorkItem, setHoveredWorkItem] = useState<string | null>(null);

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
      
      // Show work section when scrolled past 300px (reduced threshold for less sensitivity)
      // Once shown, keep it visible unless scrolled back up significantly (hysteresis)
      setShowWorkSection(prev => {
        if (scrollPosition > 300) {
          return true; // Show if scrolled past threshold
        } else if (scrollPosition < 200) {
          return false; // Hide only if scrolled back up significantly
        }
        return prev; // Keep current state if between thresholds
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const allItems = [
    { ...latestProject, type: "projects" as const, category: "Project" },
    { ...latestBlog, type: "writing" as const, category: "Blog" },
    { ...latestPoem, type: "writing" as const, category: "Poetry" },
  ];

  const filteredItems = filter === "all" 
    ? allItems 
    : allItems.filter(item => item.type === filter);

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
                hey hey! I'm <span className="font-bold">umair</span>.
              </p>
              
              <p className="text-base md:text-lg text-foreground mb-12">
                I'm an engineer through university but defecting to finance :'D
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                welcome to my corner of the internet! :D
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                it is currently a VIP: 'Vibe-code In Progress'... Ba-dum-tss!
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground">
                feel free to snoop around for a sneak peak!!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className={`py-20 px-6 md:px-16 transition-all duration-700 ${
        showWorkSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="max-w-2xl w-full space-y-12">
            {/* Header with filters */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold">Work</h2>
              
              {/* Filter Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    filter === "all"
                      ? "bg-foreground text-background"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("writing")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    filter === "writing"
                      ? "bg-foreground text-background"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  Writing
                </button>
                <button
                  onClick={() => setFilter("projects")}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    filter === "projects"
                      ? "bg-foreground text-background"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  Projects
                </button>
              </div>
            </div>
            
            {/* Work List */}
            <div className="space-y-6">
            {filteredItems.map((item, index) => {
              const basePath = item.type === "projects" ? "/projects" : 
                               item.category === "Blog" ? "/blog" : "/poetry";
              
              return (
                <Link 
                  key={item.slug} 
                  to={`${basePath}/${item.slug}`} 
                  className="block group"
                >
                  <div className="space-y-1">
                    <h3 
                      className="text-xl font-medium group-hover:opacity-60 transition-opacity border-b border-transparent group-hover:border-current pb-1 inline-block"
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>
                        {new Date(item.date).getFullYear()}
                      </span>
                      <span>·</span>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Preview area on the right - hidden on mobile, only shows when hovering */}
            {/* TODO: Re-enable hover image preview - see V2_ROADMAP.md */}
            {/* {hoveredWorkItem && (
              <div className="hidden md:block sticky top-24 h-[400px]">
                <div className="w-full h-full bg-muted/30 rounded-lg overflow-hidden transition-opacity duration-300">
                  {/* Show different preview based on hovered item */}
                  {/* <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden flex items-center justify-center">
                    {hoveredWorkItem === 'task-flow' && (
                      <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#e5e5e5", stopOpacity: 0.8 }} />
                            <stop offset="100%" style={{ stopColor: "#a3a3a3", stopOpacity: 0.8 }} />
                          </linearGradient>
                        </defs>
                        <circle cx="120" cy="100" r="70" fill="url(#grad1)" opacity="0.6" />
                        <circle cx="300" cy="200" r="90" fill="url(#grad1)" opacity="0.4" />
                        <path d="M 50 350 Q 200 250 350 330" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3" />
                      </svg>
                    )}
                    {hoveredWorkItem === 'building-personal-website' && (
                      <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <rect x="80" y="80" width="140" height="140" fill="currentColor" opacity="0.1" transform="rotate(15 150 150)" />
                        <rect x="200" y="150" width="120" height="120" fill="currentColor" opacity="0.15" transform="rotate(-20 260 210)" />
                        <line x1="50" y1="340" x2="350" y2="340" stroke="currentColor" strokeWidth="4" opacity="0.2" />
                      </svg>
                    )}
                    {hoveredWorkItem === 'dreams-in-a-coffin' && (
                      <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 200 80 L 260 200 L 200 320 L 140 200 Z" fill="currentColor" opacity="0.1" />
                        <path d="M 100 150 Q 200 80 300 200" stroke="currentColor" strokeWidth="5" fill="none" opacity="0.2" />
                        <circle cx="330" cy="120" r="40" fill="currentColor" opacity="0.15" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            )} */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center px-6">
        <p className="text-nav text-muted-foreground mb-4">
          © Umair 2025
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <Link to="/about" className="hover:opacity-60 transition-opacity">
            About
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/projects" className="hover:opacity-60 transition-opacity">
            Projects
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/blog" className="hover:opacity-60 transition-opacity">
            Blog
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link to="/poetry" className="hover:opacity-60 transition-opacity">
            Poetry
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
