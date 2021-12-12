export const reducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      if (action.payload === "LOW_TO_HIGH") {
        return {
          ...state,
          sortBy: "LOW_TO_HIGH",
        }
      }
      if (action.payload === "HIGH_TO_LOW") {
        return {
          ...state,
          sortBy: "HIGH_TO_LOW",
        }
      }
      return state
    case "FILTER":
      return {
        ...state,
        filter: !state.filter,
      }

    case "FAST_DELIVERY":
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      }
    case "CLEAR_SESSION":
      return {
        ...state,
        sortBy: null,
        filter: false,
        fastDelivery: false,
      }

    default:
      return state
  }
}
