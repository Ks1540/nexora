import React from 'react';
import { ArrowRight, Sliders, ShieldCheck } from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const Hero = ({ onExploreCatalog, onOpenConfigurator, onInspectProduct, featuredProduct }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Copy & Stats */}
          <div className="hero-left-content">
            <div className="hero-live-badge">
              <span className="pulse-dot"></span>
              <span>Made in India • DGCA Type-Certified Series</span>
            </div>

            <h1 className="hero-headline">
              Precision Drones & <br />
              <span className="hero-gradient-text">Autonomous Robotics.</span>
            </h1>

            <p className="hero-description">
              Engineered in Bengaluru for Indian infrastructure surveys, high-altitude cinematography, 
              and advanced robotics research. Equipped with NavIC satellite positioning and on-device AI perception.
            </p>

            <div className="hero-cta-group">
              <button 
                className="btn-primary" 
                onClick={() => {
                  playSciFiSound('click');
                  onExploreCatalog();
                }}
              >
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </button>

              <button 
                className="btn-secondary" 
                onClick={() => {
                  playSciFiSound('click');
                  onOpenConfigurator();
                }}
              >
                <Sliders size={16} />
                <span>Custom Drone Studio</span>
              </button>
            </div>

            {/* Hardware Capability Metrics */}
            <div className="hero-telemetry-strip">
              <div className="telemetry-item">
                <span className="telemetry-val">48 Mins</span>
                <span className="telemetry-lbl">Max Flight Duration</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-val">NavIC + O4</span>
                <span className="telemetry-lbl">Indian Satellite Link</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-val">19,000+</span>
                <span className="telemetry-lbl">Pincodes Supported</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Hardware Card */}
          {featuredProduct && (
            <div className="hero-showcase-card">
              <div className="hero-showcase-tag">
                <span className="badge-pill badge-sky">
                  <span>DGCA Certified Flagship</span>
                </span>
                <span className="badge-pill badge-emerald">
                  <ShieldCheck size={13} />
                  <span>In Stock</span>
                </span>
              </div>

              <img 
                src={featuredProduct.image} 
                alt={featuredProduct.name} 
                className="hero-showcase-img"
              />

              <h3 className="showcase-model-title">{featuredProduct.name}</h3>
              <p className="card-tagline">{featuredProduct.tagline}</p>

              <div className="showcase-quick-specs">
                <div>Flight: <span>{featuredProduct.specs.flightTime}</span></div>
                <div>Speed: <span>{featuredProduct.specs.maxSpeed}</span></div>
                <div>AI Compute: <span>{featuredProduct.specs.aiCompute}</span></div>
              </div>

              <div className="showcase-footer">
                <div className="price-box">
                  <span className="price-current">₹{featuredProduct.price.toLocaleString('en-IN')}</span>
                  <span className="price-original">₹{featuredProduct.originalPrice.toLocaleString('en-IN')}</span>
                </div>

                <button 
                  className="btn-secondary"
                  onClick={() => {
                    playSciFiSound('click');
                    onInspectProduct(featuredProduct);
                  }}
                >
                  <span>View Details</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
