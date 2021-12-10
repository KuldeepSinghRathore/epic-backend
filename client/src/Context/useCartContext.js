import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import { cartReducer } from "../Reducers/CartReducer"
import { API } from "../Utils/constants"
import { useAuth } from "./useAuth"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] })
  const { token, userId } = useAuth()
  useEffect(() => {
    ;(async () => {
      try {
        if (token && userId) {
          const response = await axios.get(`${API}/cart/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          console.log("responseDataCartItems", response.data.cart.cartItems)
          if (response.status === 200) {
            cartDispatch({
              type: "LOAD_CART",
              payload: response.data.cart.cartItems,
            })
          }
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [token, userId])

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
