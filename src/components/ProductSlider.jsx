import React from "react";
import ProductCard from "./ProductCard";

const ProductSlider = () => {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Nike Shoes",
      price: "1499",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      title: "Smart Watch",
      price: "999",
    },
    {
      image:
        "https://images.pexels.com/photos/16129877/pexels-photo-16129877.jpeg",
      title: "Laptop",
      price: "67,999",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      title: "Headphones",
      price: "1199",
    },
  ];

  return (
    <div className="products-section">
      <h2>Best Sellers</h2>

      <div className="products">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;