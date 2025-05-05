import React from 'react';

const Hero = () => {
  return (
    <section id="home">
      <div className="hero">
        <img src={`${process.env.PUBLIC_URL}/img_hw1/eddyschina_banner.png`} alt="Eddy's China" />
      </div>
    </section>
  );
};

export default Hero;
