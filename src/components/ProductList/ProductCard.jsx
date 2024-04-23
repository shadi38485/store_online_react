import React, { useState } from "react";

const ProductCard = ({ id, img, title, price, totalQtyManagement }) => {
  const [qty, setQty] = useState(0);
  const [bg, setBg] = useState("bg-white");



  const addToCard = () => {
    setQty(qty + 1);
    console.log(qty);
    totalQtyManagement()
  };
  const toggleBg = () => {
    if (bg == "bg-white") {
      // bg="bg-green"
      setBg("bg-green");
    } else {
      setBg("bg-white");
    }
  };

  return (
    <div className={`product-card ${bg}`} id={id}>
      <img src={img} alt="" />
      <div className="product-properties">
        <h3>{title}</h3>
        <p className="product-price">{price}$</p>
      </div>
      <div className="product-card-footer">
        <button className="" onClick={addToCard}>
          Add To Card
        </button>
        <button className="btn-bg" onClick={toggleBg}>
          Change Bg
        </button>
        <span>{qty}</span>
      </div>
    </div>
  );
};

export default ProductCard;
