import React from "react"
import { useStateContext } from "../Context/useStateContext"

const Sort = () => {
  const { state, dispatch } = useStateContext()

  return (
    <div>
      <div
        style={{
          borderRight: "1px solid #000",
          height: "100vh",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              borderBottom: "2px solid gray",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Sort
          </p>
          <label>
            <input
              type="radio"
              name="sort"
              onClick={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
            />{" "}
            Low to high
          </label>

          <label>
            <input
              type="radio"
              name="sort"
              onClick={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
            />{" "}
            High to Low
          </label>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              borderBottom: "2px solid gray",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Filter
          </p>
          <label>
            <input
              type="checkbox"
              checked={state.filter}
              onChange={() => dispatch({ type: "FILTER" })}
            />{" "}
            Include only in stock
          </label>

          <label>
            <input
              type="checkbox"
              checked={state.fastDelivery}
              onChange={() => dispatch({ type: "FAST_DELIVERY" })}
            />{" "}
            Include only fast delivery
          </label>
        </div>
      </div>
    </div>
  )
}

export default Sort
