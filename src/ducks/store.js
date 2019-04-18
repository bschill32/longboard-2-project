import { createStore, combineReducers, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise-middleware"
import cartReducer from "./reducers/cartReducer"
import boardReducer from "./reducers/boardReducer"

const rootReducer = combineReducers({
  cartBoards: cartReducer,
  allBoards: boardReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
