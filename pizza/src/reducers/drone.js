import { DRONE_TURBO, NO_TURBO } from '../actions/index'

export default function (state = null, action = {}) {
  switch (action.type) {
  case DRONE_TURBO:
    return action.payload
  case NO_TURBO:
    return null
  default:
    return state
  }
}