import React, { Component } from "react"

import "./Video.css"

class Video extends Component {
  render() {
    return (
      <div id="video">
        <div className="page-container">
          <h1 className="page-title">Video</h1>
        </div>
        <div className="video-container">
          <div className="video-info" />
        </div>
      </div>
    )
  }
}

export default Video
