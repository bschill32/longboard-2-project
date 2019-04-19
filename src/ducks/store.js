import { createStore, combineReducers, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise-middleware"
import cartReducer from "./reducers/cartReducer"
import boardReducer from "./reducers/boardReducer"
import userReducer from "./reducers/userReducer"

const rootReducer = combineReducers({
  cartBoards: cartReducer,
  allBoards: boardReducer,
  user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
