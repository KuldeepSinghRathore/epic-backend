import React, { useState } from "react"
const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const handleChange = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="user-form">
      <p className="page-name">Login</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>firstName:</label>
        <input
          type="text"
          name="firstName"
          value={signUpDetails.firstName}
          onChange={handleChange}
        />
        <label>lastName:</label>
        <input
          type="text"
          name="lastName"
          value={signUpDetails.lastName}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={signUpDetails.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={signUpDetails.password}
          onChange={handleChange}
        />
        <p>
          new user ? <a href="/signup">Signup</a>
        </p>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default SignUp
