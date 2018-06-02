import { BASE_CHOICE } from '../actions/basechoice'

const initialState = {
  pizzabase: null,
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
  case BASE_CHOICE:
    return {state, pizzabase: payload}
  default:
    return state
  }
}
