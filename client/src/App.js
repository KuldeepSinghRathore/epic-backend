import "./App.css"
import { Navbar } from "./Components/Navbar/Navbar"
import { useStateContext } from "./Context/useStateContext"

function App() {
  const { productData } = useStateContext()
  console.log(productData)
  return (
    <div className="App">
      <Navbar />

      <p>Learn React</p>
    </div>
  )
}

export default App
