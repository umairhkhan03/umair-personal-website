import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6">
        <h1 className="text-hero font-bold uppercase tracking-tight">
          Umair
        </h1>
      </section>

      {/* About Preview Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
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
