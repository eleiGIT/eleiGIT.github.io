// Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart, clearCart, toggleCart}) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div id="cart-container">
      <button id="close-cart" className="close-btn" onClick={toggleCart}>✖</button>
      <div className="cart-content">
        <h3>Your Cart ({cart.length}) </h3>
        <div id="cart">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index}>
                <p>{item.name} - ${item.price.toFixed(2)} <button onClick={() => removeFromCart(index)}>Remove</button></p>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <p id="total">Total: ${total}</p>
        <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
