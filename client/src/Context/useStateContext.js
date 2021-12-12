import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react"
import { reducer } from "../Reducers/StateReducer"
import { initialState } from "../Utils/constants"
import { getAllProducts } from "../Utils/netWorkCalls"
export const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const { products } = await getAllProducts()
        setProductData(products)
        console.log(products)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider
      value={{ productData, setProductData, isLoading, state, dispatch }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
