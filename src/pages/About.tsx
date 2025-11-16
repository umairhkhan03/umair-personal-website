import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold ">about</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 lg:px-24 pb-32">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">me:</h2>
          
          <p className="text-base md:text-lg text-foreground mb-4">
            i'm an engineer through university but the uk banks got me defecting to finance :'D
            <br />
            <br />
            i grew up as a tck (third culture kid) in saudi arabia and india, now based in the uk.
            <br />
            <br />
            i'll write up some more cool experiences and learnings soon.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">this website:</h2>

          <p className="text-base md:text-lg text-foreground">
            i built this website after listening to a talk from tim berners lee - the founder of the web (www.com and hence the internet) at a talk in london tech week. 
            <br />
            <br />
            he explained his true intention behind building the internet was so for people to build their own personal websites on it. 
            <br />
            <br />
            to explore and connect with others across the world. 
            <br />
            <br />
            to build your own unique page that showcases your individuality and helps you learn about other human beings and their little corners of the world that were once only found through books. 
            <br />
            <br />
            kinda like facebook - but without personality quizzes telling you which type of potato you are...
            <br />
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
