import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Navbar } from "./Components/Navbar/Navbar"
import { CartPage } from "./Pages/Cart/CartPage"
import { Home } from "./Pages/Home/Home"
// import { useStateContext } from "./Context/useStateContext"

import { WishList } from "./Pages/WishList/WishList"

function App() {
  // const { productData } = useStateContext()
  // console.log(productData)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  )
}

export default App
