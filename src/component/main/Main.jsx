import React from "react";
import Header from "../header/Header";
import MainImg from "../assets/MUFTI3.png";
import { useNavigate } from "react-router-dom";
import Categories from '../ProductDatabase/Categories'
import "./main.css";
const main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <br />
      <br />
      <br />

      <div className="MainImg">
        <img src="https://lapol0.s3.amazonaws.com/media/None/100-years-of-men-fashion-cover-lapolo.jpg"></img>
        {/* <span>Here the All TrenZZZ are...</span> */}

        <div className="BtnContainer">
          <button
            className="ExpBtn"
            onClick={() => {
              navigate("/product");
            }}
          >
            Explore TrendZZZ
          </button>
        </div>
      </div>
      <div className="categoryHeading">
        <h3>Top Categories</h3>
      </div>
      <div className="maincategories">
        {Categories.map((item)=>{
          return(
            <div>
            <div className="CategoryCard">
              <img
                className="CategoryImage"
                src={item.CategoryImage}
              ></img>
              <div className="middle">
              <h5 className="CategoryName">{item.CategoryName}</h5>

              </div>
            </div>
          </div>

          )
        })}
      </div>
    </>
  );
};

export default main;
