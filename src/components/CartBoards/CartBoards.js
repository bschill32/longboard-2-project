import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"

import { getCart } from "../../ducks/reducers/cartReducer"

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
    let { name, image, price, quantity } = this.props.cartBoards
    return (
      <div className="cart-space">
        <h3 className="cart-name">{name}</h3>
        <img
          class="board-zoom"
          width="70px"
          height="100px"
          src={image}
          alt=""
        />
        <p>Quantity {quantity}</p>
        <button class="cart-button" onClick={() => this.updateQuantity("up")}>
          +
        </button>
        <button class="cart-button" onClick={() => this.updateQuantity("down")}>
          -
        </button>
        <button class="cart-button" onClick={this.deleteItem}>
          Delete
        </button>
        <p>${Math.floor(price * quantity * 100) / 100}</p>
      </div>
    )
  }
}

export default connect(
  null,
  { getCart }
)(CartBoards)
