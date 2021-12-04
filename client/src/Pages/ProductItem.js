import React from "react"
import { FaRegHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useCartContext } from "../Context/useCartContext"
import "./product.css"
export const ProductItem = ({ item }) => {
  const { cartDispatch, cartState } = useCartContext()
  const { brand, name, price, image, inStock, fastDelivery } = item

  // function to check if already exist in cart

  const isAlreadyExist = (id, cartToCheck) => {
    // console.log("_id", id, "cart", cartToCheck)
    const isExist = cartToCheck.findIndex((item) => item._id === id)
    // console.log("isExist", isExist)
    if (isExist === -1) {
      return true
    }
    return false
  }
  // console.log("isAlreadyExist", isAlreadyExist(item._id, cartState.cart))
  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={image} alt={name} />
        <FaRegHeart className="wishlist-icon" />
      </div>
      <div className="product-item__info">
        <div className="product-item__info__name">
          <p>
            <strong>{name}</strong>
          </p>
        </div>
        <div className="product-item__info__brand">{brand}</div>
        <div className="product-item__info__fast-delivery">
          {fastDelivery ? "Fast Delivery" : "No Fast Delivery"}
        </div>
        <div className="product-item__info__price">₹{price}</div>
        {isAlreadyExist(item._id, cartState.cart) ? (
          <button
            className="product-item-toCart"
            disabled={!inStock}
            onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: item })}
          >
            {inStock ? "Add To Cart" : "Out of Stock"}
          </button>
        ) : (
          <button className="product-item-toCart" disabled={!inStock}>
            <Link to="/cart">Go to Cart</Link>
          </button>
        )}
        {/* <div className="product-item__info__in-stock">{inStock}</div> */}
      </div>
    </div>
  )
}
