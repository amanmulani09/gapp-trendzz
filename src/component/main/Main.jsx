import React from "react";
import Header from "../header/Header";
import MainImg from "../assets/MUFTI3.png";
import { useNavigate } from "react-router-dom";
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
        <img src={MainImg}></img>
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
    </>
  );
};

export default main;
