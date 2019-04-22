import React, { Component } from "react"

import "./reset.css"
import "./App.css"
import AllBoards from "./components/AllBoards/AllBoards"
import Home from "./components/Home/Home"
import Cart from "./components/Cart/Cart"
import Nav from "./components/Nav/Nav"
// import Login from "./components/Login/Login"

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
        {/* <Login /> */}
        <Nav />
        <div
          className="anchorContainer smooth-scroll"
          onScroll={this.withScroll}
        >
          <Home />
          <AllBoards />
          <Cart />
        </div>
      </div>
    )
  }
}

export default App
