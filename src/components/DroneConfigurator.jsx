import React, { useState, useMemo } from 'react';
import { CONFIGURATOR_STEPS, CONFIG_OPTIONS } from '../data/configuratorOptions';
import { 
  Sliders, 
  Check, 
  ShoppingCart, 
  Layers
} from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const DroneConfigurator = ({ onAddToCart, onShowToast }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({
    chassis: CONFIG_OPTIONS.chassis[0],
    propulsion: CONFIG_OPTIONS.propulsion[0],
    sensors: CONFIG_OPTIONS.sensors[0],
    compute: CONFIG_OPTIONS.compute[0],
    power: CONFIG_OPTIONS.power[0]
  });

  const currentStep = CONFIGURATOR_STEPS[activeStepIndex];
  const stepOptions = CONFIG_OPTIONS[currentStep.id] || [];

  // Computed Build Telemetry
  const telemetry = useMemo(() => {
    const totalWeight = 
      (selectedOptions.chassis?.weight || 0) +
      (selectedOptions.propulsion?.weight || 0) +
      (selectedOptions.sensors?.weight || 0) +
      (selectedOptions.compute?.weight || 0) +
      (selectedOptions.power?.weight || 0);

    const baseDuration = selectedOptions.power?.baseFlightTime || 30;
    const impactTotal = 
      (selectedOptions.chassis?.flightTimeImpact || 0) +
      (selectedOptions.propulsion?.flightTimeImpact || 0) +
      (selectedOptions.sensors?.flightTimeImpact || 0) +
      (selectedOptions.compute?.flightTimeImpact || 0);
    
    const weightPenalty = Math.round((totalWeight - 1000) / 150);
    const estimatedFlightTime = Math.max(12, baseDuration + impactTotal - (weightPenalty > 0 ? weightPenalty : 0));
    const agilityIndex = Math.min(99, Math.max(45, Math.round(100 - (totalWeight / 28))));

    const totalPrice = 
      (selectedOptions.chassis?.price || 0) +
      (selectedOptions.propulsion?.price || 0) +
      (selectedOptions.sensors?.price || 0) +
      (selectedOptions.compute?.price || 0) +
      (selectedOptions.power?.price || 0);

    return {
      totalWeight,
      estimatedFlightTime,
      agilityIndex,
      totalPrice
    };
  }, [selectedOptions]);

  const handleSelectOption = (stepKey, option) => {
    playSciFiSound('click');
    setSelectedOptions((prev) => ({
      ...prev,
      [stepKey]: option
    }));
  };

  const handleAddCustomBuildToCart = () => {
    playSciFiSound('confirm');
    const customProduct = {
      id: `custom-build-${Date.now()}`,
      name: `Custom Drone: ${selectedOptions.chassis.name}`,
      tagline: `${selectedOptions.compute.name} | ${selectedOptions.sensors.name}`,
      category: 'drones',
      subCategory: 'Custom Multirotor',
      price: telemetry.totalPrice,
      originalPrice: telemetry.totalPrice + 35000,
      image: selectedOptions.chassis.image || 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
      specs: {
        flightTime: `${telemetry.estimatedFlightTime} Mins`,
        maxSpeed: selectedOptions.propulsion.topSpeed || '110 km/h',
        range: '15 km Range (NavIC Ready)',
        payloadCapacity: `${selectedOptions.chassis.type}`,
        aiCompute: selectedOptions.compute.aiTops || 'Companion Computer',
        weight: `${telemetry.totalWeight}g`,
        connectivity: 'Dual-Band Link',
        ipRating: 'DGCA Certified Frame',
        sensors: selectedOptions.sensors.name
      },
      stockCount: 5,
      badge: 'Custom Studio'
    };

    onAddToCart(customProduct, 1);
    if (onShowToast) {
      onShowToast('Custom Drone added to Cart!', 'success');
    }
  };

  return (
    <section id="build-lab" className="configurator-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Sliders size={14} />
            <span>Custom Studio</span>
          </span>
          <h2 className="section-title">Build Your Custom Drone</h2>
          <p className="section-subtitle">
            Configure premium carbon airframes, brushless propulsion, LiDAR perception payloads, and AI flight computers.
          </p>
        </div>

        <div className="configurator-layout">
          {/* Left Column: Build Steps */}
          <div className="config-builder-panel">
            <div className="config-steps-nav">
              {CONFIGURATOR_STEPS.map((step, idx) => (
                <button
                  key={step.id}
                  className={`config-step-btn ${idx === activeStepIndex ? 'active' : ''}`}
                  onClick={() => {
                    playSciFiSound('click');
                    setActiveStepIndex(idx);
                  }}
                >
                  <span>{step.name}</span>
                </button>
              ))}
            </div>

            <div style={{ marginBottom: '14px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#fff' }}>
                {currentStep.subtitle}
              </h3>
            </div>

            {/* Options List */}
            <div className="config-options-list">
              {stepOptions.map((opt) => {
                const isSelected = selectedOptions[currentStep.id]?.id === opt.id;
                return (
                  <div
                    key={opt.id}
                    className={`config-option-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(currentStep.id, opt)}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="config-opt-title">{opt.name}</div>
                        {isSelected && <span className="badge-pill badge-sky"><Check size={12} /> Selected</span>}
                      </div>
                      <div className="config-opt-desc">{opt.description}</div>
                      <div style={{ display: 'flex', gap: '14px', marginTop: '6px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        <span>Weight: <strong style={{ color: 'var(--text-secondary)' }}>+{opt.weight}g</strong></span>
                        {opt.flightTimeImpact !== undefined && (
                          <span>Flight Delta: <strong style={{ color: opt.flightTimeImpact >= 0 ? 'var(--accent-emerald)' : 'var(--accent-rose)' }}>{opt.flightTimeImpact >= 0 ? `+${opt.flightTimeImpact}` : opt.flightTimeImpact} min</strong></span>
                        )}
                      </div>
                    </div>

                    <div className="config-opt-price">
                      +₹{opt.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Step Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button
                className="btn-secondary"
                disabled={activeStepIndex === 0}
                style={{ opacity: activeStepIndex === 0 ? 0.4 : 1 }}
                onClick={() => {
                  playSciFiSound('click');
                  setActiveStepIndex((prev) => Math.max(0, prev - 1));
                }}
              >
                Previous Step
              </button>

              <button
                className="btn-secondary"
                disabled={activeStepIndex === CONFIGURATOR_STEPS.length - 1}
                style={{ opacity: activeStepIndex === CONFIGURATOR_STEPS.length - 1 ? 0.4 : 1 }}
                onClick={() => {
                  playSciFiSound('click');
                  setActiveStepIndex((prev) => Math.min(CONFIGURATOR_STEPS.length - 1, prev + 1));
                }}
              >
                Next Step
              </button>
            </div>
          </div>

          {/* Right Column: Studio Specs & Overview */}
          <div className="config-live-hud">
            <div className="hud-blueprint-display">
              <Layers size={32} color="#38bdf8" style={{ marginBottom: '8px', opacity: 0.9 }} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#fff', fontWeight: '700' }}>
                CUSTOM SPECIFICATION
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {selectedOptions.chassis.name}
              </div>
            </div>

            {/* Metrics */}
            <div className="hud-stat-meter-row">
              <div>
                <div className="meter-header">
                  <span>Estimated Endurance</span>
                  <span style={{ color: '#fff' }}>{telemetry.estimatedFlightTime} Minutes</span>
                </div>
                <div className="meter-track">
                  <div 
                    className="meter-fill" 
                    style={{ width: `${Math.min(100, (telemetry.estimatedFlightTime / 60) * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="meter-header">
                  <span>Total Mass</span>
                  <span style={{ color: '#fff' }}>
                    {telemetry.totalWeight} grams
                  </span>
                </div>
                <div className="meter-track">
                  <div 
                    className="meter-fill"
                    style={{ width: `${Math.min(100, (telemetry.totalWeight / 3000) * 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="meter-header">
                  <span>Agility Rating</span>
                  <span style={{ color: '#fff' }}>{telemetry.agilityIndex}/100</span>
                </div>
                <div className="meter-track">
                  <div 
                    className="meter-fill purple" 
                    style={{ width: `${telemetry.agilityIndex}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Total Pricing & Action in Rupees */}
            <div className="config-summary-box">
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>TOTAL SYSTEM PRICE</span>
                <div className="config-total-val">₹{telemetry.totalPrice.toLocaleString('en-IN')}</div>
              </div>

              <button 
                className="btn-primary" 
                onClick={handleAddCustomBuildToCart}
                style={{ padding: '10px 18px' }}
              >
                <ShoppingCart size={16} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
