import { CHOOSE_BASE } from '../actions/index'

export default function (state = [], action = {}) {
  switch (action.type) {
  case CHOOSE_BASE:
    return action.payload.value
  default:
    return state
  }
}

