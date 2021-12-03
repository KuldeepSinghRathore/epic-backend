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
