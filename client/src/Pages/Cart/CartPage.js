import React from "react"
import { useCartContext } from "../../Context/useCartContext"
import "./CartPage.css"
export const CartPage = () => {
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
                              cartDispatch({
                                type: "INCREASE_QUANTITY",
                                payload: product._id,
                              })
                            }
                          >
                            +
                          </button>
                          <span className="quantity">{quantity} </span>
                          <button
                            onClick={() =>
                              cartDispatch({
                                type: "DECREASE_QUANTITY",
                                payload: product._id,
                              })
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
                            cartDispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product._id,
                            })
                          }
                        >
                          REMOVE
                        </button>
                        <button>MOVE To Wishlist</button>
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
