export const SELECT_TOPPING = 'SELECT_TOPPING'

export const toppingChoice = (choice) => (dispatch) => {
  dispatch({type: SELECT_TOPPING, payload: choice})
}