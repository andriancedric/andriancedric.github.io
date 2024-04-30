// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Certificate from "./components/Certificate"
import Contact from "./components/Contact"
import Footer from './components/Footer';
import {Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/certificate' element={<Certificate />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer /></>
  );
}
