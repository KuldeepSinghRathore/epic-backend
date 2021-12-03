import "./App.css"
import { Navbar } from "./Components/Navbar/Navbar"
import { useStateContext } from "./Context/useStateContext"
import { Product } from "./Pages/Product"

function App() {
  const { productData } = useStateContext()
  console.log(productData)
  return (
    <div className="App">
      <Navbar />
      <Product />
    </div>
  )
}

export default App
