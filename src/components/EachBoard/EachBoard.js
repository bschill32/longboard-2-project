import React, { Component } from "react"
import { connect } from "react-redux"

import { addToCart } from "../../ducks/reducers/cartReducer"
import "./EachBoard.css"
import ecup from "./../../assets/e-cup.svg"
import affirm from "./../../assets/e-affirm.png"

class Board extends Component {
  render() {
    let {
      id,
      name,
      phrase,
      speed,
      shape,
      range,
      image,
      price
    } = this.props.board
    return (
      <div className="board-container">
        <div className="bc-img">
          <div className="bi-top">
            <div className="bi-1">
              <img src={ecup} />
            </div>
            <div className="bi-text">
              <h3>Best electric</h3>
              <h3>skateboard of 2018</h3>
            </div>
          </div>
          <div className="bic">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="b-info">
          <div className="bin-top">
            <div className="bin-top-half">
              <h2>{name}</h2>
              <p>{phrase}</p>
            </div>
            <ul className="bin-ul">
              <li>
                <div className="bin-icon">
                  <i class="fas fa-tachometer-alt" />
                </div>
                <h3>{speed}</h3>
              </li>
              <li>
                <div className="bin-icon">
                  <i class="fas fa-dumbbell" />
                </div>
                <h3>{shape}</h3>
              </li>
              <li>
                <div className="bin-icon">
                  <i class="fas fa-route" />
                </div>
                <h3>{range}</h3>
              </li>
            </ul>
            <hr />
          </div>
          <div className="bin-bottom">
            <h2>${price}</h2>
            <p>
              Starting at $74/mo with
              <img src={affirm} />
            </p>
            <button
              className="bin-button"
              onClick={() => this.props.addToCart(id)}
            >
              Add To Cart
            </button>
            <div className="ship">Ships in 1-2 business days</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { addToCart }
)(Board)
