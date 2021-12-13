import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../Context/useAuth"
import { useCartContext } from "../../Context/useCartContext"
import { useStateContext } from "../../Context/useStateContext"
import { useWishListContext } from "../../Context/useWishListContext"
export const LogOut = () => {
  const { setUserId, setToken, setIsLogin } = useAuth()
  const { dispatch } = useStateContext()
  const { cartDispatch } = useCartContext()
  const { wishlistDispatch } = useWishListContext()
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem("userInfo")
    setUserId(null)
    setToken(null)
    dispatch({ type: "CLEAR_SESSION" })
    cartDispatch({ type: "CLEAR_SESSION" })
    wishlistDispatch({ type: "CLEAR_SESSION" })
    setIsLogin(false)
    navigate("/")
  }

  return (
    <div
      className="logout"
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <button onClick={handleLogOut}>Click To LogOut</button>
    </div>
  )
}
