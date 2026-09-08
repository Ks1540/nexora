import React from 'react';
import { X, Heart, ShoppingCart, Trash2, PackageOpen } from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const WishlistDrawer = ({ isOpen, onClose, wishlistItems, onAddToCart, onRemoveWishlist }) => {
  if (!isOpen) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="drawer-title">
            <Heart size={20} color="#f43f5e" fill="#f43f5e" />
            <span>Wishlist ({wishlistItems.length})</span>
          </div>
          <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="drawer-body">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</div>
                  
                  <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                    <button 
                      className="btn-primary" 
                      style={{ padding: '6px 12px', fontSize: '0.8rem', flex: 1 }}
                      onClick={() => {
                        playSciFiSound('cartAdd');
                        onAddToCart(item, 1);
                      }}
                    >
                      <ShoppingCart size={13} />
                      <span>Move to Cart</span>
                    </button>

                    <button 
                      className="btn-icon" 
                      style={{ width: '30px', height: '30px' }}
                      onClick={() => {
                        playSciFiSound('click');
                        onRemoveWishlist(item);
                      }}
                      title="Remove"
                    >
                      <Trash2 size={14} color="#f43f5e" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <PackageOpen size={44} color="#64748b" style={{ marginBottom: '12px' }} />
              <div style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.15rem', marginBottom: '4px' }}>
                No saved products
              </div>
              <p style={{ fontSize: '0.85rem' }}>Click the heart icon on any product to save it to your wishlist.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
