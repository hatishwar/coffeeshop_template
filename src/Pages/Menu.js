// src/pages/Menu.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  const menuItems = [
    {
      category: "Beverages",
      items: [
        { name: "Espresso", price: "₹150", image: "https://images.pexels.com/photos/3170478/pexels-photo-3170478.jpeg?" },
        { name: "Cappuccino", price: "₹200", image: "https://images.pexels.com/photos/28058864/pexels-photo-28058864/free-photo-of-a-group-of-wine-glasses-and-other-items-on-a-table.jpeg?" },
        { name: "Latte", price: "₹180", image: "https://images.pexels.com/photos/18163776/pexels-photo-18163776/free-photo-of-cup-of-delicious-coffee.jpeg?" },
      ],
    },
    {
      category: "Snacks",
      items: [
        { name: "Veg Sandwich", price: "₹120", image: "https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?" },
        { name: "Cheese Croissant", price: "₹150", image: "https://images.pexels.com/photos/4637491/pexels-photo-4637491.jpeg?" },
        { name: "Chocolate Muffin", price: "₹100", image: "https://images.pexels.com/photos/6079749/pexels-photo-6079749.jpeg?" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Brownie", price: "₹180", image: "https://images.pexels.com/photos/29160669/pexels-photo-29160669/free-photo-of-delicious-chocolate-layer-cake-slice-on-plate.jpeg?" },
        { name: "Cheesecake", price: "₹250", image: "https://images.pexels.com/photos/8393721/pexels-photo-8393721.jpeg?" },
        { name: "Tiramisu", price: "₹300", image: "https://images.pexels.com/photos/4662035/pexels-photo-4662035.jpeg?" },
      ],
    },
  ];

  return (
    <Container className="menu-page py-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      {menuItems.map((section, index) => (
        <div key={index} className="menu-section mb-5">
          <h3 className="category-title mb-3">{section.category}</h3>
          <Row>
            {section.items.map((item, idx) => (
              <Col lg={4} md={6} sm={12} key={idx} className="mb-4">
                <Card className="menu-card h-100">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    className="menu-card-img"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Menu;
