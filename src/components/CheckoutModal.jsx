import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Smartphone, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSciFiSound } from '../utils/audio';

export const CheckoutModal = ({ isOpen, onClose, finalTotal, onOrderSuccess }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [trackingId, setTrackingId] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: 'Rahul Sharma',
    phone: '+91 98765 43210',
    email: 'rahul.sharma@enterprise-drone.in',
    address: '402, 12th Main Road, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560038',
    upiId: 'rahul@okaxis',
    cardNumber: '•••• •••• •••• 4242',
    expDate: '08/28',
    cvv: '382',
    gstNumber: '29ABCDE1234F1Z5'
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    playSciFiSound('click');
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      playSciFiSound('confirm');
      const genTracking = `NX-IN-${Math.floor(1000 + Math.random() * 9000)}-BLR`;
      setTrackingId(genTracking);
      setStep(4);
      
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff9933', '#ffffff', '#138808', '#38bdf8']
      });

      if (onOrderSuccess) {
        onOrderSuccess(genTracking);
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: '640px', padding: '28px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}><X size={18} /></button>

        {/* Step Indicator */}
        <div className="checkout-steps-bar">
          <div className={`checkout-step-indicator ${step >= 1 ? 'active' : ''} ${step > 1 ? 'done' : ''}`}>
            <div className="step-num-circle">1</div>
            <span className="step-title-lbl">Customer</span>
          </div>
          <div className={`checkout-step-indicator ${step >= 2 ? 'active' : ''} ${step > 2 ? 'done' : ''}`}>
            <div className="step-num-circle">2</div>
            <span className="step-title-lbl">Delivery</span>
          </div>
          <div className={`checkout-step-indicator ${step >= 3 ? 'active' : ''} ${step > 3 ? 'done' : ''}`}>
            <div className="step-num-circle">3</div>
            <span className="step-title-lbl">Payment</span>
          </div>
          <div className={`checkout-step-indicator ${step === 4 ? 'active done' : ''}`}>
            <div className="step-num-circle">4</div>
            <span className="step-title-lbl">Confirmation</span>
          </div>
        </div>

        {/* Step 1: Contact Information */}
        {step === 1 && (
          <form onSubmit={handleNextStep}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: '#fff', marginBottom: '6px' }}>
              Customer Details
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '18px' }}>
              Enter your contact details for GST tax invoice and delivery updates.
            </p>

            <div className="checkout-form-grid">
              <div className="form-field-group">
                <label className="form-field-lbl">Full Name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  className="form-field-input" 
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-field-group">
                <label className="form-field-lbl">Mobile Number</label>
                <input 
                  type="text" 
                  name="phone" 
                  required 
                  className="form-field-input" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-field-group full">
                <label className="form-field-lbl">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="form-field-input" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '18px' }}>
              <button type="submit" className="btn-primary">
                <span>Continue to Delivery Address</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Indian Delivery Address */}
        {step === 2 && (
          <form onSubmit={handleNextStep}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: '#fff', marginBottom: '6px' }}>
              Pan-India Delivery Address
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '18px' }}>
              We deliver across 19,000+ pincodes in India via insured express air courier.
            </p>

            <div className="checkout-form-grid">
              <div className="form-field-group full">
                <label className="form-field-lbl">Flat / House No. / Street Address</label>
                <input 
                  type="text" 
                  name="address" 
                  required 
                  className="form-field-input" 
                  value={formData.address} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-field-group">
                <label className="form-field-lbl">City</label>
                <input 
                  type="text" 
                  name="city" 
                  required 
                  className="form-field-input" 
                  value={formData.city} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-field-group">
                <label className="form-field-lbl">State</label>
                <input 
                  type="text" 
                  name="state" 
                  required 
                  className="form-field-input" 
                  value={formData.state} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-field-group">
                <label className="form-field-lbl">Pincode</label>
                <input 
                  type="text" 
                  name="postalCode" 
                  required 
                  className="form-field-input" 
                  value={formData.postalCode} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-field-group">
                <label className="form-field-lbl">GSTIN (Optional for B2B Credit)</label>
                <input 
                  type="text" 
                  name="gstNumber" 
                  className="form-field-input" 
                  value={formData.gstNumber} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '18px' }}>
              <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                Back
              </button>
              <button type="submit" className="btn-primary">
                <span>Continue to Payment</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Indian Payment Options (UPI / Cards / NetBanking) */}
        {step === 3 && (
          <form onSubmit={handleNextStep}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: '#fff', marginBottom: '6px' }}>
              Select Payment Method
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '18px' }}>
              Zero convenience fee. 100% secure payment gateway with instant GST invoice.
            </p>

            <div className="payment-method-cards">
              <div 
                className={`payment-method-card ${paymentMethod === 'upi' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <Smartphone size={18} color="#38bdf8" />
                <span style={{ fontSize: '0.82rem', fontWeight: '600' }}>UPI / GPay / PhonePe</span>
              </div>
              <div 
                className={`payment-method-card ${paymentMethod === 'card' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard size={18} color="#6366f1" />
                <span style={{ fontSize: '0.82rem', fontWeight: '600' }}>Cards (RuPay/Visa)</span>
              </div>
              <div 
                className={`payment-method-card ${paymentMethod === 'netbanking' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('netbanking')}
              >
                <Building2 size={18} color="#10b981" />
                <span style={{ fontSize: '0.82rem', fontWeight: '600' }}>NetBanking / B2B</span>
              </div>
            </div>

            {paymentMethod === 'upi' ? (
              <div className="checkout-form-grid">
                <div className="form-field-group full">
                  <label className="form-field-lbl">UPI ID / VPA</label>
                  <input 
                    type="text" 
                    name="upiId" 
                    required 
                    placeholder="yourname@okhdfcbank or yourname@paytm"
                    className="form-field-input" 
                    value={formData.upiId} 
                    onChange={handleInputChange} 
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Supports Google Pay, PhonePe, Paytm, BHIM, and all Indian bank UPI apps.
                  </span>
                </div>
              </div>
            ) : (
              <div className="checkout-form-grid">
                <div className="form-field-group full">
                  <label className="form-field-lbl">Card Number</label>
                  <input 
                    type="text" 
                    name="cardNumber" 
                    required 
                    className="form-field-input" 
                    value={formData.cardNumber} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-field-group">
                  <label className="form-field-lbl">Expiry Date</label>
                  <input 
                    type="text" 
                    name="expDate" 
                    required 
                    className="form-field-input" 
                    value={formData.expDate} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-field-group">
                  <label className="form-field-lbl">CVV</label>
                  <input 
                    type="password" 
                    name="cvv" 
                    required 
                    className="form-field-input" 
                    value={formData.cvv} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '18px' }}>
              <button type="button" className="btn-secondary" onClick={() => setStep(2)}>
                Back
              </button>
              <button type="submit" className="btn-primary" style={{ padding: '10px 24px' }}>
                <span>Pay ₹{(finalTotal || 0).toLocaleString('en-IN')}</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Order Confirmation in India */}
        {step === 4 && (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ width: '56px', height: '56px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--accent-emerald)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
              <CheckCircle size={32} color="#10b981" />
            </div>

            <span className="badge-pill badge-emerald" style={{ marginBottom: '8px' }}>
              Order Confirmed • GST Invoice Generated
            </span>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#fff', margin: '6px 0' }}>
              Thank You, {formData.fullName}!
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '440px', margin: '0 auto 20px' }}>
              Your DGCA-certified hardware order has been received at our Bengaluru fulfillment center. A tax invoice has been sent to {formData.email}.
            </p>

            <div style={{ padding: '14px 18px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', maxWidth: '420px', margin: '0 auto 20px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Consignment Docket:</span>
                <strong style={{ color: '#fff' }}>{trackingId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Destination:</span>
                <span style={{ color: '#fff' }}>{formData.city}, {formData.state} - {formData.postalCode}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Estimated Delivery:</span>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: '600' }}>2–3 Business Days (Express Air)</span>
              </div>
            </div>

            <button 
              className="btn-primary"
              onClick={onClose}
              style={{ padding: '10px 24px' }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
