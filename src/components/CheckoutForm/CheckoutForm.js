import React, { Component } from "react"
import { CardElement, injectStripe } from "react-stripe-elements"
import axios from "axios"

import "./CheckoutForm.css"

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    let token = await this.props.stripe.createToken({ name: "Name" })
    let id = token.token.id
    axios.post("/api/charge", { id }).then(() => {
      this.setState({ complete: true })
      this.props.checkout()
    })
  }

  render() {
    if (this.state.complete)
      return (
        <h1 className="success">
          Payment Successful <i class="fas fa-check-circle" />
        </h1>
      )
    return (
      <div className="checkout">
        <CardElement className="c-pay" />
        <button className="c-button" onClick={this.submit}>
          Buy Now
        </button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
