import React, { useState } from 'react';
import { 
  Bot, 
  Search, 
  ShoppingBag, 
  Heart, 
  Volume2, 
  VolumeX, 
  X,
  Layers,
  Sliders,
  Info
} from 'lucide-react';
import { playSciFiSound, toggleAudioMute, isAudioEnabled } from '../utils/audio';

export const Navbar = ({ 
  cartCount, 
  wishlistCount, 
  compareCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenCompare, 
  onOpenAbout,
  searchTerm, 
  onSearchChange,
  onOpenConfigurator,
  onNavigateHome
}) => {
  const [audioMuted, setAudioMuted] = useState(!isAudioEnabled());

  const handleAudioToggle = () => {
    const newState = toggleAudioMute();
    setAudioMuted(!newState);
    if (newState) {
      playSciFiSound('click');
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          {/* Brand Logo */}
          <div 
            className="brand-logo" 
            onClick={() => {
              playSciFiSound('click');
              onNavigateHome();
            }}
          >
            <div className="brand-icon">
              <Bot size={22} />
            </div>
            <div className="brand-text">
              <span className="brand-title">NEX<span>ORA</span></span>
              <span className="brand-subtitle">Autonomous Systems India</span>
            </div>
          </div>

          {/* Clean Search Bar */}
          <div className="nav-search-bar">
            <Search className="search-icon-left" size={16} />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search drones, robotics, LiDAR, sensors..." 
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="search-clear-btn" 
                onClick={() => {
                  playSciFiSound('click');
                  onSearchChange('');
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Action Links & Triggers */}
          <div className="nav-actions">
            {/* About Us Link */}
            <button 
              className="nav-link-btn"
              onClick={() => {
                playSciFiSound('click');
                onOpenAbout();
              }}
              title="About Nexora India"
            >
              <Info size={15} />
              <span>About Us</span>
            </button>

            {/* Custom Drone Studio */}
            <button 
              className="nav-link-btn"
              onClick={() => {
                playSciFiSound('click');
                onOpenConfigurator();
              }}
              title="Custom Drone Studio"
            >
              <Sliders size={15} />
              <span>Studio</span>
            </button>

            {/* Compare Products */}
            <button 
              className="btn-icon" 
              onClick={() => {
                playSciFiSound('click');
                onOpenCompare();
              }}
              title="Compare Products"
            >
              <Layers size={17} />
              {compareCount > 0 && <span className="badge-counter">{compareCount}</span>}
            </button>

            {/* Saved Wishlist */}
            <button 
              className="btn-icon" 
              onClick={() => {
                playSciFiSound('click');
                onOpenWishlist();
              }}
              title="Saved Wishlist"
            >
              <Heart size={17} />
              {wishlistCount > 0 && <span className="badge-counter">{wishlistCount}</span>}
            </button>

            {/* Audio Toggle */}
            <button 
              className="btn-icon" 
              onClick={handleAudioToggle} 
              title={audioMuted ? 'Enable Sound Effects' : 'Mute Sound Effects'}
            >
              {audioMuted ? <VolumeX size={17} color="#64748b" /> : <Volume2 size={17} color="#38bdf8" />}
            </button>

            {/* Cart Button */}
            <button 
              className="btn-primary" 
              onClick={() => {
                playSciFiSound('click');
                onOpenCart();
              }}
              style={{ padding: '8px 16px', fontSize: '0.88rem' }}
            >
              <ShoppingBag size={16} />
              <span>Cart</span>
              {cartCount > 0 && (
                <span style={{ marginLeft: '4px', background: '#0f172a', color: '#fff', padding: '1px 7px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: '700' }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
