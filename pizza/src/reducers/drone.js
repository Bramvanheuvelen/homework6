import { DRONE_TURBO, NO_TURBO } from '../actions/index'

export default function (state = [], action = {}) {
  switch (action.type) {
  case DRONE_TURBO:
    return state.concat(action.payload)
  case NO_TURBO:
    return state.filter(turbo => turbo !== action.payload)
  default:
    return state
  }
}