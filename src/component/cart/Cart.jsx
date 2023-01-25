import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_cart_Items } from "../../Redux/Action/actions";
import Header from "../header/Header";

export const Cart = () => {
  const cartData = useSelector((state) => state.main_Reducer.cart);
  console.log(cartData);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div className="ProductContainer">
        {cartData &&
          cartData.map((product) => {
            return (
              <div className="ProductCard" key={product.id}>
                <img className="ProductImage" src={product.ProductImage}></img>
                <h5 className="ProductName">{product.Subtitle}</h5>
                <h5>₹{product.DiscountedPrice}⁰⁰</h5>
                <p>
                  <del>₹{product.OriginalPrice}⁰⁰</del>
                </p>
                <p className="ProductDescription">{product.discription}</p>
                <p>{product.Ratingstar}</p>

                <button
                  className="AddCart"
                  onClick={() => dispatch(remove_cart_Items(product.id))}
                >
                  remove from Cart<i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
