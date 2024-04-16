import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar"
import Home_EN from "./components/Home_EN"
import Portfolio_EN from "./components/Portfolio_EN"
import Experience_EN from "./components/Experience_EN"
import Certificate_EN from "./components/Certificate_EN"
import Contact_EN from "./components/Contact_EN"
import Home_ID from "./components/Home_ID"
import Portfolio_ID from "./components/Portfolio_ID"
import Experience_ID from "./components/Experience_ID"
import Certificate_ID from "./components/Certificate_ID"
import Contact_ID from "./components/Contact_ID"
import Footer from './components/Footer';
import {Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/id' element={<Home_ID />} />
      <Route path='/id/portfolio' element={<Portfolio_ID />} />
      <Route path='/id/experience' element={<Experience_ID />} />
      <Route path='/id/certificate' element={<Certificate_ID />} />
      <Route path='/id/contact' element={<Contact_ID />} />
      <Route exact path='/en' element={<Home_EN />} />
      <Route path='/en/portfolio' element={<Portfolio_EN />} />
      <Route path='/en/experience' element={<Experience_EN />} />
      <Route path='/en/certificate' element={<Certificate_EN />} />
      <Route path='/en/contact' element={<Contact_EN />} />
    </Routes>
    <Footer /></>
  );
}
