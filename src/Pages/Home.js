// src/pages/Home.js
// src/pages/Home.js
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FourColumnLayout from "../components/FourColumnLayout";
// import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2067628/pexels-photo-2067628.jpeg?"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Cafe Coffee Day</h3>
            <p>Experience the perfect blend of taste and ambiance.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2506993/pexels-photo-2506993.jpeg?"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Our Special Beverages</h3>
            <p>Crafted to energize and refresh your day.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/28793148/pexels-photo-28793148/free-photo-of-modern-cafe-barista-preparing-coffee.jpeg?"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Delicious Snacks</h3>
            <p>Perfect companions for your coffee moments.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Four Column Layout */}
      <div className="content-section py-4">
        <h2 className="text-center mb-4">Our Highlights</h2>
        <FourColumnLayout />
      </div>
    </div>
  );
};

export default Home;
