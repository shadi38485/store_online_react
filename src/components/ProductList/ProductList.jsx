import React, { useState } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";
// import productsData from "../../data/productsData";


// sync: callback, Promise, async & await

const ProductList = ({ totalQtyManagement }) => {

  // let productsData=[]
  const [productsData, setProductsData] = useState([])

  /// fetch ---> request to backen/api
  fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json(); //res's type is string ---> convert to json
    })
    .then((data) => {
       console.log(data);
      //  setProductsData(data)
    })
    .catch((error) => {console.log(error);});

  return (
    <div className="product-list">
      {productsData.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          img={item.image}
          title={item.title}
          price={item.price}
          totalQtyManagement={totalQtyManagement}
        />
      ))}
    </div>
  );
};

export default ProductList;
