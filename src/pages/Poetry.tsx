import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import poetryData from "@/data/poetry.json";

const Poetry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-6 overflow-hidden">
        <h1 className="font-bold text-[28vw] md:text-[25vw] leading-none tracking-tight">
          POETRY
        </h1>
      </section>

      {/* Poetry List Section */}
      <section className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl">
          {poetryData.map((poem, index) => (
            <div 
              key={poem.slug} 
              className={`${index !== 0 ? 'mt-20 md:mt-24' : ''}`}
            >
              <Link 
                to={`/poetry/${poem.slug}`}
                className="group block"
              >
                <h3 className="text-[24px] md:text-[28px] font-medium mb-2 group-hover:opacity-60 transition-opacity">
                  {poem.title}
                </h3>
                <p className="text-[14px] text-muted-foreground">
                  {new Date(poem.date).getFullYear()} · {poem.language}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Poetry;
