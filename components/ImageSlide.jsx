import React from 'react';
import Slider from 'react-slick';
import '../css/Home.css';
import tImage from '../images/t.jpg';
import uImage from '../images/u.png';
import vImage from '../images/v.jpeg';
import wImage from '../images/w.jpg';
import xImage from '../images/x.jpg';

const ImageSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [tImage, uImage, vImage, wImage, xImage];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlide;
