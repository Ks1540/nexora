import React, { useState } from 'react';
import { 
  X, 
  RotateCw, 
  ShoppingCart, 
  Heart, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Star
} from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const ProductDetailModal = ({ 
  product, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  onToggleCompare, 
  isWishlisted, 
  isCompared 
}) => {
  const [activeTab, setActiveTab] = useState('specs');
  const [quantity, setQuantity] = useState(1);
  const [rotationAngle, setRotationAngle] = useState(0);

  if (!product) return null;

  const handleRotate = () => {
    playSciFiSound('click');
    setRotationAngle((prev) => (prev + 90) % 360);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={() => {
            playSciFiSound('click');
            onClose();
          }}
        >
          <X size={18} />
        </button>

        <div className="inspector-grid">
          {/* Left Visual & Rotation Controls */}
          <div className="inspector-visual-panel">
            <div className="inspector-main-img-wrap">
              <img 
                src={product.image} 
                alt={product.name} 
                className="inspector-main-img"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              />
            </div>

            <div className="view-mode-toggles">
              <button 
                className="btn-mode-toggle"
                onClick={handleRotate}
              >
                <RotateCw size={14} />
                <span>Rotate View ({rotationAngle}°)</span>
              </button>
            </div>

            {/* Quick Spec Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ padding: '10px 12px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '500' }}>ONBOARD PROCESSOR</span>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                  {product.specs.aiCompute}
                </div>
              </div>

              <div style={{ padding: '10px 12px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '500' }}>WEATHER SEALING</span>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-emerald)', fontWeight: '600' }}>
                  {product.specs.ipRating}
                </div>
              </div>
            </div>
          </div>

          {/* Right Product Information */}
          <div className="inspector-info-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="card-category">{product.subCategory}</span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.82rem', color: '#f59e0b' }}>
                <Star size={13} fill="#f59e0b" />
                <span style={{ fontWeight: '600' }}>{product.rating}</span>
                <span style={{ color: 'var(--text-muted)' }}>({product.reviewCount} reviews)</span>
              </div>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', color: '#fff', marginBottom: '6px' }}>
              {product.name}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '16px', lineHeight: '1.5' }}>
              {product.tagline}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div className="price-box">
                <span className="price-current" style={{ fontSize: '1.75rem' }}>₹{product.price.toLocaleString('en-IN')}</span>
                {product.originalPrice > product.price && (
                  <span className="price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                )}
              </div>

              <span className="badge-pill badge-emerald" style={{ marginLeft: 'auto' }}>
                <ShieldCheck size={13} />
                <span>In Stock ({product.stockCount} available)</span>
              </span>
            </div>

            {/* Modal Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)', marginBottom: '16px' }}>
              <button 
                className={`category-tab ${activeTab === 'specs' ? 'active' : ''}`}
                style={{ borderRadius: '0', border: 'none', borderBottom: activeTab === 'specs' ? '2px solid var(--accent-primary)' : 'none', padding: '8px 14px', fontSize: '0.85rem', background: 'none', color: activeTab === 'specs' ? '#fff' : 'var(--text-muted)' }}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
              <button 
                className={`category-tab ${activeTab === 'features' ? 'active' : ''}`}
                style={{ borderRadius: '0', border: 'none', borderBottom: activeTab === 'features' ? '2px solid var(--accent-primary)' : 'none', padding: '8px 14px', fontSize: '0.85rem', background: 'none', color: activeTab === 'features' ? '#fff' : 'var(--text-muted)' }}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button 
                className={`category-tab ${activeTab === 'box' ? 'active' : ''}`}
                style={{ borderRadius: '0', border: 'none', borderBottom: activeTab === 'box' ? '2px solid var(--accent-primary)' : 'none', padding: '8px 14px', fontSize: '0.85rem', background: 'none', color: activeTab === 'box' ? '#fff' : 'var(--text-muted)' }}
                onClick={() => setActiveTab('box')}
              >
                In the Box
              </button>
              <button 
                className={`category-tab ${activeTab === 'reviews' ? 'active' : ''}`}
                style={{ borderRadius: '0', border: 'none', borderBottom: activeTab === 'reviews' ? '2px solid var(--accent-primary)' : 'none', padding: '8px 14px', fontSize: '0.85rem', background: 'none', color: activeTab === 'reviews' ? '#fff' : 'var(--text-muted)' }}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviews?.length || 0})
              </button>
            </div>

            {/* Tab 1: Specs */}
            {activeTab === 'specs' && (
              <table className="specs-table">
                <tbody>
                  <tr><td>Battery / Flight Endurance:</td><td>{product.specs.flightTime}</td></tr>
                  <tr><td>Max Velocity:</td><td>{product.specs.maxSpeed}</td></tr>
                  <tr><td>Transmission Range:</td><td>{product.specs.range}</td></tr>
                  <tr><td>Payload Capacity:</td><td>{product.specs.payloadCapacity}</td></tr>
                  <tr><td>Compute Architecture:</td><td>{product.specs.aiCompute}</td></tr>
                  <tr><td>All-Up Weight:</td><td>{product.specs.weight}</td></tr>
                  <tr><td>Sensors:</td><td>{product.specs.sensors}</td></tr>
                  <tr><td>Connectivity:</td><td>{product.specs.connectivity}</td></tr>
                </tbody>
              </table>
            )}

            {/* Tab 2: Features */}
            {activeTab === 'features' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '14px 0' }}>
                {product.features?.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={15} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Box */}
            {activeTab === 'box' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '14px 0' }}>
                {product.boxContents?.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <div style={{ width: '5px', height: '5px', background: '#38bdf8', borderRadius: '50%' }}></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 4: Reviews */}
            {activeTab === 'reviews' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '14px 0', maxHeight: '180px', overflowY: 'auto' }}>
                {product.reviews?.map((rev) => (
                  <div key={rev.id} style={{ padding: '10px 12px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <strong style={{ fontSize: '0.88rem', color: '#fff' }}>{rev.author}</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rev.date}</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', marginBottom: '4px' }}>{rev.role}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>"{rev.comment}"</p>
                  </div>
                ))}
              </div>
            )}

            {/* Actions Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <div className="qty-stepper" style={{ height: '40px', padding: '0 8px' }}>
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="qty-val" style={{ minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => setQuantity((q) => Math.min(product.stockCount, q + 1))}
                >
                  +
                </button>
              </div>

              <button 
                className="btn-primary" 
                style={{ flex: 1, padding: '10px 18px' }}
                onClick={() => {
                  playSciFiSound('cartAdd');
                  onAddToCart(product, quantity);
                  onClose();
                }}
              >
                <ShoppingCart size={16} />
                <span>Add to Cart (₹{(product.price * quantity).toLocaleString('en-IN')})</span>
              </button>

              <button 
                className={`btn-icon ${isWishlisted ? 'active' : ''}`}
                onClick={() => {
                  playSciFiSound('click');
                  onToggleWishlist(product);
                }}
                title="Save to Wishlist"
              >
                <Heart size={16} fill={isWishlisted ? '#f43f5e' : 'none'} color={isWishlisted ? '#f43f5e' : 'currentColor'} />
              </button>

              <button 
                className={`btn-icon ${isCompared ? 'active' : ''}`}
                onClick={() => {
                  playSciFiSound('click');
                  onToggleCompare(product);
                }}
                title="Add to Compare"
              >
                <Layers size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
