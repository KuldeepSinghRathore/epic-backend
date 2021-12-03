import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../Reducers/CartReducer"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] })
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
