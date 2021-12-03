import { createContext, useContext, useEffect, useState } from "react"
export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  return (
    <StateContext.Provider value={{ productData, setProductData }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
