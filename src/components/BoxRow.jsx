import React from "react";

const BoxRow = () => {
  const items = [
    {
      title: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      title: "Fashion",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      title: "Gaming",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    },
    {
      title: "Furniture",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  return (
    <div className="box-row">
      {items.map((item, index) => (
        <div className="box" key={index}>
          <h3>{item.title}</h3>
          <img src={item.image} alt="" />
          <a href="/">Shop More</a>
        </div>
      ))}
    </div>
  );
};

export default BoxRow;