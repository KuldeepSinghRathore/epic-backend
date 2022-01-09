import React from "react"
import { Loader } from "../../Components/Loader"
import { useStateContext } from "../../Context/useStateContext"
import { Product } from "./../../Pages/Product"

const ProductPage = () => {
  const { isLoading } = useStateContext()
  return (
    <div>
      {isLoading ? <Loader /> : <Product />}
      {/* <p>THis is Product</p> */}
    </div>
  )
}

export default ProductPage
