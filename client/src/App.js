import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Navbar } from "./Components/Navbar/Navbar"
import { CartPage } from "./Pages/Cart/CartPage"
import { Home } from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import { LogOut } from "./Pages/Login/LogOut"
import NotFound from "./Pages/NotFound/NotFound"
import SignUp from "./Pages/SignUp/SignUp"
import { Wishlist } from "./Pages/WishList/Wishlist"

import { PrivateRoutes } from "./Utils/PrivateRoutes"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {
  toast.configure()
  return (
    <>
      <div className="App">
        <Navbar />

        {/* <button></button> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/cart"
            element={
              <PrivateRoutes>
                <CartPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/wishlist"
            element={
              <PrivateRoutes>
                <Wishlist />
              </PrivateRoutes>
            }
          />
          <Route
            path="/logout"
            element={
              <PrivateRoutes>
                <LogOut />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
