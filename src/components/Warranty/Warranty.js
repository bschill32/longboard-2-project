import React, { Component } from "react"

import "./Warranty.css"
import warrantyPic from "./../../assets/e-warranty.jpg"
import financingPic from "./../../assets/financing.svg"
import warranty1Pic from "./../../assets/warranty.svg"
import okPic from "./../../assets/ok.svg"

class Warranty extends Component {
  render() {
    return (
      <div id="warranty">
        {/* <div className="page-container">
          <h1 className="page-title">Warranty</h1>
        </div> */}
        <div className="warranty-container">
          <div className="w-ad">
            <div className="wa-1">
              <h1>Ride Risk Free</h1>
              <h5>
                We know you'll love your Boosted board. Ride today and
                experience it yourself.
              </h5>
            </div>
          </div>
          <div className="w-info">
            <div className="wi-1">
              <div className="w-icon">
                <img src={financingPic} />
              </div>
              <h3>Financing Available</h3>
              <p>
                You don’t have to break the bank to ride Boosted. Pay over time
                with easy, fixed monthly payments.
              </p>
            </div>
            <div className="wi-2">
              <div className="w-icon">
                <img src={warranty1Pic} />
              </div>
              <h3>6-Month Warranty</h3>
              <p>
                Ride with confidence. We provide full protection against
                manufacturing defects.
              </p>
            </div>
            <div className="wi-3">
              <div className="w-icon">
                <img src={okPic} />
              </div>
              <h3>30 Day Guarantee* </h3>
              <p>
                Take it for a spin. If you don’t love your Boosted board, we’ll
                gladly take it back for a refund.
              </p>
            </div>
          </div>
          <div className="w-img">
            <img src={warrantyPic} />
          </div>
        </div>
      </div>
    )
  }
}

export default Warranty
