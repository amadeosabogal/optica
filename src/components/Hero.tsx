import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-text">GLASSINC.</div>
      <div className="hero-content container">
        <img src="/glasses.png" alt="WIBES A26 Lentes" className="hero-image" />
        <h2 className="hero-title">WIBES A26</h2>
        <div className="hero-price price">S/ 180.00</div>
        <p className="hero-desc">
          Descubre nuestra nueva colección de lentes. Diseñados para brindar confort y estilo sin igual para tu día a día, perfectos para cualquier ocasión.
        </p>
        <div className="hero-form">
          <select className="hero-select">
            <option>OPCIONES DE COMPRA</option>
          </select>
          <select className="hero-select">
            <option>TAMAÑO</option>
          </select>
          <button className="btn-primary">AGREGAR AL CARRITO</button>
        </div>
      </div>
      
      <div className="hero-pagination">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      
      <div className="hero-side-text">
        ENVÍO GRATIS 100%
      </div>
    </section>
  );
};

export default Hero;
