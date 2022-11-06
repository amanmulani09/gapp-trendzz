import React from "react";
import Header from "../header/Header";
import Products from "../ProductDatabase/Products";
import "./product.css";

const Product = () => {
  // console.log(Products)
  return (
    <>
      <Header />
      <div className="MainContainer">
        <div className="Filter"></div>
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
