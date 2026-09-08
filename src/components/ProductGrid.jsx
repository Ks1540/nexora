import React from 'react';
import { ProductCard } from './ProductCard';
import { ArrowUpDown, SearchX } from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const ProductGrid = ({ 
  products, 
  onInspectProduct, 
  onAddToCart, 
  onToggleWishlist, 
  onToggleCompare, 
  wishlistIds, 
  compareIds,
  maxPrice,
  onMaxPriceChange,
  sortBy,
  onSortChange,
  inStockOnly,
  onInStockToggle,
  onResetFilters
}) => {
  return (
    <section id="arsenal-catalog" className="container" style={{ paddingTop: '10px' }}>
      <div className="section-header">
        <span className="section-tag">
          <span>Catalog</span>
        </span>
        <h2 className="section-title">Explore Hardware & Systems</h2>
        <p className="section-subtitle">
          DGCA-approved aerial cinema drones, research quadrupeds, and high-precision spatial perception sensors with pan-India warranty.
        </p>
      </div>

      {/* Catalog Filter & Sort Toolbar */}
      <div className="catalog-toolbar">
        <div className="toolbar-left">
          <span className="results-count">
            Showing <strong>{products.length}</strong> products
          </span>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <input 
              type="checkbox" 
              checked={inStockOnly} 
              onChange={(e) => {
                playSciFiSound('click');
                onInStockToggle(e.target.checked);
              }}
              style={{ accentColor: 'var(--accent-primary)' }}
            />
            <span>In-Stock Only</span>
          </label>
        </div>

        <div className="toolbar-right">
          {/* Price Range Slider in INR */}
          <div className="price-slider-wrap">
            <span>Price:</span>
            <strong style={{ color: 'var(--text-primary)', minWidth: '95px' }}>
              Up to ₹{maxPrice.toLocaleString('en-IN')}
            </strong>
            <input 
              type="range" 
              min="10000" 
              max="1500000" 
              step="10000" 
              value={maxPrice} 
              onChange={(e) => onMaxPriceChange(Number(e.target.value))}
              className="price-slider"
            />
          </div>

          {/* Sort By Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowUpDown size={14} color="#64748b" />
            <select 
              className="sort-select" 
              value={sortBy} 
              onChange={(e) => {
                playSciFiSound('click');
                onSortChange(e.target.value);
              }}
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Products */}
      {products.length > 0 ? (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onInspect={onInspectProduct}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              onToggleCompare={onToggleCompare}
              isWishlisted={wishlistIds.includes(product.id)}
              isCompared={compareIds.includes(product.id)}
            />
          ))}
        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '80px 20px', 
          background: 'var(--bg-card)', 
          border: '1px solid var(--border-subtle)', 
          borderRadius: 'var(--radius-lg)',
          marginBottom: '60px'
        }}>
          <SearchX size={44} color="#64748b" style={{ marginBottom: '14px' }} />
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#fff', marginBottom: '6px' }}>
            No products match your filters
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.9rem' }}>
            Try adjusting your search terms, price slider, or category filters.
          </p>
          <button className="btn-secondary" onClick={onResetFilters}>
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
