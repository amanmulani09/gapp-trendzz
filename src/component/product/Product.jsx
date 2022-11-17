import React from "react";
import Header from "../header/Header";
import Products from "../ProductDatabase/Products";
import "./product.css";
import Filtered_List from "../Filtered_List/Filtered_List";
const Product = () => {
  // console.log(Products)
  return (
    <>
      <Header />
      <div className="MainContainer">

       <Filtered_List />
        <div className="ProductContainer">
          {Products.map((product) => {
            return (
              <div>
                <div className="ProductCard">
                  <img
                    className="ProductImage"
                    src={product.ProductImage}
                  ></img>
                  <h5 className="ProductName">{product.Subtitle}</h5>
                  <h5>₹{product.DiscountedPrice}⁰⁰</h5>
                  <p>
                    <del>₹{product.OriginalPrice}⁰⁰</del>
                  </p>
                  <p className="ProductDescription">{product.discription}</p>
                  <p>{product.Ratingstar}</p>

                  <button className="AddCart">Add to Cart<i class="fa-solid fa-cart-shopping"></i></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
