import React from 'react';
import { X, Layers, ShoppingCart, Trash2 } from 'lucide-react';
import { playSciFiSound } from '../utils/audio';

export const CompareModal = ({ comparedProducts, onClose, onAddToCart, onRemoveFromCompare }) => {
  if (!comparedProducts || comparedProducts.length === 0) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" style={{ maxWidth: '460px', padding: '36px', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose}><X size={18} /></button>
          <Layers size={40} color="#38bdf8" style={{ marginBottom: '14px' }} />
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#fff', marginBottom: '6px' }}>
            No products to compare
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '18px' }}>
            Select the compare icon on 2 or more products in the catalog to view technical specifications side-by-side.
          </p>
          <button className="btn-secondary" onClick={onClose}>Back to Catalog</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" style={{ maxWidth: '1080px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}><X size={18} /></button>

        <div className="compare-modal-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Layers size={20} color="#38bdf8" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: '#fff' }}>
              Product Specification Comparison
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="compare-matrix-table">
              <thead>
                <tr>
                  <th>FEATURE</th>
                  {comparedProducts.map((p) => (
                    <th key={p.id} style={{ minWidth: '190px' }}>
                      <img src={p.image} alt={p.name} className="compare-thumb" />
                      <div className="compare-item-name">{p.name}</div>
                      <div style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.15rem', margin: '4px 0' }}>
                        ₹{p.price.toLocaleString('en-IN')}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '8px' }}>
                        <button 
                          className="btn-primary" 
                          style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                          onClick={() => {
                            playSciFiSound('cartAdd');
                            onAddToCart(p, 1);
                          }}
                        >
                          <ShoppingCart size={13} />
                          <span>Add to Cart</span>
                        </button>
                        <button 
                          className="btn-icon" 
                          style={{ width: '30px', height: '30px' }}
                          onClick={() => {
                            playSciFiSound('click');
                            onRemoveFromCompare(p.id);
                          }}
                          title="Remove"
                        >
                          <Trash2 size={13} color="#f43f5e" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Category</td>
                  {comparedProducts.map((p) => <td key={p.id}>{p.subCategory}</td>)}
                </tr>
                <tr>
                  <td>Battery / Flight Endurance</td>
                  {comparedProducts.map((p) => <td key={p.id} style={{ color: '#fff', fontWeight: '600' }}>{p.specs.flightTime}</td>)}
                </tr>
                <tr>
                  <td>Max Velocity</td>
                  {comparedProducts.map((p) => <td key={p.id}>{p.specs.maxSpeed}</td>)}
                </tr>
                <tr>
                  <td>Range (Indian Airspace)</td>
                  {comparedProducts.map((p) => <td key={p.id}>{p.specs.range}</td>)}
                </tr>
                <tr>
                  <td>Payload Capacity</td>
                  {comparedProducts.map((p) => <td key={p.id}>{p.specs.payloadCapacity}</td>)}
                </tr>
                <tr>
                  <td>Processor Architecture</td>
                  {comparedProducts.map((p) => <td key={p.id} style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>{p.specs.aiCompute}</td>)}
                </tr>
                <tr>
                  <td>All-Up Mass</td>
                  {comparedProducts.map((p) => <td key={p.id}>{p.specs.weight}</td>)}
                </tr>
                <tr>
                  <td>Weather Sealing</td>
                  {comparedProducts.map((p) => <td key={p.id} style={{ color: 'var(--accent-emerald)' }}>{p.specs.ipRating}</td>)}
                </tr>
                <tr>
                  <td>Perception Sensors</td>
                  {comparedProducts.map((p) => <td key={p.id} style={{ fontSize: '0.82rem' }}>{p.specs.sensors}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
