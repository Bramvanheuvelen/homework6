export const BASE_CHOICE = 'BASE_CHOICE'

export const baseChoice = (choice) => (dispatch) => {
  dispatch({
    type: BASE_CHOICE,
    payload: choice
  })
}