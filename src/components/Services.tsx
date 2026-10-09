
import { Truck, RefreshCcw, ShieldCheck, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-grid">
          <div>
            <div className="service-icon">
              <Truck size={40} />
            </div>
            <h3 className="service-title">Envío Gratis</h3>
            <p className="service-desc">En compras mayores a S/ 150</p>
          </div>
          <div>
            <div className="service-icon">
              <RefreshCcw size={40} />
            </div>
            <h3 className="service-title">Devolución en 7 Días</h3>
            <p className="service-desc">Garantizada</p>
          </div>
          <div>
            <div className="service-icon">
              <ShieldCheck size={40} />
            </div>
            <h3 className="service-title">Pago Seguro</h3>
            <p className="service-desc">100% Protegido</p>
          </div>
          <div>
            <div className="service-icon">
              <HeadphonesIcon size={40} />
            </div>
            <h3 className="service-title">Soporte 24/7</h3>
            <p className="service-desc">Llámanos cuando quieras</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
