import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { StateProvider } from "./Context/useStateContext"
import { CartProvider } from "./Context/useCartContext"
import { AuthProvider } from "./Context/useAuth"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <StateProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </StateProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
