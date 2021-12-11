import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../Context/useAuth"
import { useCartContext } from "../../Context/useCartContext"
import {
  decreaseQuantityServer,
  increaseQuantityServer,
  removeFromCartServer,
} from "../../Utils/netWorkCalls"
import "./CartPage.css"
export const CartPage = () => {
  const navigate = useNavigate()
  const { userId, token } = useAuth()
  const { cartState, cartDispatch } = useCartContext()
  console.log("cartState", cartState)
  const totalCart = cartState.cart.reduce(
    (acc, curr) => (acc = acc + curr.product.price * curr.quantity),
    0
  )
  const totalProductInCart = cartState.cart.reduce(
    (acc, curr) => (acc = acc + curr.quantity),
    0
  )
  console.log("totalCart", totalCart)
  console.log("totalProductInCart", totalProductInCart)
  const removeFromCart = async (productId, userId, token) => {
    if (token) {
      const status = await removeFromCartServer(productId, userId, token)
      if (status === 200) {
        cartDispatch({ type: "REMOVE_FROM_CART", payload: productId })
      }
    } else {
      navigate("/login")
    }
  }
  const increaseQuantity = async (productId, userId, token, item) => {
    const quantity = item.quantity + 1
    if (token) {
      const status = await increaseQuantityServer(
        productId,
        userId,
        token,
        quantity
      )
      if (status === 200) {
        cartDispatch({
          type: "INCREASE_QUANTITY",
          payload: productId,
        })
      }
    } else {
      navigate("/login")
    }
  }
  const decreaseQuantity = async (productId, userId, token, item) => {
    const quantity = item.quantity - 1
    if (quantity > 0) {
      if (token) {
        const status = await decreaseQuantityServer(
          productId,
          userId,

          token,
          quantity
        )
        if (status === 200) {
          cartDispatch({
            type: "DECREASE_QUANTITY",
            payload: productId,
          })
        }
      } else {
        navigate("/login")
      }
    }
  }
  return (
    <>
      <span
        style={{
          display: "flex",
          margin: "15px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Cart
      </span>
      <div className="cartandbill">
        <div className="leftCart">
          <div className="cartProducts">
            {cartState.cart.length > 0 &&
              cartState.cart.map((item) => {
                const { product, quantity } = item

                console.log("itemImage", product.image)
                return (
                  <div className="cart-container">
                    <div className="cartPage" key={item._id}>
                      <div className="cart-product">
                        <div className="img">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="details">
                          <p style={{ fontWeight: "bold" }}>{product.name}</p>
                          <p>{product.brand}</p>
                          {/* <p>{item.price}</p> */}
                          <button
                            onClick={() =>
                              increaseQuantity(product._id, userId, token, item)
                            }
                          >
                            +
                          </button>
                          <span className="quantity">{quantity} </span>
                          <button
                            onClick={() =>
                              decreaseQuantity(product._id, userId, token, item)
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="cartButtons">
                        <button
                          onClick={() =>
                            removeFromCart(product._id, userId, token)
                          }
                        >
                          REMOVE
                        </button>
                        <button>MOVE To wishlist</button>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        {cartState.cart.length > 0 && (
          <div className="rightCart">
            <h3>
              Price Details <span>({totalProductInCart})</span>
            </h3>
            <hr />
            {cartState.cart.length > 0 &&
              cartState.cart.map((item) => {
                const { product, quantity } = item
                console.log(
                  "itemforpriceDeatails",
                  item,
                  product.price,
                  quantity
                )
                return (
                  <div className="bill">
                    <span>
                      {quantity} * {product.name}{" "}
                    </span>

                    <span className="totalPrice">
                      {"  "} ₹ {quantity * product.price}
                    </span>
                  </div>
                )
              })}
            <hr />
            <p>
              Total <span className="totalPrice">₹{totalCart}</span>
            </p>
          </div>
        )}
      </div>
      {/* <p>Lalla Cart</p> */}
    </>
  )
}
