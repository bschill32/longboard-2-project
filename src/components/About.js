import React, { Component } from "react"

import temp from "./../assets/Shoe.jpg"

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="page-container">
          <h1 className="page-title">About</h1>
        </div>
        <div className="about-container">
          <div className="about-info">
            <div className="about-story">
              <h2>Our Story:</h2>
              <h1>Do Good. Relax.</h1>
              <div className="text">
                <p>
                  Boarders all over the world know that longboarding is more
                  than a hobby or a sport — it’s a way of life. This site was
                  conceived, lovingly planned, and finally created to unite
                  these kindred spirits from every coast and sharing their
                  collective knowledge with budding boarders. Spreading the pure
                  joy of longboarding is our way of improving the global quality
                  of life, one wave at a time.
                </p>

                <p>
                  Because longboarding is a mysterious and awe-inspiring feat,
                  we set out to create a website that makes longboarding
                  accessible to regular people, empowering those who only dream
                  about it to actually go out and try it. You don’t have to be
                  in perfect shape, or have any prior experience, to feel the
                  thrill of gliding down an open road.
                </p>
              </div>
              <h2>Share It!</h2>
              <a
                className="share-icon"
                class="tooltip"
                href="https://twitter.com/"
              >
                <i class="fab fa-twitter-square fa-2x">
                  <span class="tooltiptext">Share on Twitter</span>
                </i>
              </a>
              <a
                className="share-icon"
                class="tooltip"
                href="https://www.instagram.com/"
              >
                <i class="fab fa-instagram fa-2x">
                  <span class="tooltiptext">Share on Instagram</span>
                </i>
              </a>
              <a
                className="share-icon"
                class="tooltip"
                href="https://www.facebook.com/"
              >
                <i class="fab fa-facebook-square fa-2x">
                  <span class="tooltiptext">Share on Facebook</span>
                </i>
              </a>
            </div>
            <div className="about-pics">
              <div className="pics-container">
                <div class="row">
                  <div class="column">
                    <img width="162px" height="217px" src={temp} alt="" />
                    <img width="162px" height="104px" src={temp} alt="" />
                  </div>
                  <div class="column">
                    <img width="135px" height="113px" src={temp} alt="" />
                    <img width="135px" height="208px" src={temp} alt="" />
                    <img width="136px" height="185px" src={temp} alt="" />
                    <img width="136px" height="136px" src={temp} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
