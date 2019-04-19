import axios from "axios"

let initialState = {
  cart: []
}

const GET_CART = "GET_CART"
const ADD_TO_CART = "ADD_TO_CART"

export function getCart() {
  let cart = axios.get("/api/cart").then(res => {
    // console.log("111111", res.data)
    return res.data
  })
  return {
    type: GET_CART,
    payload: cart
  }
}

export function addToCart(id) {
  let add = axios.post(`/api/cart/${id}`).then(res => {
    // console.log("111111", res.data)
    return res.data
  })
  return {
    type: ADD_TO_CART,
    payload: add
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART + "_FULFILLED":
      return { ...state, cart: action.payload }
    case ADD_TO_CART + "_FULFILLED":
      return { ...state, cart: action.payload }
    default:
      return state
  }
}
