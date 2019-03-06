import React from "react";
import Video from "./Video";
import "./video-list.css";

const VideoList = props => {
  const { videos, onSelectVideo } = props;

  const renderedList = videos.map(video => {
    return (
      <li className="list-group-item grid-item">
        <Video
          onSelectVideo={onSelectVideo}
          video={video}
          key={video.id.videoId}
        />
      </li>
    );
  });
  return <ul className="list-group list-group-flush">{renderedList}</ul>;
};

export default VideoList;
