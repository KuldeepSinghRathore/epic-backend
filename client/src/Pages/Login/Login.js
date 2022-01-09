import axios from "axios"
import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../Context/useAuth"
import { useStateContext } from "../../Context/useStateContext"
import { API } from "../../Utils/constants"
import "./form.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Login = () => {
  const { dispatch } = useStateContext()
  const location = useLocation()

  const navigate = useNavigate()
  const { setToken, setUserId, setIsLogin, isLogin } = useAuth()
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
    toast.info("Logging in...")
    try {
      if (loginDetails.email && loginDetails.password) {
        toast("🦄 Wow so easy!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        const {
          data: { token, userId },
          status,
        } = await axios.post(`${API}/user/login`, loginDetails)
        const from = location.state?.from?.pathname || "/"

        if (status === 200) {
          setIsLogin(true)
          localStorage.setItem("userInfo", JSON.stringify({ token, userId }))
          setError(false)

          setToken(token)
          setUserId(userId)
          navigate(from, { replace: true })
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
  console.log("isLoginFROm Login", isLogin)
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
