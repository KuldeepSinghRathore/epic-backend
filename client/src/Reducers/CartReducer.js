export const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CART":
      return {
        ...state,
        cart: action.payload,
      }
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      }
    case "INCREASE_QUANTITY":
      console.log("IncQty", action.payload)
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item._id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        }),
      }
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        }),
      }
    case "CLEAR_SESSION":
      return {
        ...state,
        cart: [],
      }

    default:
      return state
  }
}
