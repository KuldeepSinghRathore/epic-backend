import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../Context/useAuth"
import { useStateContext } from "../../Context/useStateContext"
import { API } from "../../Utils/constants"
import "./form.css"
const Login = () => {
  const { dispatch } = useStateContext()
  const { token, setToken, setUserId, setIsLogin } = useAuth()
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    })
  }
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      if (loginDetails.email && loginDetails.password) {
        const {
          data: { token, userId },
          status,
        } = await axios.post(`${API}/user/login`, loginDetails)
        if (status === 200) {
          setIsLogin(true)
          localStorage.setItem("userData", JSON.stringify({ token, userId }))
          setError(false)

          setToken(token)
          setUserId(userId)
        }
        const getCartFromServer = await axios.get(`${API}/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        if (getCartFromServer.status === 200) {
          dispatch({
            type: "LOAD_CART",
            payload: getCartFromServer.data.cart.cartItems,
          })
        }
      } else {
        setError("Please fill all the fields")
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(loginDetails)
  return (
    <>
      <div className="user-form">
        <p className="page-name">Login</p>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={loginDetails.email}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type="text"
            name="password"
            value={loginDetails.password}
            onChange={handleChange}
          />
          <p>
            new user ? <Link to="/signup">Signup</Link>
          </p>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  )
}

export default Login
