
import { Heart, Navigation, ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: 'Montura Metálica', category: 'Categoría', price: 'S/ 150.00' },
  { id: 2, name: 'Lentes Aviador', category: 'Categoría', price: 'S/ 190.00' },
  { id: 3, name: 'Lentes Retro', category: 'Categoría', price: 'S/ 160.00' },
  { id: 4, name: 'Lentes Lectura', category: 'Categoría', price: 'S/ 90.00' },
  { id: 5, name: 'Montura Acetato', category: 'Categoría', price: 'S/ 140.00' },
  { id: 6, name: 'Lentes Polarizados', category: 'Categoría', price: 'S/ 220.00' },
  { id: 7, name: 'Filtro Luz Azul', category: 'Categoría', price: 'S/ 130.00' },
  { id: 8, name: 'Montura Redonda', category: 'Categoría', price: 'S/ 150.00' },
];

const tabs = ['TODOS', 'CLAROS', 'SOL', 'DEPORTE', 'HOMBRES', 'MUJERES'];

const ProductList = () => {
  return (
    <section className="product-list-section">
      <div className="container">
        <h2 className="section-title">LISTA DE PRODUCTOS</h2>
        <div className="tabs">
          {tabs.map((tab, idx) => (
            <div key={tab} className={`tab ${idx === 0 ? 'active' : ''}`}>{tab}</div>
          ))}
        </div>
        <div className="product-grid" style={{ gridTemplateRows: 'auto auto' }}>
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src="/glasses.png" alt={p.name} className="product-image" />
              <h4 className="product-name">{p.name}</h4>
              <p className="product-cat">{p.category}</p>
              <div className="product-price price">{p.price}</div>
              <div className="product-actions">
                <button className="icon-btn" style={{ color: 'var(--primary-color)' }}><Heart size={20} /></button>
                <button className="icon-btn"><Navigation size={20} /></button>
                <button className="icon-btn"><ShoppingCart size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
