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
