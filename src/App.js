import React, { Component } from "react"

import "./App.css"
import AllBoards from "./components/Allboards/AllBoards"
import Home from "./components/Home"
import Team from "./components/Team"
import About from "./components/About"
import Cart from "./components/Cart"
import Nav from "./components/Nav"

class App extends Component {
  withScroll = e => {
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
        <Nav />
        <div
          className="anchorContainer smooth-scroll"
          onScroll={this.withScroll}
        >
          <Home />
          <AllBoards />
          <Team />
          <About />
          <Cart />
        </div>
      </div>
    )
  }
}

export default App
