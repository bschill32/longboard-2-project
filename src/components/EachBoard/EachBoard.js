import React, { Component } from "react"
import { connect } from "react-redux"

import { addToCart } from "../../ducks/reducers/cartReducer"

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
      <div className="board-space">
        <div className="tooltip1">
          <img
            className="board-zoom"
            width="191px"
            height="293px"
            src={image}
            alt=""
          />
          {/* <span className="tooltiptext1">
            {dim}
            <br /> ${price}
            <br />
            <button className="board-button" onClick={() => this.props.addToCart(id)}>
              Add To Cart
            </button>
          </span> */}
        </div>
        <div className="board-box">
          <h3 className="board-name">{name}</h3>
          <p>{phrase}</p>
          <p>{speed}</p>
          <p>{shape}</p>
          <p>{range}</p>
          <p>${price}</p>

          <button
            className="board-button"
            onClick={() => this.props.addToCart(id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { addToCart }
)(Board)
