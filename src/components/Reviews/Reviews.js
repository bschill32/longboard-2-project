import React, { Component } from "react"

import "./Reviews.css"
import photo from "./../../assets/e-reviews.jpg"

class Reviews extends Component {
  render() {
    return (
      <div id="reviews">
        {/* <div className="page-container">
          <h1 className="page-title">Reviews</h1>
        </div> */}
        <div className="reviews">
          <div className="reviews-container">
            <div className="r-box">
              <div className="r-info">
                <div className="r-name">
                  <div className="rn-1">
                    <h5>Timo D.</h5>
                    <hr />
                  </div>
                  <span>11/9/2018</span>
                </div>
                <div className="location">Oxford, United Kingdom</div>
                <div className="rating">
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                </div>
                <div className="catch-phrase">Truly Amazing</div>
                <div className="scrolling-box">
                  <p className="overview">
                    The amount of time I save is huge. I’ve never gone 1 day
                    without at least one person asking me how I’m riding my Mini
                    S. 10 out of 10.
                  </p>
                </div>
              </div>
            </div>
            <div className="r-box">
              <div className="r-info">
                <div className="r-name">
                  <div className="rn-1">
                    <h5>Jeff H.</h5>
                    <hr />
                  </div>
                  <span>3/6/2018</span>
                </div>
                <div className="location">Napa, CA</div>
                <div className="rating">
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                </div>
                <div className="catch-phrase">10 Out of 10</div>
                <div className="scrolling-box">
                  <p className="overview">
                    I received the Backfire Stealth for Christmas and it is
                    absolutely awesome. I have never owned an electric
                    skateboard before but I am pretty sure this one has ruined
                    me for all other boards. I have surfed for over 30 years and
                    snowboarded for over 20 and this skateboard carves just like
                    both. The torque is unbelievable. Now I have to fight my two
                    children to get board time but it is an awesome addition to
                    the family. Great job Backfire design team.
                  </p>
                </div>
              </div>
            </div>
            <div className="r-box">
              <div className="r-info">
                <div className="r-name">
                  <div className="rn-1">
                    <h5>Bear C.</h5>
                    <hr />
                  </div>
                  <span>2/21/2019</span>
                </div>
                <div className="location">Honolulu, HI</div>
                <div className="rating">
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                  <span class="fa fa-star " />
                </div>
                <div className="catch-phrase">BEST on the market</div>
                <div className="scrolling-box">
                  <p className="overview">
                    Out of all the electric boards, this is still the best I can
                    find. Some are faster, or have better range, but none are as
                    high quality. The Backfire is the full package -- the best
                    of both worlds, range and speed. Backfire is the only
                    electric board I choose to ride.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="share">
            {/* <h2>Share It!</h2> */}
            <hr className="hr-left" />
            <div className="r-icons">
              <a href="https://twitter.com/">
                <i className="fab fa-twitter-square fa-2x" />
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram fa-2x" />
              </a>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-square fa-2x" />
              </a>
            </div>
            <hr className="hr-right" />
          </div>
        </div>
        <div className="e-reviews">
          <img src={photo} alt="" />
        </div>
      </div>
    )
  }
}

export default Reviews
{
  /* <div id="reviews">
  <div className="page-container">
    <h1 className="page-title">Reviews</h1>
  </div>
  <div className="r-container">
    <div className="r-box">
      <div className="rb-1">
        <div className="rb-2">
          <div className="rb-3">data</div>
          <div className="rb-3">data</div>
        </div>
      </div>
    </div>
  </div>
</div> */
}
