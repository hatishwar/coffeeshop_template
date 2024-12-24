// src/components/FourColumnLayout.js
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./FourColumnLayout.css";

const FourColumnLayout = () => {
  // Data for the four columns
  const highlights = [
    {
      
      title: "Premium Coffee",
      image: "https://images.pexels.com/photos/26745221/pexels-photo-26745221/free-photo-of-mirrors-in-the-cafe-green-coffee.jpeg?",
      description: "Freshly brewed coffee from the finest beans.",
    },
    {
      title: "Delicious Snacks",
      image: "https://images.pexels.com/photos/29080857/pexels-photo-29080857/free-photo-of-cozy-cafe-interior-with-coffee-quote-sign.jpeg?",
      description: "Perfect companions for your coffee moments.",
    },
    {
      title: "Cozy Ambiance",
      image: "https://images.pexels.com/photos/8785201/pexels-photo-8785201.jpeg?",
      description: "Relax and unwind in our warm atmosphere.",
    },
    {
      title: "Free Wi-Fi",
      image: "https://images.pexels.com/photos/16153153/pexels-photo-16153153/free-photo-of-the-best-coffee-in-bangkok.jpeg?",
      description: "Stay connected while you enjoy your time.",
    },
  ];

  return (
    <div className="four-column-layout">
      <Row className="m-4">
        {highlights.map((item, index) => (
          <Col lg={3} md={6} sm={12} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FourColumnLayout;

