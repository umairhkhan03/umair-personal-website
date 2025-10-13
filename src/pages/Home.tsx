import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [times, setTimes] = useState({
    riyadh: "",
    bhopal: "",
    manchester: "",
  });

  const [showRiyadhStory, setShowRiyadhStory] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      
      // Format time for each timezone
      const riyadhTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Riyadh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      const bhopalTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      const manchesterTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      setTimes({
        riyadh: riyadhTime,
        bhopal: bhopalTime,
        manchester: manchesterTime,
      });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show Riyadh story when scrolled past 300px
      setShowRiyadhStory(scrollPosition > 300);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Timezones Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 gap-12">
        <div className="max-w-2xl w-full">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex justify-between items-center">
              <span className="text-body">Riyadh, Saudi Arabia</span>
              <span className="text-body font-mono">{times.riyadh}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-body">Bhopal, India</span>
              <span className="text-body font-mono">{times.bhopal}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-body">Manchester, United Kingdom</span>
              <span className="text-body font-mono">{times.manchester}</span>
            </div>
          </div>
        </div>

        {/* Clock Ticking Animation */}
        <div className="clock-container">
          <div className="clock">
            <div className="clock-hand hour-hand"></div>
            <div className="clock-hand minute-hand"></div>
            <div className="clock-hand second-hand"></div>
            <div className="clock-center"></div>
          </div>
        </div>

        <div className="max-w-2xl mt-8">
          <p className="text-body text-center md:text-left">
            A journey through timezones
          </p>
        </div>
      </section>

      {/* Riyadh Sticky Section */}
      <section className="min-h-screen relative">
        <div 
          className={`${
            showRiyadhStory ? 'fixed top-24 left-0 right-0' : 'absolute top-0 left-0 right-0'
          } transition-all duration-500 px-6 md:px-16 z-20 bg-background py-4`}
        >
          <div className="max-w-2xl mx-auto flex justify-between items-center border-b border-border pb-4">
            <span className="text-body">Riyadh, Saudi Arabia</span>
            <span className="text-body font-mono">{times.riyadh}</span>
          </div>
        </div>

        <div className={`
          transition-opacity duration-700 px-6 md:px-16 pt-32
          ${showRiyadhStory ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-body leading-relaxed">
              I grew up in Riyadh, Saudi Arabia, and spent about eight years there — right up until Year 2 at MEIS. Then we moved to Dammam, where I continued school at Dunes International. Honestly, those years were golden. The people, the warmth, the rhythm of life — everything just felt alive.
            </p>
            <p className="text-body leading-relaxed">
              Somewhere along the way, I fell head over heels for Saudi food. Zaatar became a breakfast essential, foul-tameez a weekend tradition, and baba ghanoush? Pure magic. Don't even get me started on waraq ainab — I could eat those little grape-leaf rolls forever.
            </p>
            <p className="text-body leading-relaxed">
              Looking back, those days in Riyadh and Dammam shaped so much of who I am today — a mix of culture, food, and nostalgia that still follows me wherever I go.
            </p>
          </div>
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
