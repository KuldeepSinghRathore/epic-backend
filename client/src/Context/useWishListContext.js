import { createContext, useContext, useEffect, useReducer } from "react"
import { wishlistReducer } from "../Reducers/WishlistReducer"
import { getwishlistServer } from "../Utils/netWorkCalls"
import { useAuth } from "./useAuth"

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  })
  const { token, userId } = useAuth()
  useEffect(() => {
    ;(async () => {
      try {
        if (token && userId) {
          const response = await getwishlistServer(userId, token)
          console.log(
            "response.data.wishlist.wishlistItems",
            response.data.wishlist.wishlistItems
          )
          if (response.status === 200) {
            wishlistDispatch({
              type: "LOAD_WISHLIST",
              payload: response.data.wishlist.wishlistItems,
            })
          }
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [token, userId])

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishListContext = () => useContext(WishlistContext)
