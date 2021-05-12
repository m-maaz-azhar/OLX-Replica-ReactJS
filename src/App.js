import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MainMenu from './components/MainMenu.jsx';
import AdBanner from './components/AdBanner.jsx';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <MainMenu/>
      <Hero/>
      <AdBanner/>
      <Products/>
      <AdBanner/>
      <Footer/>
    </div>
  );
}

export default App;