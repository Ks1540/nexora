import React, { useState } from 'react';
import { Sparkles, X, Send, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { playSciFiSound } from '../utils/audio';

export const AiAdvisorChat = ({ onInspectProduct, onAddToCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'Namaste! Looking for a DGCA-certified drone, robotics research platform, or sensor in India? Tell me your project requirements or budget.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickPrompts = [
    { label: 'DGCA 8K Drone (under ₹2L)', query: 'Recommend a DGCA certified drone for 8K video under 2 Lakhs' },
    { label: 'ROS2 Research Quadruped', query: 'What quadruped robot is best for university research in India?' },
    { label: 'High-Speed FPV Racer', query: 'Show me the fastest FPV racing drone available in India' },
    { label: 'Submersible Drone', query: 'Do you have drones that can submerge underwater for coastal surveys?' }
  ];

  const handleSendMessage = (userText) => {
    if (!userText.trim()) return;
    playSciFiSound('click');

    const newMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');

    setTimeout(() => {
      playSciFiSound('confirm');
      const textLower = userText.toLowerCase();
      let matchedProduct = null;
      let reply = '';

      if (textLower.includes('cinema') || textLower.includes('8k') || textLower.includes('video') || textLower.includes('phantom') || textLower.includes('dgca') || textLower.includes('2 lakh')) {
        matchedProduct = PRODUCTS.find((p) => p.id === 'drone-apex-phantom-x');
        reply = 'The Phantom-X 8K Cinema Drone (₹1,54,999) is our top DGCA Type-Certified recommendation. It features Indian NavIC satellite positioning, 48-minute endurance, and 360° LiDAR obstacle avoidance.';
      } else if (textLower.includes('ros2') || textLower.includes('quadruped') || textLower.includes('rover') || textLower.includes('dog') || textLower.includes('humanoid') || textLower.includes('research') || textLower.includes('university')) {
        matchedProduct = PRODUCTS.find((p) => p.id === 'mech-titan-quadruped-v3');
        reply = 'For university research and industrial inspection in India, the CyberHound Quadruped Bionic Rover (₹2,89,999) is powered by an NVIDIA Jetson Orin AGX compute platform with full ROS2 support.';
      } else if (textLower.includes('fpv') || textLower.includes('fast') || textLower.includes('speed') || textLower.includes('race')) {
        matchedProduct = PRODUCTS.find((p) => p.id === 'drone-spectre-fpv-racer');
        reply = 'The Spectre-7 Carbon FPV Interceptor (₹69,999) reaches 162 km/h with 0-100 km/h acceleration in 1.4 seconds and low-latency digital HD video.';
      } else if (textLower.includes('water') || textLower.includes('sea') || textLower.includes('submerge') || textLower.includes('dive') || textLower.includes('underwater')) {
        matchedProduct = PRODUCTS.find((p) => p.id === 'drone-aqua-amphibian-x');
        reply = 'The Nautilus Sub-Air Amphibious Drone (₹1,99,999) flies at 65 km/h in air and dives up to 50 meters underwater with high-efficiency hydro-thrusters.';
      } else if (textLower.includes('lidar') || textLower.includes('sensor') || textLower.includes('mapping')) {
        matchedProduct = PRODUCTS.find((p) => p.id === 'sensor-omniscient-lidar-v2');
        reply = 'The NexaScan 360° Micro Solid-State LiDAR (₹58,999) weighs only 98g with 150m range, making it ideal for drone spatial mapping.';
      } else {
        matchedProduct = PRODUCTS[0];
        reply = 'Here is one of our most popular DGCA-certified systems for Indian operators:';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: reply,
          product: matchedProduct
        }
      ]);
    }, 500);
  };

  return (
    <>
      <button 
        className="ai-advisor-trigger"
        onClick={() => {
          playSciFiSound('click');
          setIsOpen(!isOpen);
        }}
      >
        <Sparkles size={16} color="#38bdf8" />
        <span>Nexora Advisor</span>
      </button>

      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', background: 'var(--accent-emerald)', borderRadius: '50%' }}></div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: '700', color: '#fff' }}>Nexora India Advisor</span>
            </div>
            <button className="modal-close-btn" style={{ position: 'static', width: '26px', height: '26px' }} onClick={() => setIsOpen(false)}>
              <X size={14} />
            </button>
          </div>

          <div className="ai-chat-body">
            {messages.map((m) => (
              <div key={m.id} className={`chat-bubble ${m.sender}`}>
                <p>{m.text}</p>
                {m.product && (
                  <div style={{ marginTop: '10px', padding: '8px 10px', background: 'var(--bg-card)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={m.product.image} alt={m.product.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: '600', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {m.product.name}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff' }}>
                        ₹{m.product.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <button 
                      className="btn-icon" 
                      style={{ width: '28px', height: '28px' }}
                      onClick={() => {
                        playSciFiSound('click');
                        onInspectProduct(m.product);
                      }}
                      title="View Details"
                    >
                      <Eye size={13} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="ai-quick-prompts">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                className="quick-prompt-chip"
                onClick={() => handleSendMessage(qp.query)}
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form 
            className="ai-chat-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
          >
            <input 
              type="text" 
              className="ai-input" 
              placeholder="Ask about drones, pricing, DGCA..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="btn-icon" style={{ width: '34px', height: '34px', background: '#38bdf8', color: '#0f172a', border: 'none' }}>
              <Send size={13} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
