import React from 'react'
import "./ProductList.css"
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="product-list">
      <ProductCard
        img="https://m.media-amazon.com/images/I/21--f3wS6SL._AC_UF226,226_FMjpg_.jpg"
        title="Hedphone"
        price="1000"
      />
      <ProductCard
        img="https://m.media-amazon.com/images/I/81S9AlFMHaL._AC_UF226,226_FMjpg_.jpg"
        title="T-shirt"
        price="400"
      />
      <ProductCard
        img="https://m.media-amazon.com/images/I/41UPo0WJwvL._AC_UF226,226_FMjpg_.jpg"
        title="Watch"
        price="1600"
      />

    
    </div>
  );
}

export default ProductList