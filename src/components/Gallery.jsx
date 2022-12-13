/* eslint-disable arrow-body-style */
import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Gallery = ({ images }) => {
  /*  const images = {
    src: `https://apiwebtm.com/uploads/Prensa_a8fa881943.png`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.`,
    thumbnail: `https://apiwebtm.com/uploads/Prensa_a8fa881943.png`,
  }; */

  return (
    <>
      <center className="section" aria-labelledby="example2">
        <div className="carousel-container">
          <Carousel images={images} />
        </div>
      </center>
    </>
  );
};

export default Gallery;
