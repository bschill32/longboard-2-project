import React from "react"
import "./Nav.css"

function Nav(props) {
  return (
    <div id="navbar">
      <h1 className="logo">
        <a href="#home">Backfire Boards</a>
      </h1>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#mission">Our Mission</a>
        <a href="#boards">Boards</a>
        <a href="#reviews">Reviews</a>
        <a href="#warranty">Warranty</a>
        <a href="#cart">
          <i class="fas fa-cart-arrow-down" />
        </a>
      </div>
    </div>
  )
}

export default Nav
