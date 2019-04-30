import React, { Component } from "react"

import "./Nav.css"
import backfire from "./../../assets/e-backfire1.png"

class Nav extends Component {
  render() {
    return (
      <div id="navbar">
        <h1 className="logo">
          {/* <a href="#home">Backfire Boards</a> */}
          <img src={backfire} />
        </h1>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#mission">Our Mission</a>
          <a href="#boards">Boards</a>
          <a href="#reviews">Reviews</a>
          <a href="#warranty">Warranty</a>
          <a href="#cart">
            <i className="fas fa-cart-arrow-down" />
          </a>
        </div>
      </div>
    )
  }
}

export default Nav
