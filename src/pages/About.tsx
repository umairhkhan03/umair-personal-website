import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">About Me</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            A journey across continents, languages, and perspectives.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Background</h2>
          
          <p className="text-body leading-relaxed">
                ...
              </p>
        </div>
      </section>

      {/* Defining Experiences Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-muted/20">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Defining Experiences</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">The Third Culture Kid Experience</h3>
              <p className="text-body leading-relaxed">
                ...
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Language as Home</h3>
              <p className="text-body leading-relaxed">
                I think in English, dream in multiple languages, and feel certain emotions most deeply 
                in Urdu. Each language carries different parts of my identity, ...
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Building & Creating</h3>
              <p className="text-body leading-relaxed">
                ...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">What I Like</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Creative Pursuits</h3>
              <p className="text-body leading-relaxed">
                ...
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Intellectual Interests</h3>
              <p className="text-body leading-relaxed">
                ...
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Media & Culture</h3>
              <p className="text-body leading-relaxed">
                ...
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Simple Pleasures</h3>
              <p className="text-body leading-relaxed">
                ...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Don't Like Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-muted/20">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">What I Don't Like</h2>
          
          <p className="text-body leading-relaxed">
                ...
              </p>
          
              <p className="text-body leading-relaxed">
                ...
              </p>
        </div>
      </section>

      {/* Current Chapter Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24 pb-32">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Current Chapter</h2>
          
          <p className="text-body leading-relaxed">
                ...
              </p>
          
          <p className="text-body leading-relaxed">
            This website is part of that journey—a space to document, create, and share. It's a work 
            in progress, much like myself.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
