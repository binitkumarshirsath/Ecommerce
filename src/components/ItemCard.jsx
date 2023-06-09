import React from "react";
import product from "./Assets/FakeStoreApi";
import { Link } from "react-router-dom";

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
          
          <div  className="card-content">
            <Link to={`/item/${item.id}`}><h2 className="card-title"   >{item.title}</h2></Link>
            <p className="card-price">${item.price}</p>
            <p className="card-description">{item.description.substring(50)}</p>
            <button>Add to Cart</button>
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
