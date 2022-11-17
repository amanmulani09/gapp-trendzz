import React from 'react'
import "./footer.css"
export const Footer = () => {
  return (
    <div className="Footer">
      
      <div className="Main-Footer">
        <h2 className="Gapp">GAPP-Trendzz</h2>

        <div className="About he">
          <h5 className="Foot-Head">ABOUT</h5>
          <div className="incon"></div>
          <p>Prathamesh Bhalke</p>
          <p>Owner of Vite|Kart</p>
        </div>
        <div className="Products he">
          <h5 className="Foot-Head">PRODUCT</h5>
          <p>Electronics</p>
          <p>Grosary</p>
          <p>Cloths</p>
          <p>Accesories</p>
        </div>
        <div className="Follow he">
          <h5 className="Foot-Head">FOLLOW US</h5>
        <i class=" foot-icon fa-brands fa-discord"></i>
        <i class=" foot-icon fa-brands fa-instagram"></i>
        <i class=" foot-icon fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="copyright">
        <p>@{new Date().getFullYear()} Vite|Kart. All Rights Reserved</p>
        <p>PRIVACY POLICY TERMS & CONDITIONS</p>
        
      </div>
    </div>
  );
}
