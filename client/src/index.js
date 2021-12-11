import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { StateProvider } from "./Context/useStateContext"
import { CartProvider } from "./Context/useCartContext"
import { AuthProvider } from "./Context/useAuth"
import { WishlistProvider } from "./Context/useWishListContext"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <StateProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <App />
            </Router>
          </WishlistProvider>
        </CartProvider>
      </StateProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
