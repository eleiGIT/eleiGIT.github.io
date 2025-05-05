import React from 'react';

const Header = ({ cartCount, toggleCart }) => {
  return (
    <header>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/img_hw1/dumpling_logo.jpg`} alt="Restaurant Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="cart-icon" onClick={toggleCart}>
          🛒 Cart ({cartCount})
        </div>
      </nav>
    </header>
  );
};

export default Header;
