import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../Context/useAuth"

export const PrivateRoutes = ({ children }) => {
  const { isLogin } = useAuth()
  let location = useLocation()
  console.log("statePR", location)
  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
