import React, { useState } from "react";

const ProductCard = ({ id, img, title, price }) => {
  // let qty = 0;
  const [qty, setQty]= useState(0)
  const [bg, setBg] = useState("bg-green")

  // const fn = "Zahra"
  // const ln = "Yazdani"
  // const age = 34

  // const result= "I'm "+ fn + " "+ ln + ".I'm "+ age+"!!"
  // const result2= `I'm ${fn ? "Admin": fn} ${ln}. I'm ${age}!! `


  const addToCard = () => {
    // qty++;// qty= qty+1
    setQty(qty+1)
    console.log(qty);
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
        <span>{qty}</span>
      </div>
    </div>
  );
};

export default ProductCard;
