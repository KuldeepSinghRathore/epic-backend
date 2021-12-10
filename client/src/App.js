import { Link, Route, Routes, useNavigate } from "react-router-dom"
import "./App.css"
import { Navbar } from "./Components/Navbar/Navbar"
import { CartPage } from "./Pages/Cart/CartPage"
import { Home } from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import { Product } from "./Pages/Product"
// import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/SignUp"
// import { useStateContext } from "./Context/useStateContext"

import { WishList } from "./Pages/WishList/WishList"
import { PrivateRoutes } from "./Utils/PrivateRoutes"

function App() {
  // const { productData } = useStateContext()
  // console.log(productData)
  const navigate = useNavigate()
  return (
    <>
      <div className="App">
        <Navbar />
        {/* <Product /> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        <button>
          <Link to="/login">Login</Link>
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/wishlist"
            element={
              <PrivateRoutes>
                <WishList />
              </PrivateRoutes>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
