
import { ShoppingCart, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GLASSINC.</div>
      <div className="header-actions">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span>ESP</span>
          <span style={{ color: '#d1d5db' }}>|</span>
          <span>S/</span>
        </div>
        <button className="icon-btn cart-wrapper">
          <ShoppingCart size={20} />
          <span className="cart-badge">2</span>
        </button>
        <button className="icon-btn">
          <Search size={20} />
        </button>
        <button className="icon-btn">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
