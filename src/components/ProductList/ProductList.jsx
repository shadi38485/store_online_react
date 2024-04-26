import React, { useEffect, useState } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";

const ProductList = ({ totalQtyManagement }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
         setProductsData(data)
      })
      .catch((error) => console.log(error));
  }, [])
  



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
