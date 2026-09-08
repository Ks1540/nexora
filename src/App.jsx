import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductGrid } from './components/ProductGrid';
import { DroneConfigurator } from './components/DroneConfigurator';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CompareModal } from './components/CompareModal';
import { CheckoutModal } from './components/CheckoutModal';
import { AboutUsModal } from './components/AboutUsModal';
import { AiAdvisorChat } from './components/AiAdvisorChat';
import { Footer } from './components/Footer';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { playSciFiSound } from './utils/audio';

import './styles/main.css';
import './styles/components.css';
import './styles/configurator.css';

export function App() {
  // Category & Filter States
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(1500000);
  const [sortBy, setSortBy] = useState('featured');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Cart & Wishlist & Compare States
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [compareProductIds, setCompareProductIds] = useState([]);
  const [warrantyEnabled, setWarrantyEnabled] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState('');

  // Modals & Drawers States
  const [inspectedProduct, setInspectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  // Toast Notification Queue
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // Category counts computation
  const categoryCounts = useMemo(() => {
    const counts = { all: PRODUCTS.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = PRODUCTS.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }

      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesTagline = product.tagline.toLowerCase().includes(query);
        const matchesCategory = product.subCategory.toLowerCase().includes(query);
        const matchesAi = product.specs.aiCompute.toLowerCase().includes(query);
        if (!matchesName && !matchesTagline && !matchesCategory && !matchesAi) {
          return false;
        }
      }

      if (product.price > maxPrice) {
        return false;
      }

      if (inStockOnly && (!product.inStock || product.stockCount <= 0)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [activeCategory, searchTerm, maxPrice, sortBy, inStockOnly]);

  // Cart Handlers
  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
    showToast(`Added to cart: ${product.name} (x${quantity})`, 'success');
  };

  const handleUpdateCartQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(productId);
    } else {
      setCartItems((prev) => 
        prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveCartItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product) => {
    const exists = wishlistItems.some((item) => item.id === product.id);
    if (exists) {
      setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed ${product.name} from Wishlist`, 'info');
    } else {
      setWishlistItems((prev) => [...prev, product]);
      showToast(`Saved ${product.name} to Wishlist`, 'success');
    }
  };

  // Compare Handlers
  const handleToggleCompare = (product) => {
    if (compareProductIds.includes(product.id)) {
      setCompareProductIds((prev) => prev.filter((id) => id !== product.id));
      showToast(`Removed from Compare`, 'info');
    } else {
      if (compareProductIds.length >= 4) {
        showToast('Maximum 4 hardware units can be compared simultaneously', 'info');
        return;
      }
      setCompareProductIds((prev) => [...prev, product.id]);
      showToast(`Added ${product.name} to Compare`, 'success');
    }
  };

  const handleRemoveCompareId = (id) => {
    setCompareProductIds((prev) => prev.filter((item) => item !== id));
  };

  const comparedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => compareProductIds.includes(p.id));
  }, [compareProductIds]);

  // Navigation Handlers
  const handleExploreCatalog = () => {
    const el = document.getElementById('arsenal-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenConfigurator = () => {
    const el = document.getElementById('build-lab');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setActiveCategory('all');
    setSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setMaxPrice(1500000);
    setSortBy('featured');
    setInStockOnly(false);
  };

  const handleProceedCheckout = (total) => {
    setCheckoutTotal(total);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (trackingId) => {
    setCartItems([]);
    showToast(`Order Confirmed! Consignment Docket: ${trackingId}`, 'success');
  };

  return (
    <div className="app-root">
      {/* Modern Navbar with Indian Context */}
      <Navbar 
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlistItems.length}
        compareCount={compareProductIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onOpenConfigurator={handleOpenConfigurator}
        onNavigateHome={handleNavigateHome}
      />

      {/* Hero Section */}
      <Hero 
        onExploreCatalog={handleExploreCatalog}
        onOpenConfigurator={handleOpenConfigurator}
        onInspectProduct={setInspectedProduct}
        featuredProduct={PRODUCTS[0]}
      />

      {/* Main Catalog Section */}
      <main className="container">
        <CategoryFilter 
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={categoryCounts}
        />

        <ProductGrid 
          products={filteredProducts}
          onInspectProduct={setInspectedProduct}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          onToggleCompare={handleToggleCompare}
          wishlistIds={wishlistItems.map((i) => i.id)}
          compareIds={compareProductIds}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          sortBy={sortBy}
          onSortChange={setSortBy}
          inStockOnly={inStockOnly}
          onInStockToggle={setInStockOnly}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* Custom Drone Studio Configurator */}
      <DroneConfigurator 
        onAddToCart={handleAddToCart}
        onShowToast={showToast}
      />

      {/* Footer */}
      <Footer 
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          handleExploreCatalog();
        }}
        onOpenAbout={() => setIsAboutOpen(true)}
        onShowToast={showToast}
      />

      {/* Product Detail Modal */}
      {inspectedProduct && (
        <ProductDetailModal 
          product={inspectedProduct}
          onClose={() => setInspectedProduct(null)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          onToggleCompare={handleToggleCompare}
          isWishlisted={wishlistItems.some((i) => i.id === inspectedProduct.id)}
          isCompared={compareProductIds.includes(inspectedProduct.id)}
        />
      )}

      {/* About Us Modal */}
      <AboutUsModal 
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onProceedCheckout={handleProceedCheckout}
        warrantyEnabled={warrantyEnabled}
        onToggleWarranty={setWarrantyEnabled}
        appliedPromo={appliedPromo}
        onApplyPromo={setAppliedPromo}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer 
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onAddToCart={handleAddToCart}
        onRemoveWishlist={handleToggleWishlist}
      />

      {/* Compare Modal */}
      {isCompareOpen && (
        <CompareModal 
          comparedProducts={comparedProducts}
          onClose={() => setIsCompareOpen(false)}
          onAddToCart={handleAddToCart}
          onRemoveFromCompare={handleRemoveCompareId}
        />
      )}

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        finalTotal={checkoutTotal}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* AI Robotics Advisor Chat Widget */}
      <AiAdvisorChat 
        onInspectProduct={setInspectedProduct}
        onAddToCart={handleAddToCart}
      />

      {/* Toast Notification Container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div 
            key={toast.id} 
            className={`toast ${toast.type === 'success' ? 'toast-success' : 'toast-info'}`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 size={18} color="#10b981" />
            ) : (
              <ShieldCheck size={18} color="#38bdf8" />
            )}
            <span style={{ fontSize: '0.88rem', fontWeight: '600' }}>
              {toast.message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
