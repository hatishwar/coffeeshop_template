import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/27180015/pexels-photo-27180015/free-photo-of-sweet-treats-display.jpeg?" alt="First slide" />
        <Carousel.Caption>
          <h3>Welcome to Cafe Coffee Day</h3>
          <p>Your favorite coffee spot.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/27180013/pexels-photo-27180013/free-photo-of-beans-and-dreams.jpeg?" alt="Second slide" />
        <Carousel.Caption>
          <h3>Freshly Brewed</h3>
          <p>Experience the taste of coffee like never before.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
