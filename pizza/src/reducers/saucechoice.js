import { SAUCE_CHOICE } from '../actions/saucechoice'

export default (state = null, {type, payload}) => {
  switch (type) {
  case SAUCE_CHOICE:
    return {...state, pizzasauce: payload}
  default:
    return state
  }
}
