import { createContext, useContext, useState } from "react"
import axios from "axios"
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [userId, setUserId] = useState(null)
  const [token, setToken] = useState(null)
  const setUpAuthHeaders = (token) => {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] = token)
    }
    delete axios.defaults.headers.common["Authorization"]
  }
  setUpAuthHeaders(token)
  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, userId, setUserId, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
