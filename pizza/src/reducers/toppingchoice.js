import { SELECT_TOPPING } from '../actions/toppingchoice'

export default (state = [], {type, payload}) => {
  switch (type) {
  case SELECT_TOPPING:
    return {...state, topping: payload }
  default:
    return state
  }
}