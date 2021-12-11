import React from "react"
import { FaHeart } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../Context/useAuth"
import { useCartContext } from "../../Context/useCartContext"
import { useWishListContext } from "../../Context/useWishListContext"
import {
  addToCart,
  isAlreadyExist,
  removeFromwishlist,
} from "../../Utils/constants"
import "./WishList.css"
export const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishListContext()
  const { cartState, cartDispatch } = useCartContext()
  const { userId, token } = useAuth()
  const navigate = useNavigate()
  return (
    <div className="wishlist">
      {wishlistState.wishlist.length > 0 &&
        wishlistState.wishlist.map((item) => {
          const {
            brand,
            name,
            price,
            image,
            inStock,
            fastDelivery,
            _id: productId,
          } = item.product
          return (
            <div className="product-item">
              <div className="product-item__image">
                <img src={image} alt={name} />
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
                  <button
                    className="product-item-toCart"
                    disabled={!inStock}
                    onClick={() => navigate("/cart")}
                  >
                    {" "}
                    Go To CArt
                  </button>
                ) : (
                  <button
                    className="product-item-toCart"
                    disabled={!inStock}
                    onClick={async () => {
                      addToCart(
                        productId,
                        userId,
                        token,
                        item.product,
                        cartDispatch,
                        navigate
                      )

                      removeFromwishlist(
                        productId,
                        userId,
                        token,
                        wishlistDispatch,
                        navigate
                      )
                    }}
                  >
                    {" "}
                    Move To Cart
                  </button>
                )}
                {/* {inStock ? "Add To Cart" : "Out of Stock"} */}
              </div>
            </div>
          )
        })}
    </div>
  )
}
