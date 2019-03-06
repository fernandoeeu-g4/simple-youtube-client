import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./app.css";

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit("Twice");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onSelectVideo = video => {
    console.log("From the App.js! ", video);
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="row">
          <div className="col-md-7">
            {selectedVideo !== null ? (
              <div>
                <VideoDetail video={selectedVideo} />
              </div>
            ) : null}
          </div>
          <div className="col-md-5 videos-list">
            <VideoList onSelectVideo={this.onSelectVideo} videos={videos} />
          </div>
        </div>
      </div>
    );
  }
}
