import React from "react"
import { useStateContext } from "../Context/useStateContext"
import { ProductItem } from "./ProductItem"
import "./product.css"
import { sortItems } from "../Utils/constants"
import Sort from "../Sort/Sort"
import { useAuth } from "../Context/useAuth"
export const Product = () => {
  const { isLogin } = useAuth()
  console.log("isLogin", isLogin)
  const { productData, state } = useStateContext()
  console.log("productData", productData)
  const getSortedData = sortItems(productData, state.sortBy)
  console.log("getSortedData", getSortedData)
  const filterItems = (items, filter, fastDelivery) => {
    return items
      .filter((item) => (filter ? item.inStock : item))
      .filter((item) => (fastDelivery ? item.fastDelivery : item))
  }

  const getFilteredProducts = filterItems(
    getSortedData,
    state.filter,
    state.fastDelivery
  )
  return (
    <div className="product" style={{ gap: "10px", display: "flex" }}>
      <div
        style={{
          height: "calc(100vh - 70px)",
          flex: "30%",
          position: "fixed",
          marginRight: "30%",
        }}
      >
        {" "}
        <Sort />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: "70%",
          marginLeft: "30%",
          marginTop: "5%",
        }}
      >
        {getFilteredProducts.length > 0 &&
          getFilteredProducts.map((item) => {
            return (
              <div key={item._id}>
                <ProductItem key={item._id} item={item} />
              </div>
            )
          })}
      </div>
    </div>
  )
}
