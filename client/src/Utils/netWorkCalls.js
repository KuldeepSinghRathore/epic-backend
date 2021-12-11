import { API } from "./constants"
import axios from "axios"
export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${API}/api/products`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addToCartServer = async (productId, userId, token) => {
  try {
    const { status } = await axios.post(
      `${API}/cart/${userId}`,
      {
        productId,
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}

export const removeFromCartServer = async (productId, userId, token) => {
  try {
    const { status } = await axios.delete(
      `${API}/cart/${userId}/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}
export const increaseQuantityServer = async (
  productId,
  userId,
  token,
  quantity
) => {
  try {
    const { status } = await axios.post(
      `${API}/cart/${userId}/${productId}`,
      {
        quantityValue: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}
export const decreaseQuantityServer = async (
  productId,
  userId,
  token,
  quantity
) => {
  try {
    const { status } = await axios.post(
      `${API}/cart/${userId}/${productId}`,
      {
        quantityValue: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}

// wishlist
export const getwishlistServer = async (userId, token) => {
  try {
    const response = await axios.get(`${API}/wishlist/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const addTowishlistServer = async (productId, userId, token) => {
  try {
    const { status } = await axios.post(
      `${API}/wishlist/${userId}/${productId}`,
      {
        productId,
      },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}

export const removeFromwishlistServer = async (productId, userId, token) => {
  try {
    const { status } = await axios.delete(
      `${API}/wishlist/${userId}/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}
