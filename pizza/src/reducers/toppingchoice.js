import { CHOOSE_TOPPING, DELETE_TOPPING } from '../actions/index'

export default function (state = [], action = {}) {
  switch (action.type) {
  case CHOOSE_TOPPING:
    if (state.length < 3) {
      return state.concat(action.payload)
    } else {
      window.alert('3 toppings is the max')
      return state
    }

  case DELETE_TOPPING:
    return state.filter(topping => topping !== action.payload)
  default:
    return state
  }
}