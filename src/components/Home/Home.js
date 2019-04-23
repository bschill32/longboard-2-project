import React, { Component } from "react"

import "./Home.css"

class Home extends Component {
  render() {
    return (
      <div className="home" id="home">
        <div>
          <div className="textBox">
            <h1>Introducing vehicle-grade electric skateboards</h1>
            <h2>
              Rethink how
              <br />
              you get there.
            </h2>
          </div>
          <div className="buttonBox">
            <a href="#boards">
              <button>Shop Now</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
