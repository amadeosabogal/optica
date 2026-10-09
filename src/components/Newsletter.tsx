

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: '16px' }}>SUSCRÍBETE AL BOLETÍN</h2>
        <p className="service-desc" style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>
          Recibe las últimas ofertas y novedades directamente en tu correo
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="CORREO ELECTRÓNICO" className="newsletter-input" />
          <button type="submit" className="newsletter-btn">SUSCRIBIRSE</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
