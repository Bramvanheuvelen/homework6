export const SAUCE_CHOICE = 'SAUCE_CHOICE'

export const sauceChoice = (choice) => (dispatch) => {
  dispatch({
    type: SAUCE_CHOICE,
    payload: choice
  })
}