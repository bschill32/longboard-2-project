import React, { Component } from "react"

import "./OurMission.css"

class OurMission extends Component {
  render() {
    return (
      <div className="mission" id="mission">
        {/* <div className="page-container">
          <h1 className="page-title">Our Mission</h1>
        </div> */}
        <div className="m-spacing">
          <div className="m-container">
            <div className="m-box">
              <h1>Meet Your New Electric Vehicle</h1>
              <hr />
              <p>
                Boosted is on a mission to make cities feel smaller, campuses
                more accessible, and commutes more enjoyable. Our boards are
                designed and built to handle the rigors of daily use while
                offering an exhilarating ride with unparalleled power and
                control.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OurMission
