import React from "react"
import { useStateContext } from "../Context/useStateContext"
import { ProductItem } from "./ProductItem"
import "./product.css"
export const Product = () => {
  const { productData } = useStateContext()
  console.log("productData", productData)
  return (
    <div className="product">
      {productData.length > 0 &&
        productData.map((item) => {
          return <ProductItem key={item._id} item={item} />
        })}
    </div>
  )
}
