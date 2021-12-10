import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { API } from "../../Utils/constants"
import "../Login/form.css"
const SignUp = () => {
  const navigate = useNavigate()
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [confirmPass, setConfirmPass] = useState("")
  console.log(signUpDetails)
  const handleChange = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    })
  }
  const signUpHandler = async (e) => {
    try {
      e.preventDefault()
      const { firstName, lastName, email, password } = signUpDetails
      if (firstName && lastName && email && password) {
        const response = await axios.post(`${API}/user/signup`, signUpDetails)
        if (response.status === 200) {
          navigate("/login")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="user-form">
      <p className="page-name">Register</p>
      <form onSubmit={signUpHandler}>
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
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        <input
          type="submit"
          value="SignUp"
          disabled={signUpDetails.password !== confirmPass}
        />
      </form>
    </div>
  )
}

export default SignUp
