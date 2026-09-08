import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ShieldCheck, ArrowRight, PackageOpen } from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const CartDrawer = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQty, 
  onRemoveItem, 
  onProceedCheckout,
  warrantyEnabled,
  onToggleWarranty,
  appliedPromo,
  onApplyPromo
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountRate = appliedPromo ? (appliedPromo === 'INDIA10' || appliedPromo === 'NEXORA10' ? 0.10 : appliedPromo === 'NEXORA20' ? 0.20 : 0) : 0;
  const discountAmount = Math.round(subtotal * discountRate);
  const warrantyAmount = warrantyEnabled ? Math.round(subtotal * 0.08) : 0;
  const shipping = subtotal > 10000 ? 0 : (subtotal > 0 ? 499 : 0);
  const finalTotal = Math.max(0, subtotal - discountAmount + warrantyAmount + shipping);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === 'INDIA10' || code === 'NEXORA10' || code === 'NEXORA20') {
      playSciFiSound('confirm');
      onApplyPromo(code);
      setPromoError('');
    } else {
      playSciFiSound('click');
      setPromoError('Invalid coupon. Try INDIA10 or NEXORA20');
    }
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-title">
            <ShoppingBag size={20} color="#38bdf8" />
            <span>Shopping Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
          </div>
          <button className="modal-close-btn" style={{ position: 'static' }} onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="drawer-body">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <div className="cart-item-title">{item.name}</div>
                    <div className="cart-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                    
                    <div className="qty-control-row">
                      <div className="qty-stepper">
                        <button 
                          className="qty-btn"
                          onClick={() => {
                            playSciFiSound('click');
                            onUpdateQty(item.id, item.quantity - 1);
                          }}
                        >
                          -
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => {
                            playSciFiSound('click');
                            onUpdateQty(item.id, item.quantity + 1);
                          }}
                        >
                          +
                        </button>
                      </div>

                      <button 
                        className="btn-icon" 
                        style={{ width: '28px', height: '28px', border: 'none', background: 'none' }}
                        onClick={() => {
                          playSciFiSound('click');
                          onRemoveItem(item.id);
                        }}
                        title="Remove item"
                      >
                        <Trash2 size={14} color="#f43f5e" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Extended Warranty Addon in Rupees */}
              <div style={{ padding: '12px 14px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', marginTop: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={warrantyEnabled} 
                    onChange={(e) => {
                      playSciFiSound('click');
                      onToggleWarranty(e.target.checked);
                    }}
                    style={{ accentColor: 'var(--accent-primary)' }}
                  />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.88rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <ShieldCheck size={15} color="#38bdf8" />
                      <span>Nexora Care+ (+2 Yrs Indian Warranty)</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Crash replacement & free express calibration (+₹{Math.round(subtotal * 0.08).toLocaleString('en-IN')})
                    </div>
                  </div>
                </label>
              </div>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Coupon code (e.g. INDIA10)" 
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  style={{ height: '36px', padding: '0 12px', fontSize: '0.82rem' }}
                />
                <button type="submit" className="btn-secondary" style={{ padding: '0 14px', fontSize: '0.82rem' }}>
                  Apply
                </button>
              </form>
              {appliedPromo && (
                <div style={{ color: 'var(--accent-emerald)', fontSize: '0.8rem', fontWeight: '600' }}>
                  ✓ Coupon {appliedPromo} applied (-{discountRate * 100}%)
                </div>
              )}
              {promoError && (
                <div style={{ color: 'var(--accent-rose)', fontSize: '0.8rem' }}>{promoError}</div>
              )}
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <PackageOpen size={44} color="#64748b" style={{ marginBottom: '12px' }} />
              <div style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.15rem', marginBottom: '4px' }}>
                Your cart is empty
              </div>
              <p style={{ fontSize: '0.85rem' }}>Explore our DGCA-certified drones and robotics hardware.</p>
            </div>
          )}
        </div>

        {/* Footer Summary in INR */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="cart-summary-row">
              <span>Subtotal:</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            {discountAmount > 0 && (
              <div className="cart-summary-row" style={{ color: 'var(--accent-emerald)' }}>
                <span>Discount:</span>
                <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
              </div>
            )}
            {warrantyEnabled && (
              <div className="cart-summary-row">
                <span>Nexora Care+ Warranty:</span>
                <span>+₹{warrantyAmount.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="cart-summary-row">
              <span>Pan-India Delivery:</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>
            <div className="cart-summary-row total">
              <span>Total (Incl. GST):</span>
              <span style={{ color: '#fff' }}>₹{finalTotal.toLocaleString('en-IN')}</span>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '14px', padding: '12px' }}
              onClick={() => {
                playSciFiSound('click');
                onProceedCheckout(finalTotal);
              }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
