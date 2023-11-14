import { useState } from 'react';
import VideoPlayer from "../videoPlayer/VideoPlayer";

const ProjectItem = ({ title, description, videoUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border shado p-4 rounded-lg bg-white">
      <div onClick={toggleExpansion} className="cursor-pointer text-lg font-semibold">
        {title}
      </div>
      {isExpanded && (
        <div className="mt-2 pb-4">
          <p className="text-gray-600 pb-4">{description}</p>
          <VideoPlayer src={videoUrl} />
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
