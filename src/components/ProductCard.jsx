import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt="" />

      <h4>{title}</h4>

      <p>₹{price}</p>

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;