export const CHOOSE_BASE = "CHOOSE_BASE"
export const CHOOSE_SAUCE = "CHOOSE_SAUCE"
export const CHOOSE_TOPPING = "CHOOSE_TOPPING"
export const DELETE_TOPPING = "DELETE_TOPPING"

export const chooseBase = (base) => {
  return {
    type: CHOOSE_BASE,
    payload: base
  }
}

export const chooseSauce = (sauce) => {
  return {
    type: CHOOSE_SAUCE, 
    payload: sauce
  }
}

export const chooseTopping = (topping) => {
  return {
    type: CHOOSE_TOPPING,
    payload: topping
  }
}

export const deleteTopping = (topping) => {
  return {
    type: DELETE_TOPPING,
    payload: topping
  }
}



