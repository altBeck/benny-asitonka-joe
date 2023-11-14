import{ useState } from "react";
import Carousel from "../carousel/Carousel";

const Work = ({ company, role, duration, details, images }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border shado p-4 rounded-lg bg-[f2f2f2]">
      <div
        onClick={toggleExpansion}
        className="cursor-pointer text-lg font-semibold"
      >
        {company} <span className="text-base">({duration})</span>
      </div>
      {isExpanded && (
        <div className="mt-2">
          <h4 className="font-semibold mb-2 text-gray-600">{role}</h4>
          {images && <Carousel images={images} />}
          <ul className="space-y-2 pt-8">
            {details.map((detail, index) => (
              <li key={index}>
                <span className="font-medium">{detail.title}</span>
                {detail.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Work;
