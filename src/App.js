import React, { Component } from "react"

import "./reset.css"
import "./App.css"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import AllBoards from "./components/AllBoards/AllBoards"
import OurMission from "./components/OurMission/OurMission"
import Video from "./components/Video/Video"
import Reviews from "./components/Reviews/Reviews"
import Warranty from "./components/Warranty/Warranty"
import Cart from "./components/Cart/Cart"
// import Login from "./components/Login/Login"

class App extends Component {
  withScroll = e => {
    // console.log(e.target.scrollTop, e.target)
    let navbar = document.getElementById("navbar")
    // let anchorContainer = document.querySelector(".anchorContainer")
    if (e.target.scrollTop || e.target.scrollTop === 0) {
      if (e.target.scrollTop <= 75) {
        navbar.className = ""
      } else {
        navbar.className = "scroll"
      }
    } else {
      if (e.target.scrollingElement.scrollTop <= 100) {
        navbar.className = ""
      } else {
        navbar.className = "scroll"
      }
    }
    // console.log(anchorContainer.className)
  }

  render() {
    return (
      <div>
        {/* <Login /> */}
        <Nav />
        <div
          className="anchorContainer smooth-scroll"
          onScroll={this.withScroll}
        >
          <Home />
          <OurMission />
          <AllBoards />
          <Video />
          <Reviews />
          <Warranty />
          <Cart />
        </div>
      </div>
    )
  }
}

export default App
