// src/components/FooterNav.js
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUtensils, FaEnvelope } from "react-icons/fa";
import "./FooterNav.css";
import CanvasOffCanvas from './CanvasOffCanvas';


const FooterNav = () => {
  return (
    <div className="footernav bg-dark text-light py-3">
      <Nav className="justify-content-around align-items-center">
        <Nav.Item>
          <Link to="/" className="nav-link text-light text-center">
            <FaHome size={24} />
            <p className="mb-0">Home</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="nav-link text-light text-center">
            <FaInfoCircle size={24} />
            <p className="mb-0">About</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/menu" className="nav-link text-light text-center">
            <FaUtensils size={24} />
            <p className="mb-0">Menu</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact" className="nav-link text-light text-center">
            <FaEnvelope size={24} />
            <p className="mb-0">Contact</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
        <CanvasOffCanvas></CanvasOffCanvas>
          
        </Nav.Item>
      </Nav>
      <div className="text-center mt-3">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Cafe Coffee Day | Designed with Hatishwar singh☕ & ❤️
        </p>
      </div>
    </div>
  );
};

export default FooterNav;


