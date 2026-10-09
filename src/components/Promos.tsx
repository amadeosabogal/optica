

const Promos = () => {
  return (
    <section className="promos-section container">
      <div className="promo-box">
        <div className="promo-bg-text">NUEVO</div>
        <h3 className="promo-title">WIBES A26</h3>
        <img src="/glasses.png" alt="Promo Lentes" className="promo-image" />
        <button className="promo-btn">COMPRAR AHORA</button>
      </div>
      <div className="promo-box">
        <div className="promo-bg-text">TOP</div>
        <h3 className="promo-title">LIRES AL1</h3>
        <img src="/glasses.png" alt="Promo Lentes" className="promo-image" />
        <button className="promo-btn">COMPRAR AHORA</button>
      </div>
    </section>
  );
};

export default Promos;
