import { createContext, useContext, useState } from "react"
import axios from "axios"
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const { userId: savedUserId, token: savedToken } = JSON.parse(
    localStorage.getItem("userInfo")
  ) || { userId: null, token: null }
  const [userId, setUserId] = useState(savedUserId)
  const [token, setToken] = useState(savedToken)
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
