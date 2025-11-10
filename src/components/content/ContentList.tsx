import { Link } from "react-router-dom";
import { ContentItem } from "@/types/content";

interface ContentListProps {
  items: ContentItem[];
  basePath: string;
}

const ContentList = ({ items, basePath }: ContentListProps) => {
  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-3xl ml-8 md:ml-16 lg:ml-24">
        {items.map((item, index) => (
          <div 
            key={item.slug} 
            className={`${index !== 0 ? 'mt-10 md:mt-12' : ''}`}
          >
            <Link 
              to={`${basePath}/${item.slug}`}
              className="group block"
            >
              <h3 className="text-[24px] md:text-[28px] font-medium mb-2 group-hover:opacity-60 transition-opacity">
                {item.title}
              </h3>
              <p className="text-[14px] text-muted-foreground">
                {new Date(item.date).getFullYear()}
                {item.language && ` · ${item.language}`}
                {item.category && ` · ${item.category}`}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentList;
