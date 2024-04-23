import React from 'react'
import "./ProductList.css"
import ProductCard from './ProductCard';

const ProductList = ({ totalQtyManagement }) => {
  const productsData = [
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/I/21--f3wS6SL._AC_UF226,226_FMjpg_.jpg",
      title: "Hedphone",
      price: 1000,
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/81S9AlFMHaL._AC_UF226,226_FMjpg_.jpg",
      title: "T-shirt",
      price: 400,
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/I/41UPo0WJwvL._AC_UF226,226_FMjpg_.jpg",
      title: "Watch",
      price: 1500,
    },
  ];

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

export default ProductList