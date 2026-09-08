# 🛸 NEXORA — Autonomous Robotics & Drone E-Commerce Platform

<div align="center">

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://nexora-zeta-liard.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Ks1540%2Fnexora-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ks1540/nexora)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Make in India](https://img.shields.io/badge/Make_in_India-DGCA_Certified-FF9933?style=for-the-badge)](https://nexora-zeta-liard.vercel.app)

<br />

**🚀 [Live Production Demo: nexora-zeta-liard.vercel.app](https://nexora-zeta-liard.vercel.app)**

</div>

---

## 📖 Overview

**NEXORA** is a next-generation shopping and custom fabrication platform engineered for **autonomous drones, bionic quadruped mechs, AI vision LiDAR arrays, and cybernetic hardware**. 

Built with an ultra-clean **luxury hardware design system** (inspired by DJI, Apple Pro, Skydio, and Boston Dynamics) and localized specifically for the **Indian robotics ecosystem** with **Indian Rupees (`₹`) pricing**, **DGCA Drone Rules 2021 Type-Certification**, **NavIC satellite positioning**, and **UPI payments (Google Pay, PhonePe, Paytm)**.

---

## ✨ Key Features

### 🇮🇳 1. Indian Robotics & Rupee (`₹`) Localization
- **Complete INR Catalog**: All products and custom components priced in **Indian Rupees (`₹`)** with Indian numbering format (e.g., `₹1,54,999`, `₹2,89,999`, `₹69,999`).
- **DGCA Type-Certified Series**: Designed in compliance with **DGCA Drone Rules 2021** and Digital Sky NPNT authorization.
- **NavIC Satellite Positioning**: Native Indian satellite constellation support paired with multi-band GPS.
- **Pan-India Delivery**: Free express courier delivery on orders above ₹10,000 across 19,000+ Indian pincodes.
- **Indian Promo Engine**: Discount codes like `INDIA10` (10% off) and `NEXORA20` (20% off).

### 🛸 2. Expansive Autonomous Hardware Catalog
- **8K LiDAR Cinema Drones**: 48-min flight time, dual Hasselblad optical sensors, and 360° collision avoidance.
- **Titanium Quadruped Rovers**: All-terrain robotic companion powered by **NVIDIA Jetson AGX Orin (275 TFLOPS)** with native ROS2 Humble support.
- **160 km/h FPV Racers**: Acrobatic carbon-fiber quadcopters with digital HD low-latency video.
- **Amphibious Sub-Air Drones**: Dual-domain drones that fly in air and submerge down to 50m underwater.
- **Spatial Perception Sensors**: 360° Solid-State Micro-LiDARs (98g) & Radiometric FLIR Thermal AI Gimbals.
- **16-DOF Bionic Prosthetics**: Myoelectric cybernetic manipulators with tactile pressure feedback.

### ⚙️ 3. Custom Drone Studio (Interactive Configurator)
- Step-by-step modular customizer:
  1. **Airframe & Chassis** (Toray 12K Carbon, Titanium Hexacore, Sub-250g Nano)
  2. **Propulsion & Motors** (High-Efficiency Brushless, Ducted Turbines, Vector Steppers)
  3. **Vision & LiDAR Payloads** (8K Cinema Gimbal, Micro-LiDAR, FLIR Thermal)
  4. **AI Flight Brain** (NVIDIA Orin, Dual Cortex MCU, Neural Hybrid)
  5. **Battery Matrix** (Solid-State High-Density, Long-Endurance Graphene)
- **Real-Time Telemetry Calculations**: Dynamically computes **all-up mass**, **flight endurance**, **agility score**, and **total price in ₹**.
- Direct **Add Custom Build to Cart** integration.

### 🔬 4. 360° Hardware Spec Inspector Modal
- 360° rotation preview controls with angle telemetry.
- Tabbed hardware breakdown: *Specifications, Key Capabilities, What's in the Box, Verified Reviews*.
- Quantity stepper, direct add to cart, and wishlist bookmarking.

### 📊 5. Side-by-Side Spec Comparison Matrix
- Compare up to 4 models simultaneously across flight endurance, velocity, sensor arrays, AI compute power, and payload capacity.

### 🛍️ 6. Seamless Slideout Cart & Indian Checkout
- Slide-out cart drawer with **Nexora Care+ (+2 Yrs Indian Warranty)** crash replacement coverage.
- **Indian Checkout Protocol**:
  - Full Name, +91 Mobile Number, and optional **GSTIN** for enterprise tax credit.
  - Pan-India address fields (Street, City, State, 6-digit Pincode).
  - **Payment Options**: **UPI (Google Pay, PhonePe, Paytm, BHIM)**, Cards (RuPay, Visa, MasterCard), and NetBanking.
  - **Order Confirmation**: Generates consignment tracking docket (e.g. `NX-IN-8942-BLR`).

### 🏢 7. Dedicated "About Us" Page
- Accessible via the **About Us** button in the navbar and footer.
- Showcases Nexora's innovation facilities across India:
  - **Bengaluru Hub**: Electronic City Phase 1 (Primary R&D & Assembly Lab)
  - **Hyderabad Range**: HITEC City (Autonomous Outdoor Flight Testing)
  - **Pune Facility**: Hinjawadi Tech Park (Aerodynamics & Composite Fabrication)

### 🧠 8. Nexora India AI Product Advisor
- Interactive chatbot consultant offering contextual hardware recommendations based on use cases (DGCA Cinema, University Research, Agriculture, FPV Racing).

---

## 🛠️ Tech Stack & Architecture

```
nexora/
├── public/
│   └── favicon.svg             # Brand Favicon
├── src/
│   ├── components/
│   │   ├── AboutUsModal.jsx    # Indian R&D facilities & DGCA story
│   │   ├── AiAdvisorChat.jsx   # Interactive AI Product Advisor
│   │   ├── CartDrawer.jsx      # Shopping cart with warranty & coupon engine
│   │   ├── CategoryFilter.jsx  # Pill filter tabs with product counts
│   │   ├── CheckoutModal.jsx   # Indian checkout with UPI / Cards / NetBanking
│   │   ├── CompareModal.jsx    # Side-by-side spec comparison table
│   │   ├── DroneConfigurator.jsx # Custom drone builder studio
│   │   ├── Footer.jsx          # Indian HQ address, compliance & links
│   │   ├── Hero.jsx            # Modern hero with live telemetry metrics
│   │   ├── Navbar.jsx          # Header with search, wishlist, cart & sound toggle
│   │   ├── ProductCard.jsx     # Minimalist product card with specs & ratings
│   │   ├── ProductDetailModal.jsx # 360° inspector & hardware specs breakdown
│   │   ├── ProductGrid.jsx     # Catalog grid with price slider & sorting
│   │   └── WishlistDrawer.jsx  # Saved wishlist slideout drawer
│   ├── data/
│   │   ├── configuratorOptions.js # Component options for custom drone studio
│   │   └── products.js         # Comprehensive Indian product catalog in INR
│   ├── styles/
│   │   ├── variables.css       # Obsidian & slate design tokens
│   │   ├── main.css            # Base layouts, resets & typography
│   │   ├── components.css      # Component styling (cards, modals, drawers)
│   │   └── configurator.css    # Customizer studio layout
│   ├── utils/
│   │   └── audio.js            # Synthesized Web Audio API FX
│   ├── App.jsx                 # Master application state & modal routing
│   └── main.jsx                # Application entry point
├── vercel.json                 # Vercel SPA routing configuration
├── index.html                  # Google Fonts (Space Grotesk, Plus Jakarta Sans)
└── package.json
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ks1540/nexora.git
   cd nexora
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🚀 Deployment on Vercel

This repository is configured for zero-config Vercel deployment with `vercel.json` SPA rewrites:

```bash
# Deploy using Vercel CLI
npm install -g vercel
vercel --prod
```

Or connect the repository on the [Vercel Dashboard](https://vercel.com/new).

---

## 📄 License

MIT License © 2026 Nexora Autonomous Systems India Pvt. Ltd.  
All Rights Reserved. Made with pride in India 🇮🇳
