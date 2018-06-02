import { BASE_CHOICE } from '../actions/basechoice'


export default (state = null, {type, payload}) => {
  switch (type) {
  case BASE_CHOICE:
    return {...state, pizzabase: payload}
  default:
    return state
  }
}
