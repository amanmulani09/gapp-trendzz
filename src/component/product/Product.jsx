import React from "react";
import Header from "../header/Header";
// import Products from "../ProductDatabase/Products";
import "./product.css";
import Filtered_List from "../Filtered_List/Filtered_List";
import { useDispatch, useSelector } from "react-redux";
import { cart_Items, remove_cart_Items } from "../../Redux/Action/actions";

const Product = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.main_Reducer.cart);
  const ProductsData = useSelector((state) => state.main_Reducer.products);

  const addCartHandler = (product) => {
    dispatch(cart_Items(product));
  };

  // const RemoveCartHandler = (curr) => {
  //   const newcartlist = cartData.filter((item) => {
  //     // console.log("itemId", item.id);
  //     // console.log("CurrId", curr.id);
  //     return item.id !== curr.id;
  //   });
  //   dispatch(remove_cart_Items(newcartlist));
  //   console.log("newcartData", newcartlist);
  // };

  return (
    <>
      <Header />
      <div className="MainContainer">
        <Filtered_List />
        <div className="ProductContainer">
          {ProductsData.map((product) => {
            return (
              <div key={product.id}>
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
                  {cartData.includes(product) ? (
                    <button
                      className="AddCart"
                      onClick={() => dispatch(remove_cart_Items(product.id))}
                    >
                      Remove from Cart<i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  ) : (
                    <button
                      className="AddCart"
                      onClick={() => addCartHandler(product)}
                    >
                      Add to Cart<i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  )}
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
