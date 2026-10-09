import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">GLASSINC.</div>
        <div className="footer-links">
          <a href="#" className="footer-link">POLÍTICA DE PRIVACIDAD</a>
          <a href="#" className="footer-link">TÉRMINOS DE USO</a>
          <a href="#" className="footer-link">VENTAS Y REEMBOLSOS</a>
          <a href="#" className="footer-link">LEGAL</a>
          <a href="#" className="footer-link">MAPA DEL SITIO</a>
        </div>
        <div className="footer-bottom" style={{ justifyContent: 'center' }}>
          <div>© 2024 GLASSINC. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
