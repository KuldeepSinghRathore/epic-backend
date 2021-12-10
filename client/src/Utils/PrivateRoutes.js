import { Route, Navigate, Routes } from "react-router-dom"
import { useAuth } from "../Context/useAuth"

export const PrivateRoutes = ({ path, ...props }) => {
  const { token } = useAuth()

  return token ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate replace to="/login" state={{ from: path }} />
  )
}
