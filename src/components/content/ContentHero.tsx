interface ContentHeroProps {
  title: string;
}

const ContentHero = ({ title }: ContentHeroProps) => {
  return (
    <section className="h-screen flex items-center justify-center px-6 overflow-hidden">
      <h1 className="font-bold text-[28vw] md:text-[25vw] leading-none tracking-tight">
        {title}
      </h1>
    </section>
  );
};

export default ContentHero;
