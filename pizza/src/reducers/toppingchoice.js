import { CHOOSE_TOPPING, DELETE_TOPPING } from '../actions/index'

export default function (state = [], action = {}) {
  switch (action.type) {
  case CHOOSE_TOPPING:
      return state.concat(action.payload)
  case DELETE_TOPPING:
    return state.filter(topping => topping !== action.payload)
  default:
    return state
  }
}