import React, { Component } from "react"
import { Link } from "react-router-dom"

import temp from "./../assets/Shoe.jpg"

class Team extends Component {
  render() {
    return (
      <div id="team">
        <div className="page-container">
          <h1 className="page-title">Team</h1>
        </div>
        <div className="team-container">
          <div className="team-info">
            <div className="pic-zoom">
              <img
                className="team-pic"
                width="246px"
                height="246px"
                src={temp}
                alt=""
              />
              <h2 className="team-rep">Kolohe Andino</h2>
              <p>WCT</p>
              <a
                className="instagram"
                className="tooltip"
                href="https://www.instagram.com/koloheandino22/?hl=en"
              >
                <i className="fab fa-instagram fa-2x">
                  <span className="tooltiptext">Follow on Instagram</span>
                </i>
              </a>
            </div>
            <div>
              <img
                className="team-pic"
                width="246px"
                height="246px"
                src={temp}
                alt=""
              />
              <h2 className="team-rep">Mason Ho</h2>
              <a
                className="instagram"
                className="tooltip"
                href="https://www.instagram.com/cocom4debarrelkilla/?hl=en"
              >
                <i className="fab fa-instagram fa-2x">
                  <span className="tooltiptext">Follow on Instagram</span>
                </i>
              </a>
            </div>
            <div>
              <img
                className="team-pic"
                width="246px"
                height="246px"
                src={temp}
                alt=""
              />
              <h2 className="team-rep">Carissa Moore</h2>
              <p>3X World Champ | WCT</p>
              <a
                className="instagram"
                className="tooltip"
                href="https://www.instagram.com/rissmoore10/?hl=en"
              >
                <i className="fab fa-instagram fa-2x">
                  <span className="tooltiptext">Follow on Instagram</span>
                </i>
              </a>
            </div>
            <div>
              <img
                className="team-pic"
                width="246px"
                height="246px"
                src={temp}
                alt=""
              />
              <h2 className="team-rep">Taj Burrow</h2>
              <a
                className="instagram"
                className="tooltip"
                href="https://www.instagram.com/tajamos/?hl=en"
              >
                <i className="fab fa-instagram fa-2x">
                  <span className="tooltiptext">Follow on Instagram</span>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      // {/* <div className="team" id='team'>
      //     <h1>Team</h1>
      // </div> */}
    )
  }
}

export default Team
