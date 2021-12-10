import React, { useState } from "react"
import "./form.css"
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    })
  }
  console.log(loginDetails)
  return (
    <>
      <div className="user-form">
        <p className="page-name">Login</p>
        <form onSubmit={(e) => e.preventDefault()}>
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
            new user ? <a href="/signup">Signup</a>
          </p>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  )
}

export default Login
