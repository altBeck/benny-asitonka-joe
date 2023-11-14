import { useRef, useState } from 'react';
import playIcon from '../../assets/play.svg'; 

const VideoPlayer = ({ src }) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-player">
      <video width="100%" ref={videoRef} onClick={handlePlayPause} className="rounded-lg">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <img
          src={playIcon}
          className="play-button"
          onClick={handlePlayPause}
          alt="Play video"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
