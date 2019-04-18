import React from "react"
import { Link, withRouter } from "react-router-dom"

function Nav(props) {
  return (
    <div id="navbar">
      <h1 className="logo">
        <a href="#home">Backfire Boards</a>
      </h1>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#boards">LongBoards</a>
        <a href="#team">Team</a>
        <a href="#about">About</a>
        <a href="#cart">Cart{/* <i class="fas fa-cart-arrow-down" /> */}</a>
      </div>
    </div>
  )
}

export default withRouter(Nav)
