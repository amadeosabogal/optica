
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Lentes Oftálmicos', category: 'Categoría', price: 'S/ 120.00' },
  { id: 2, name: 'Lentes de Sol', category: 'Categoría', price: 'S/ 180.00' },
  { id: 3, name: 'Lentes Deportivos', category: 'Categoría', price: 'S/ 250.00' },
  { id: 4, name: 'Montura Clásica', category: 'Categoría', price: 'S/ 140.00' },
];

const NewProducts = () => {
  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">NUEVOS PRODUCTOS</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src="/glasses.png" alt={p.name} className="product-image" />
              <h4 className="product-name">{p.name}</h4>
              <p className="product-cat">{p.category}</p>
              <div className="product-price price">{p.price}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', color: 'var(--text-muted)' }}>
          <button className="icon-btn"><ChevronLeft size={20} /></button>
          <button className="icon-btn"><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
