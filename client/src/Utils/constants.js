import {
  addToCartServer,
  addTowishlistServer,
  removeFromCartServer,
  removeFromwishlistServer,
} from "./netWorkCalls"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
export const API = "https://moonkart.kuldeeprathore.repl.co"
// export const API = "http://localhost:8000"

export const initialState = {
  cart: [],
  wishlist: [],
  sortBy: null,
  filter: false,
  fastDelivery: false,
}

export const isAlreadyExist = (id, cartToCheck) => {
  // console.log("_id", id, "cart", cartToCheck)

  const isExist = cartToCheck.findIndex((item) => item.product._id === id)
  if (isExist === -1) {
    return false
  }

  // console.log("isExist", isExist)
  return true
}
export const removeFromwishlist = async (
  productId,
  userId,
  token,
  dispatch,
  navigate
) => {
  if (token) {
    const status = await removeFromwishlistServer(productId, userId, token)
    if (status === 200) {
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: productId,
      })
    }
  } else {
    navigate("/login")
  }
}
export const addToCart = async (
  productId,
  userId,
  token,
  item,
  dispatch,
  navigate
) => {
  if (token) {
    const status = await addToCartServer(productId, userId, token, item)
    if (status === 200) {
      dispatch({ type: "ADD_TO_CART", payload: item })
      toast.success("Added to cart")
    } else {
      navigate("/login")
    }
  } else {
    navigate("/login")
  }
}
export const removeFromCart = async (
  productId,
  userId,
  token,
  dispatch,
  navigate
) => {
  if (token) {
    const status = await removeFromCartServer(productId, userId, token)
    if (status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: productId })
    }
  } else {
    navigate("/login")
  }
}

export const addTowishlist = async (
  productId,
  userId,
  token,
  item,
  dispatch,
  navigate
) => {
  if (token) {
    const status = await addTowishlistServer(productId, userId, token, item)
    if (status === 200) {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: item,
      })
    } else {
      navigate("/login")
    }
  } else {
    navigate("/login")
  }
}

// Sorting
export const sortItems = (arrToSort, sortType) => {
  if (sortType === "LOW_TO_HIGH") {
    return arrToSort.sort((a, b) => a.price - b.price)
  }
  if (sortType === "HIGH_TO_LOW") {
    return arrToSort.sort((a, b) => b.price - a.price)
  }
  if (sortType === null) {
    return arrToSort
  }
}
