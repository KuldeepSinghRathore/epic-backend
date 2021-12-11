import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../Context/useAuth"

export const PrivateRoutes = ({ children }) => {
  const { token } = useAuth()
  console.log("token", token)
  return token ? children : <Navigate to="/login" />
}
