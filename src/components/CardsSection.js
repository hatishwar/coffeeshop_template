// src/components/CardSection.js
import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./CardSection.css";

const CardSection = () => {
  const cardData = [
    {
      id: 1,
      title: "Espresso",
      image: "https://images.pexels.com/photos/269126/pexels-photo-269126.jpeg?",
      description: "A strong and bold coffee for true coffee lovers.",
    },
    {
      id: 2,
      title: "Cappuccino",
      image: "https://images.pexels.com/photos/302903/pexels-photo-302903.jpeg?",
      description: "A classic blend of espresso, steamed milk, and foam.",
    },
    {
      id: 3,
      title: "Latte",
      image: "https://images.pexels.com/photos/2318033/pexels-photo-2318033.jpeg?",
      description: "Rich, creamy, and perfect for a coffee break.",
    },
    {
      id: 4,
      title: "Mocha",
      image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?",
      description: "A delightful mix of chocolate, espresso, and milk.",
    },
  ];

  return (
    <div className="card-section m-4">
      <h2 className="text-center mb-4">Our Specialties</h2>
      <Row>
        {cardData.map((card) => (
          <Col lg={3} md={6} sm={12} key={card.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={card.image}
                alt={card.title}
                className="card-image"
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary" className="w-100">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardSection;

