import React from 'react';
import { X, ShieldCheck, MapPin, Award, Users, CheckCircle2, Building2, Cpu, Globe2 } from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const AboutUsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: '900px', padding: '36px' }} onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={() => {
            playSciFiSound('click');
            onClose();
          }}
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="badge-pill badge-sky" style={{ marginBottom: '10px' }}>
            <Award size={13} />
            <span>Make in India • DGCA Type-Certified</span>
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: '#fff', marginBottom: '8px' }}>
            Pioneering India's Autonomous Robotics Frontier
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', maxWidth: '640px', margin: '0 auto', lineHeight: '1.6' }}>
            Headquartered in Bengaluru, Nexora designs and manufactures world-class autonomous drones, bionic mechs, and perception hardware engineered for India's diverse landscapes.
          </p>
        </div>

        {/* Key Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', marginBottom: '36px' }}>
          <div style={{ padding: '20px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
            <ShieldCheck size={28} color="#38bdf8" style={{ marginBottom: '12px' }} />
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#fff', marginBottom: '6px' }}>
              DGCA Certified
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Full compliance with DGCA Drone Rules 2021, Digital Sky NPNT authorization, and dual NavIC-GPS satellite navigation.
            </p>
          </div>

          <div style={{ padding: '20px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
            <Cpu size={28} color="#6366f1" style={{ marginBottom: '12px' }} />
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#fff', marginBottom: '6px' }}>
              Indigenous R&D
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Custom flight controllers, edge AI perception stacks, and LiDAR sensors co-developed with leading Indian research institutes.
            </p>
          </div>

          <div style={{ padding: '20px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
            <Globe2 size={28} color="#10b981" style={{ marginBottom: '12px' }} />
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#fff', marginBottom: '6px' }}>
              19,000+ Pincodes
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Express pan-India delivery, 24-48 hr field parts replacement, and local service centers in Bengaluru, Mumbai, Delhi, and Hyderabad.
            </p>
          </div>
        </div>

        {/* Our Mission & Impact */}
        <div style={{ padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', marginBottom: '32px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#fff', marginBottom: '10px' }}>
            Empowering Indian Industry & Research
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '16px' }}>
            From surveying highway corridors under PM Gati Shakti to precision crop-health monitoring in Punjab and Andhra Pradesh, Nexora hardware is deployed across India's most critical missions.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} color="#38bdf8" />
              <span>Over 8,500+ commercial drones deployed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} color="#38bdf8" />
              <span>Native NavIC satellite constellation tracking</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} color="#38bdf8" />
              <span>Trusted by 40+ Indian Universities & Research Labs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={16} color="#38bdf8" />
              <span>GST Invoicing & Enterprise AMC contracts</span>
            </div>
          </div>
        </div>

        {/* Innovation Facilities Across India */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#fff', marginBottom: '14px' }}>
            Our Indian Facilities & Hubs
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
            <div style={{ padding: '14px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', marginBottom: '4px', fontSize: '0.88rem', fontWeight: '600' }}>
                <MapPin size={15} />
                <span>Bengaluru Hub</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Electronics City Phase 1, Bengaluru, Karnataka — Primary R&D & Assembly Lab
              </p>
            </div>

            <div style={{ padding: '14px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6366f1', marginBottom: '4px', fontSize: '0.88rem', fontWeight: '600' }}>
                <MapPin size={15} />
                <span>Hyderabad Range</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                HITEC City, Hyderabad, Telangana — Autonomous Outdoor Flight Testing
              </p>
            </div>

            <div style={{ padding: '14px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', marginBottom: '4px', fontSize: '0.88rem', fontWeight: '600' }}>
                <MapPin size={15} />
                <span>Pune Facility</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Hinjawadi Tech Park, Pune, Maharashtra — Aerodynamics & Composite Fabrication
              </p>
            </div>
          </div>
        </div>

        {/* Footer close */}
        <div style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
          <button 
            className="btn-primary" 
            style={{ padding: '10px 28px' }}
            onClick={onClose}
          >
            Explore the Catalog
          </button>
        </div>
      </div>
    </div>
  );
};
