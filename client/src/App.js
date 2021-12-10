import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Navbar } from "./Components/Navbar/Navbar"
import { CartPage } from "./Pages/Cart/CartPage"
import { Home } from "./Pages/Home/Home"
// import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/SignUp"
// import { useStateContext } from "./Context/useStateContext"

import { WishList } from "./Pages/WishList/WishList"

function App() {
  // const { productData } = useStateContext()
  // console.log(productData)
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <SignUp />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  )
}

export default App
