/* eslint-disable arrow-body-style */
import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Gallery = ({ images }) => {
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
