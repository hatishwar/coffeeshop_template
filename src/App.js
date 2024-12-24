import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PreNav from './components/PreNav';
import NavigationBar from './components/NavigationBar';
import CarouselComponent from './components/CarouselComponent';
import CardsSection from './components/CardsSection';
import FourColumnLayout from './components/FourColumnLayout';
import FooterNavbar from './components/FooterNavbar';
import CanvasOffCanvas from './components/CanvasOffCanvas';
import Separator from './components/Separator';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div>
      <PreNav />
      <NavigationBar />
      {/* <CanvasOffCanvas /> */}
      <CarouselComponent />
      <Separator />
      <FourColumnLayout/>
      
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About />} />
        

      </Routes>
      <FooterNavbar />
    </div>
  );
};


export default App;


