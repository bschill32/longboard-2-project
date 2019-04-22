import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { Elements, StripeProvider } from "react-stripe-elements"

import "./Cart.css"
import CartBoards from "../CartBoards/CartBoards"
import { getCart } from "../../ducks/reducers/cartReducer"
import CheckoutForm from "../CheckoutForm"

// const { STRIPE_TEST_KEY } = process.env

class Cart extends Component {
  componentDidMount() {
    this.props.getCart()
  }

  checkout = () => {
    if (this.props.cartBoards.length) {
      axios.delete("/api/cart/checkout").then(res => {
        alert("Payment Successful!")
        this.props.getCart(res.data)
      })
    } else {
      alert("You need to add something to your Cart!")
    }
  }

  render() {
    let cartTotal = 0
    let cart = this.props.cartBoards.map(val => {
      cartTotal += val.price * val.quantity
      return <CartBoards cartBoards={val} key={val.id} />
    })
    return (
      <div id="cart">
        <div className="page-container">
          <h1 className="page-title">Cart</h1>
        </div>
        <div className="cart-container">
          <div className="cart-info">{cart}</div>
          <div className="stripe-container">
            <div className="stripe">
              <StripeProvider apiKey="pk_test_3LbwziJs8XwqPy2dMzCkyeU0">
                <div className="example">
                  <p>Total ${Math.floor(cartTotal * 100) / 100}</p>
                  <Elements>
                    <CheckoutForm checkout={this.checkout} />
                  </Elements>
                </div>
              </StripeProvider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
  return {
    cartBoards: reduxStoreState.cartBoards.cart
  }
}

export default connect(
  mapStateToProps,
  { getCart }
)(Cart)
