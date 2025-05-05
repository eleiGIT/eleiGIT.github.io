import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]); // cart is initialized as an empty array
  const [total, setTotal] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (name, price) => {
    const newCart = [...cart, { name, price }];
    setCart(newCart);
    setTotal(prevTotal => prevTotal + price);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    setTotal(newCart.reduce((acc, item) => acc + item.price, 0));
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <Header cartCount={cart ? cart.length : 0} toggleCart={toggleCart} /> {/* Pass cart length safely */}
      <Hero />
      <Menu addToCart={addToCart} />
      <Gallery />
      <About />
      <Contact />
      {isCartVisible && (
        <Cart 
          cart={cart} 
          total={total} 
          toggleCart={toggleCart} 
          clearCart={clearCart} 
          removeFromCart={removeFromCart}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
