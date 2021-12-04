import React from "react"
import { Loader } from "../../Components/Loader"
import { useStateContext } from "../../Context/useStateContext"
import { Product } from "./../../Pages/Product"
export const Home = () => {
  const { isLoading } = useStateContext()
  return (
    <div>
      {isLoading ? <Loader /> : <Product />}
      {/* <p>THis is Home</p> */}
    </div>
  )
}
