import React, { Component } from "react"
import ReactPlayer from "react-player"

import "./Video.css"
// import video from "../../assets/e-video.mp4"

class Video extends Component {
  render() {
    return (
      <div id="video">
        {/* <div className="page-container">
          <h1 className="page-title">Video</h1>
        </div> */}
        <div className="v-container">
          <div className="vc-1">
            <div className="v-text">
              <div className="vt-box">
                <h1>Love getting there.</h1>
              </div>
            </div>
            <div className="v-box">
              <ReactPlayer
                url="https://videos.ctfassets.net/axbo81ontyws/fNaX5yZfr8XKE8f2WH5YZ/76350dfceaa693fbe852bdb4abcc0481/WEB_PAGE_BANNER_2.mp4"
                muted={true}
                playing
                loop
                height="100%"
                width="100%"
              />
            </div>
          </div>
          {/* <video style="width:100%;height:100%;position:absolute;top:0;left:0;object-fit:cover" autoplay="" loop="" muted="" playsinline=""><source src="//videos.ctfassets.net/axbo81ontyws/fNaX5yZfr8XKE8f2WH5YZ/76350dfceaa693fbe852bdb4abcc0481/WEB_PAGE_BANNER_2.mp4" type="video/mp4"></video> */}
        </div>
      </div>
    )
  }
}

export default Video
