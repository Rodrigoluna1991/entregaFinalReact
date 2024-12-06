// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="producto">
      <img src={`path_to_image/${product.name}.jpg`} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <button className="ver-mas">Ver más</button>
      </div>
    </div>
  );
};

export default ProductCard;
