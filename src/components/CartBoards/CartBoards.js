import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"

import "./CartBoards.css"
import { getCart } from "../../ducks/reducers/cartReducer"
import ecup from "./../../assets/e-cup.svg"
import affirm from "./../../assets/e-affirm.png"

class CartBoards extends Component {
  updateQuantity = update => {
    let { id, quantity } = this.props.cartBoards
    if (update === "up") {
      quantity++
    } else if (update === "down") {
      quantity--
    }
    axios.put(`/api/cart/${id}?quantity=${quantity}`).then(results => {
      this.props.getCart(results.data)
    })
  }

  deleteItem = () => {
    axios.delete(`/api/cart/${this.props.cartBoards.id}`).then(results => {
      this.props.getCart(results.data)
    })
  }

  render() {
    let {
      name,
      phrase,
      speed,
      shape,
      range,
      image,
      price,
      quantity
    } = this.props.cartBoards
    return (
      <div className="c-container">
        <div className="cc-img">
          <div className="ci-top">
            <div className="ci-1">
              {/* <img src={ecup} /> */}
              <h1>{quantity}</h1>
            </div>
            <div className="ci-text">
              <h3>Best electric</h3>
              <h3>skateboard of 2018</h3>
            </div>
          </div>
          <div className="cic">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="c-infoPage">
          <div className="cin-top">
            <div className="cin-top-half">
              <h2>{name}</h2>
              <p>{phrase}</p>
            </div>
            <ul className="cin-ul">
              <li>
                <div className="cin-icon">
                  <i class="fas fa-tachometer-alt" />
                </div>
                <h3>{speed}</h3>
              </li>
              <li>
                <div className="cin-icon">
                  <i class="fas fa-dumbbell" />
                </div>
                <h3>{shape}</h3>
              </li>
              <li>
                <div className="cin-icon">
                  <i class="fas fa-route" />
                </div>
                <h3>{range}</h3>
              </li>
            </ul>
          </div>
          <div className="cin-bottom">
            {/* <h2>${Math.floor(price * quantity * 100) / 100}</h2> */}
            <p>
              Starting at $74/mo with
              <img src={affirm} />
            </p>
            <div className="cin-buttons">
              <button className="cin-button" onClick={this.deleteItem}>
                Delete
              </button>
              <button
                className="cin-button2"
                onClick={() => this.updateQuantity("up")}
              >
                Add (+)
              </button>
              <button
                className="cin-button2"
                onClick={() => this.updateQuantity("down")}
              >
                Subtract (-)
              </button>
            </div>

            <div className="c-ship">Ships in 1-2 business days</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { getCart }
)(CartBoards)
