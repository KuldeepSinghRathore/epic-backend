export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_WISHLIST":
      return { ...state, wishlist: action.payload }

    case "ADD_TO_WISHLIST":
      console.log("ADD_TO_wishlist", action.payload)
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          { product: { ...action.payload }, quantity: 1 },
        ],
      }
    case "REMOVE_FROM_WISHLIST":
      console.log(
        "REMOVE_FROM_wishlist",
        action.payload,
        "state.wishlist",
        state.wishlist
      )
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.product._id !== action.payload
        ),
      }
    case "CLEAR_SESSION":
      return {
        ...state,
        wishlist: [],
      }
    default:
      return state
  }
}
