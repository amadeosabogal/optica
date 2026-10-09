import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import NewProducts from './components/NewProducts';
import Promos from './components/Promos';
import ProductList from './components/ProductList';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <NewProducts />
      <Promos />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
