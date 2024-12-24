// src/pages/About.js
import React from "react";
// import "./About.css";

const About = () => {
  return (
    <div className="about-container p-4">
      <h1 className="text-center mb-4">About Cafe Coffee Day</h1>
      <p className="about-text">
        Welcome to Cafe Coffee Day, the perfect place to unwind, relax, and
        enjoy the finest coffee in town. At our cafe, we believe in brewing
        moments, not just coffee. With a warm ambiance, friendly staff, and a
        wide selection of beverages and snacks, Cafe Coffee Day is your go-to
        destination for all things delightful.
      </p>
      <p className="about-text">
        Established in [Year], our cafe has been serving customers with a blend
        of quality and passion. Whether you're looking for a cozy spot to work,
        catch up with friends, or simply indulge in a cup of your favorite
        brew, we’ve got you covered.
      </p>
      <h3 className="mt-4">Our Vision</h3>
      <p className="about-text">
        To be the leading destination for coffee lovers, providing a memorable
        experience in every cup and every visit.
      </p>
      <h3 className="mt-4">Why Choose Us?</h3>
      <ul className="about-list">
        <li>☕ Freshly brewed coffee from the finest beans.</li>
        <li>🍰 Delicious snacks and desserts to complement your beverage.</li>
        <li>🛋️ A cozy and welcoming ambiance.</li>
        <li>💻 Free Wi-Fi for all our customers.</li>
        <li>😊 Friendly and professional staff.</li>
      </ul>
      <p className="about-text">
        Thank you for making Cafe Coffee Day a part of your day. We look
        forward to serving you soon!
      </p>
    </div>
  );
};

export default About;
