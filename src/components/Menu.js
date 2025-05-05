import React from 'react';

const Menu = ({ addToCart }) => {
  const menuItems = [
    { name: 'Beef Fried Rice', price: 9.00 },
    { name: 'Beef and Broccoli', price: 11.00 },
    { name: 'Char siu over rice', price: 8.25 },
    { name: 'Roast duck over rice', price: 8.50 },
    { name: 'Steamed fish', price: 11.00 },
    { name: 'Egg rolls', price: 4.00 },
  ];

  return (
    <section id="menu">
      <h2>Menu</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <h3>{item.name}</h3>
            <p>{item.name} Description</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item.name, item.price)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
