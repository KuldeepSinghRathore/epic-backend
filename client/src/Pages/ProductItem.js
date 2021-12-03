import React from "react"
import { FaRegHeart } from "react-icons/fa"
import "./product.css"
export const ProductItem = ({ item }) => {
  const { brand, name, price, image, inStock, fastDelivery } = item
  console.log(brand, name, price, image, inStock, fastDelivery)
  //   console.log("item", item)
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
        <div className="product-item__info__price">{price}</div>
        <button className="product-item-toCart">Add To Cart</button>
        {/* <div className="product-item__info__in-stock">{inStock}</div> */}
      </div>
    </div>
  )
}
