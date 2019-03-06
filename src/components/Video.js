import React from "react";
import "./video.css";

const Video = props => {
  //   const { videoId } = props.video.id;
  const { onSelectVideo } = props;
  const { title } = props.video.snippet;
  const { url } = props.video.snippet.thumbnails.medium;

  return (
    <div className="row" onClick={() => onSelectVideo(props.video)}>
      <div className="col-md-5">
        <img src={url} alt={title} className="thumb" />
      </div>
      <div className="col-md-7">
        <div className="d-flex align-items-center">
          <span className="description mx-4">
            <p>{title}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Video;
