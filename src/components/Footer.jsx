import React, { useState } from 'react';
import { Bot, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const Footer = ({ onSelectCategory, onOpenAbout, onShowToast }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      playSciFiSound('confirm');
      setSubscribed(true);
      if (onShowToast) {
        onShowToast('Subscribed to Nexora India product updates!', 'success');
      }
    }
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '14px' }}>
              <div className="brand-icon">
                <Bot size={22} />
              </div>
              <div className="brand-text">
                <span className="brand-title">NEX<span>ORA</span></span>
                <span className="brand-subtitle">Autonomous Systems India</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '16px' }}>
              Designing and manufacturing DGCA Type-Certified autonomous drones, bionic mechs, and perception payloads in Bengaluru under the Make in India initiative.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '12px' }}>
              <MapPin size={14} color="#38bdf8" />
              <span>Electronic City Phase 1, Bengaluru, Karnataka 560100</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 10px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 'var(--radius-full)' }}>
              <div className="pulse-dot"></div>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: '600' }}>
                All India Operations: 100% Active
              </span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="footer-col-title">Product Catalog</h4>
            <ul className="footer-links">
              <li><a href="#arsenal-catalog" className="footer-link" onClick={() => onSelectCategory('drones')}>DGCA Cinema & Survey Drones</a></li>
              <li><a href="#arsenal-catalog" className="footer-link" onClick={() => onSelectCategory('humanoids')}>Bionic Quadrupeds & Mechs</a></li>
              <li><a href="#arsenal-catalog" className="footer-link" onClick={() => onSelectCategory('ai-vision')}>AI Vision & LiDAR Scanners</a></li>
              <li><a href="#arsenal-catalog" className="footer-link" onClick={() => onSelectCategory('cybernetics')}>Cybernetic Wearable Gear</a></li>
              <li><a href="#arsenal-catalog" className="footer-link" onClick={() => onSelectCategory('diy-robotics')}>DIY Developer Flight Cores</a></li>
            </ul>
          </div>

          {/* Column 3: Indian Compliance & About Us */}
          <div>
            <h4 className="footer-col-title">Company & Compliance</h4>
            <ul className="footer-links">
              <li><span className="footer-link" style={{ cursor: 'pointer', color: '#38bdf8' }} onClick={onOpenAbout}>About Nexora India</span></li>
              <li><span className="footer-link">DGCA Drone Rules 2021 Compliance</span></li>
              <li><span className="footer-link">Digital Sky NPNT Authorization</span></li>
              <li><span className="footer-link">Nexora Care+ 2-Yr India Warranty</span></li>
              <li><span className="footer-link">GST Invoicing & Enterprise AMC</span></li>
              <li><span className="footer-link">Make in India Certification</span></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="footer-col-title">Stay Updated</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '12px' }}>
              Subscribe for new DGCA hardware drop alerts, firmware updates, and exclusive builder discounts.
            </p>

            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-emerald)', fontSize: '0.88rem', fontWeight: '600' }}>
                <CheckCircle2 size={16} />
                <span>You're subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email" 
                  className="search-input"
                  style={{ height: '38px', padding: '0 12px', fontSize: '0.85rem' }}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <button type="submit" className="btn-primary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>© 2026 Nexora Autonomous Systems India Pvt. Ltd. CIN: U72900KA2026PTC184920</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>GST Compliant</span>
            <span>Made with Pride in India 🇮🇳</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
