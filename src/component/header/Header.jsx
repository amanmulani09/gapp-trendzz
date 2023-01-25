import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import cartImg from "../assets/cartIcon.png";
import wishlistImg from "../assets/wishlist.png";
const Header = () => {
  let { user } = useAuth();
  let loggedInUser = user;

  const [navbar, setnavbar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  });

  return (
    <>
      <nav className={navbar ? "nav active" : "nav"}>
        <span className="logo">
          GAPP-<span className="trendz">Trendzz</span>
        </span>

        <div className="leftLinks">
          <Link to="/" className="link left">
            Home
          </Link>
          <Link to="/product" className="link left">
            Product
          </Link>

          <ul className="rightlinks">
            <Link to="/wishlist">
              <i className="fa-solid fa-heart"></i>
            </Link>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </ul>
        </div>
        {loggedInUser ? (
          <Link to="/account" className="loginBtn link">
            Account
          </Link>
        ) : (
          <Link to="/login" className="loginBtn link">
            Login
          </Link>
        )}
      </nav>
    </>
  );
};

export default Header;

// <NavLink to="/" >Home</NavLink>
