import React from 'react';
import { Plane, Bot, Eye, Sparkles, Wrench, Layers } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { playSciFiSound } from '../utils/audio';

const ICON_MAP = {
  Cpu: Layers,
  Plane: Plane,
  Bot: Bot,
  Eye: Eye,
  Sparkles: Sparkles,
  Wrench: Wrench
};

export const CategoryFilter = ({ activeCategory, onSelectCategory, counts }) => {
  return (
    <div className="categories-bar">
      {CATEGORIES.map((cat) => {
        const IconComponent = ICON_MAP[cat.icon] || Layers;
        const isActive = activeCategory === cat.id;
        const count = counts[cat.id] ?? cat.count;

        return (
          <button
            key={cat.id}
            className={`category-tab ${isActive ? 'active' : ''}`}
            onClick={() => {
              playSciFiSound('click');
              onSelectCategory(cat.id);
            }}
          >
            <IconComponent size={15} />
            <span>{cat.name}</span>
            <span className="cat-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
};
