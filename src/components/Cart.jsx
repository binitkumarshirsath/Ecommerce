import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';


const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cartItems);
  }, []);

  const increaseQuantity = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setItems(updatedItems);
    saveToLocalStorage(updatedItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedItems = items.map((item) => {
      if(item.id === itemId && item.quantity === 1){
        return{
          ...item,
          quantity : 0
        }
        
      }
      else if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }else
        return item;
    });
    setItems(updatedItems);
    saveToLocalStorage(updatedItems);
  };

  const saveToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div className="cart-container">
      <Navbar/>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.image} style={{width : "100px"}} alt="" />
              <span>{item.title}</span>
              <div className="quantity-container">
                <ul>${item.price * item.quantity}</ul>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
