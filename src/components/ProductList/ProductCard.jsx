import React from 'react'

const ProductCard = ({img, title, price}) => {
  return (
    <div className="product-card">
      <img
        src={img}
        alt=""
      />
      <div className="product-properties">
        <h3>{title}</h3>
        <p className='product-price'>{price}$</p>
      </div>
    </div>
  );
}

export default ProductCard