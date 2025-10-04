import { useParams } from "react-router-dom";
import ContentDetailPlaceholder from "@/components/content/ContentDetailPlaceholder";

const PoemDetail = () => {
  const { slug } = useParams();
  
  const formattedTitle = slug
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || '';

  return (
    <ContentDetailPlaceholder 
      title={formattedTitle}
      backPath="/poetry"
      backLabel="Back to Poetry"
    />
  );
};

export default PoemDetail;
