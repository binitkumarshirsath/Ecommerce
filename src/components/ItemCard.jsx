import React from "react";
import product from "./Assets/FakeStoreApi";

export default function ItemCard() {
  function CreateCard({ item }) {
    return (
        <div className="card">
            <div className="card-image-container">
            <img
            src={item.image}
            alt={item.title}
            className="card-image"
            style={{ width: "100px" }}
          />
            </div>
          
          <div className="card-content">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-price">${item.price}</p>
            <p className="card-description">{item.description.substring(50)}</p>
          </div>
        </div>
    );
  }

  return (
    <div className="card-container">
      {product.map((item, index) => {
        return <CreateCard key={index} id={index} item={item} />;
      })}
    </div>
  );
}
