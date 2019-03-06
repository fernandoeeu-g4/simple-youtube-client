import React, { Component } from "react";
import "./video-detail.css";

class VideoDetail extends Component {
  state = {
    video: null
  };

  render() {
    const { title, description } = this.props.video.snippet;
    const { videoId } = this.props.video.id;
    return (
      <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title="video"
            allowFullScreen
          />
        </div>
        <div className="video-description my-2">
          <h2 className="p-2">{title}</h2>
          <h5 className="p-2">{description}</h5>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
