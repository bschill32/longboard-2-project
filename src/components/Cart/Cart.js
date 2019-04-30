import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { Elements, StripeProvider } from "react-stripe-elements"

import "./Cart.css"
import CartBoards from "../CartBoards/CartBoards"
import { getCart } from "../../ducks/reducers/cartReducer"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

// const { STRIPE_TEST_KEY } = process.env

class Cart extends Component {
  componentDidMount() {
    this.props.getCart()
  }

  checkout = () => {
    if (this.props.cartBoards.length) {
      axios.delete("/api/checkout").then(res => {
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
    let salesTax = Math.floor(cartTotal * 0.0775)

    return (
      <div id="cart">
        {/* <div className="page-container">
          <h1 className="page-title">Cart</h1>
        </div> */}
        <div className="cart-container">
          <div className="c-info">{cart}</div>
          <div className="stripe-container">
            <div className="sc-1">
              <div className="s-order">
                <h2>Review order</h2>
                <div className="so-div">
                  Subtotal
                  <span class="so-span">
                    ${Math.floor(cartTotal * 100) / 100}
                  </span>
                </div>
                <div className="so-div">
                  Shipping
                  <span class="so-span">Free</span>
                </div>
                <div className="so-div">
                  Estimated tax*
                  <span class="so-span">${salesTax}</span>
                </div>
                <hr />
                <div className="so-total">
                  Estimated total
                  <span class="so-span">
                    ${Math.floor(cartTotal + salesTax)}
                  </span>
                </div>
              </div>
            </div>
            <div className="sc-2">
              <div className="s-payment">
                <h2>Payment</h2>
                <div className="stripe">
                  <StripeProvider apiKey="pk_test_3LbwziJs8XwqPy2dMzCkyeU0">
                    <div className="example">
                      {/* <p>Total ${Math.floor(cartTotal * 100) / 100}</p> */}
                      <Elements>
                        <CheckoutForm checkout={this.checkout} />
                      </Elements>
                    </div>
                  </StripeProvider>
                </div>
              </div>
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
