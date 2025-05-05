import React, { useState, useRef } from 'react';
import '../App.css';

const Gallery = () => {
  // Array of images for the gallery
  const images = [
    { src: `${process.env.PUBLIC_URL}/img_hw1/beef_and_broccoli.jpg`, alt: 'Beef and Broccoli' },
    { src: `${process.env.PUBLIC_URL}/img_hw1/beef_fried_rice.jpg`, alt: 'Beef Fried Rice' },
    { src: `${process.env.PUBLIC_URL}/img_hw1/egg_rolls.jpg`, alt: 'Egg Rolls' },
    { src: `${process.env.PUBLIC_URL}/img_hw1/charsiu_rice.jpg`, alt: 'Charsiu Rice' },
    { src: `${process.env.PUBLIC_URL}/img_hw1/roastduck_rice.jpg`, alt: 'Roast Duck Over Rice' },
    { src: `${process.env.PUBLIC_URL}/img_hw1/steamed_cod.jpg`, alt: 'Steamed Fish' },
    { src: `${process.env.PUBLIC_URL}/img_hw1/eddyschina_inside.jpg`, alt: 'Interior' }
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Function to handle mouse down (start drag)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Function to handle mouse move (while dragging)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed (3x)
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Function to handle mouse up (end drag)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Function to handle mouse leave (optional, to stop dragging when mouse leaves)
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div
        className="slider-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="slider-image"
            />
          ))}
      </div>
    </section>
  );
};

export default Gallery;
