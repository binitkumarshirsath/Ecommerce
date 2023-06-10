import React from "react";
import product from "./Assets/FakeStoreApi";
import { Link } from "react-router-dom";

export default function ItemCard() {
  function CreateCard({ item }) {
    
    function handleClick(item) {
      const cart = JSON.parse(localStorage.getItem('cart'))|| [];
      const isProductExists = cart.find((product) => product.id === item.id);
      if(isProductExists){
        const updatedCart = cart.map((product)=>{
          if(product.id === item.id){
            return {...product ,
              quantity : product.quantity+1 }
          }
          
          return product;  
        })
        localStorage.setItem('cart',JSON.stringify(updatedCart));
      }
      else{
        localStorage.setItem('cart',JSON.stringify([...cart, {...item, quantity : 1}]));
      }

      console.log(cart);
    }
    return (
      <div className="card">
        <Link to={`/item/${item.id}`}><div className="card-image-container">
          <img
            src={item.image}
            alt={item.title}
            className="card-image"
            style={{ width: "100px" }}
          />
        </div></Link>

        <div className="card-content">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-price">${item.price}</p>
          <button onClick={() => handleClick(item)}> Add to Cart</button>
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
