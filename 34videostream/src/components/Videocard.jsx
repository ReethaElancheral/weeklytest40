import React from "react";

const VideoCard = ({ video }) => (
  <div className="video-card">
    <iframe
      src={video.embedUrl}
      title={video.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <h3>{video.title}</h3>
    <p>{video.platform}</p>
  </div>
);

export default VideoCard;
