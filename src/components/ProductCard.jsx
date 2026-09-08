import React from 'react';
import { Heart, Layers, ShoppingCart, Star } from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const ProductCard = ({ 
  product, 
  onInspect, 
  onAddToCart, 
  onToggleWishlist, 
  onToggleCompare, 
  isWishlisted, 
  isCompared 
}) => {
  return (
    <div className="product-card">
      <div className="card-image-wrap" onClick={() => onInspect(product)} style={{ cursor: 'pointer' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-img"
          loading="lazy" 
        />
        
        {/* Top Badge */}
        <div className="card-badge-pos">
          <span className="badge-pill badge-sky">
            <span>{product.badge}</span>
          </span>
        </div>

        {/* Floating Actions */}
        <div className="card-actions-floating" onClick={(e) => e.stopPropagation()}>
          <button 
            className={`btn-floating-action ${isWishlisted ? 'active' : ''}`}
            onClick={() => {
              playSciFiSound('click');
              onToggleWishlist(product);
            }}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart size={15} fill={isWishlisted ? '#f43f5e' : 'none'} color={isWishlisted ? '#f43f5e' : 'currentColor'} />
          </button>

          <button 
            className={`btn-floating-action ${isCompared ? 'active' : ''}`}
            onClick={() => {
              playSciFiSound('click');
              onToggleCompare(product);
            }}
            title={isCompared ? 'Remove from Compare' : 'Add to Compare'}
          >
            <Layers size={15} />
          </button>
        </div>
      </div>

      <div className="card-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <span className="card-category">{product.subCategory}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#f59e0b', fontWeight: '600' }}>
            <Star size={13} fill="#f59e0b" />
            <span>{product.rating}</span>
            <span style={{ color: 'var(--text-muted)' }}>({product.reviewCount})</span>
          </div>
        </div>
        
        <h3 
          className="card-title" 
          onClick={() => {
            playSciFiSound('click');
            onInspect(product);
          }}
        >
          {product.name}
        </h3>

        <p className="card-tagline">{product.tagline}</p>

        {/* Specs Highlights */}
        <div className="card-spec-matrix">
          <div className="spec-cell">
            <span className="spec-cell-lbl">Battery / Duration</span>
            <span className="spec-cell-val">{product.specs.flightTime}</span>
          </div>
          <div className="spec-cell">
            <span className="spec-cell-lbl">Max Velocity</span>
            <span className="spec-cell-val">{product.specs.maxSpeed}</span>
          </div>
          <div className="spec-cell">
            <span className="spec-cell-lbl">Onboard Compute</span>
            <span className="spec-cell-val">{product.specs.aiCompute}</span>
          </div>
          <div className="spec-cell">
            <span className="spec-cell-lbl">Range</span>
            <span className="spec-cell-val">{product.specs.range}</span>
          </div>
        </div>

        {/* Bottom Pricing & Add to Cart */}
        <div className="card-bottom-row">
          <div className="price-box">
            <span className="price-current">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice > product.price && (
              <span className="price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>

          <button 
            className="btn-primary" 
            style={{ padding: '8px 14px', fontSize: '0.88rem' }}
            onClick={() => {
              playSciFiSound('cartAdd');
              onAddToCart(product);
            }}
          >
            <ShoppingCart size={15} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
