import React from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../Context/useAuth"
import { useCartContext } from "../Context/useCartContext"
import { useWishListContext } from "../Context/useWishListContext"
import {
  addToCart,
  addTowishlist,
  isAlreadyExist,
  removeFromwishlist,
} from "../Utils/constants"

import {
  addToCartServer,
  addTowishlistServer,
  removeFromwishlistServer,
} from "../Utils/netWorkCalls"
import "./product.css"
export const ProductItem = ({ item }) => {
  const navigate = useNavigate()
  const { cartDispatch, cartState } = useCartContext()
  const { wishlistState, wishlistDispatch } = useWishListContext()
  const {
    brand,
    name,
    price,
    image,
    inStock,
    fastDelivery,
    _id: productId,
  } = item
  // console.log("wishlistState", wishlistState)
  const { userId, token } = useAuth()
  // function to check if already exist in cart

  // const addToCart = async (productId, userId, token, item) => {
  //   if (token) {
  //     const status = await addToCartServer(productId, userId, token, item)
  //     if (status === 200) {
  //       cartDispatch({ type: "ADD_TO_CART", payload: item })
  //     }
  //   } else {
  //     navigate("/login")
  //   }
  // }

  // const addTowishlist = async (productId, userId, token, item) => {
  //   if (token) {
  //     const status = await addTowishlistServer(productId, userId, token, item)
  //     if (status === 200) {
  //       wishlistDispatch({
  //         type: "ADD_TO_WISHLIST",
  //         payload: item,
  //       })
  //     }
  //   } else {
  //     navigate("/login")
  //   }
  // }

  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={image} alt={name} />
        {isAlreadyExist(productId, wishlistState.wishlist) ? (
          <FaHeart
            className="wishlist-icon"
            onClick={() =>
              removeFromwishlist(
                productId,
                userId,
                token,
                wishlistDispatch,
                navigate
              )
            }
          />
        ) : (
          <FaRegHeart
            className="wishlist-icon"
            onClick={() =>
              addTowishlist(
                productId,
                userId,
                token,
                item,
                wishlistDispatch,
                navigate
              )
            }
          />
        )}
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
        {isAlreadyExist(productId, cartState.cart) ? (
          <button className="product-item-toCart" disabled={!inStock}>
            <Link to="/cart">Go to Cart</Link>
          </button>
        ) : (
          <button
            className="product-item-toCart"
            disabled={!inStock}
            onClick={() =>
              addToCart(productId, userId, token, item, cartDispatch, navigate)
            }
          >
            {inStock ? "Add To Cart" : "Out of Stock"}
          </button>
        )}
        {/* <div className="product-item__info__in-stock">{inStock}</div> */}
      </div>
    </div>
  )
}
