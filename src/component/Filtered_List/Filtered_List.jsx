import React from "react";
import "./Filtered.css";
const Filtered_List = () => {
  return (
    <div className="Category">
      <div className="Filtered">
        <h5>Categories</h5>
        <div>
          <input type="checkbox" className="Check_Category" />
          <label htmlFor=""> Shirts</label>
        </div>
        <div>
          <input type="checkbox" className="Check_Category" />
          <label htmlFor="">Jeans</label>
        </div>
        <div>
          <input type="checkbox" className="Check_Category" />
          <label htmlFor="">T-Shirts</label>
        </div>
        <div>
          <input type="checkbox" className="Check_Category" />
          <label htmlFor="">Jacket&Hoodies</label>
        </div>
      </div>

      <div className="Costomer_Rating">
        <h5>Costomer_Rating</h5>
        <div>
          <input
            type="radio"
            value="4&above"
            name="rating"
            className="Check_Category"
          ></input>
          <label htmlFor="2&above">4⭐ & above</label>
        </div>

        <div>
          <input
            type="radio"
            value="4&above"
            name="rating"
            className="Check_Category"
          ></input>
          <label htmlFor="2&above">3⭐ & above</label>
        </div>

        <div>
          <input
            type="radio"
            value="4&above"
            name="rating"
            className="Check_Category"
          ></input>
          <label htmlFor="2&above">2⭐ & above</label>
        </div>
      </div>

      <div className="sort">
        <h5>Sort:</h5>
        <div>
          <input
            type="radio"
            value="4&above"
            name="rating"
            className="Check_Category"
          ></input>
          <label htmlFor="Low to High">Low to High</label>
        </div>

        <div>
          <input
            type="radio"
            value="4&above"
            name="rating"
            className="Check_Category"
          ></input>
          <label htmlFor="Low to High">Low to High</label>
        </div>
      </div>
    </div>
  );
};

export default Filtered_List;
