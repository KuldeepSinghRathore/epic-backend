import React, { useState } from "react"
import "../Login/form.css"
const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  console.log(signUpDetails)
  const handleChange = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="user-form">
      <p className="page-name">Register</p>
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
          type="password"
          name="password"
          value={signUpDetails.password}
          onChange={handleChange}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={signUpDetails.confirmPassword}
          onChange={handleChange}
        />

        <input
          type="submit"
          value="SignUp"
          disabled={signUpDetails.password !== signUpDetails.confirmPassword}
        />
      </form>
    </div>
  )
}

export default SignUp
