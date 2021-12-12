import React from "react"
import { Link } from "react-router-dom"
import moonLogo from "./../../images/moonkart.png"
import { FaRegHeart, FaShoppingBag, FaUserAlt } from "react-icons/fa"
import { AiOutlineLogout } from "react-icons/ai"
import "./Navbar.css"
import { useAuth } from "../../Context/useAuth"
export const Navbar = () => {
  const { isLogin } = useAuth()
  return (
    <div className="bg-dark navbar">
      <nav className="nav-container">
        <Link to="/">
          <div className="flex-row">
            <img src={moonLogo} className="nav-logo" alt="logo" />
            <h2 className="nav-text">MoonKart</h2>
          </div>
        </Link>
        <ul className="nav-list-icons">
          <li>
            <Link to="wishlist">
              <FaRegHeart size={28} color={"#fff"} />
            </Link>
          </li>
          <li>
            <Link to="cart">
              <FaShoppingBag size={28} color={"#fff"} />
            </Link>
          </li>
          {isLogin ? (
            <li>
              <Link to="logout">
                <AiOutlineLogout size={28} color={"#fff"} />
              </Link>
            </li>
          ) : (
            <li>
              <Link to="login">
                <FaUserAlt size={28} color={"#fff"} />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}
