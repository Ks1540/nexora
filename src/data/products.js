export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Cpu', count: 12 },
  { id: 'drones', name: 'Autonomous Drones', icon: 'Plane', count: 4 },
  { id: 'humanoids', name: 'Bionic Mechs & Quadrupeds', icon: 'Bot', count: 3 },
  { id: 'ai-vision', name: 'AI Vision & LiDAR', icon: 'Eye', count: 2 },
  { id: 'cybernetics', name: 'Cybernetic Gear', icon: 'Sparkles', count: 2 },
  { id: 'diy-robotics', name: 'Developer Kits & Flight Cores', icon: 'Wrench', count: 1 },
];

export const PRODUCTS = [
  {
    id: 'drone-apex-phantom-x',
    name: 'Phantom-X 8K Cinema Drone',
    tagline: 'DGCA Type-Certified 8K HDR Dual-Gimbal Drone with 360° LiDAR Obstacle Avoidance',
    category: 'drones',
    subCategory: 'Cinema & Survey Drones',
    price: 154999,
    originalPrice: 189999,
    rating: 4.9,
    reviewCount: 142,
    inStock: true,
    stockCount: 14,
    badge: 'DGCA Certified',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: '48 Mins',
      maxSpeed: '92 km/h',
      range: '18 km (NavIC + O4 Link)',
      payloadCapacity: '1.2 kg',
      aiCompute: '48 TOPS Neural Engine',
      weight: '820g',
      connectivity: 'Dual-Band 5.8GHz + NavIC GPS',
      ipRating: 'IP54 Monsoon-Ready',
      sensors: '360° Solid-State LiDAR + 6x Optical Flow'
    },
    description: 'Engineered in Bengaluru for extreme cinematography and infrastructure survey missions. DGCA Type-Certified with Digital Sky NPNT compliance, dual optical cameras, and cold/heat resistant battery matrix suited for Indian climates.',
    features: [
      'Full DGCA Type-Certified & Digital Sky NPNT Compliant',
      'True 8K/60fps ProRes RAW video with 14-stop dynamic range',
      'Integrated Indian NavIC + GPS dual satellite positioning',
      'WhisperRotor™ low-noise aerodynamic carbon fiber blades',
      'All-India service & warranty support via Nexora Hub Bengaluru'
    ],
    boxContents: [
      '1x Phantom-X Aircraft Body',
      '1x NeuralPilot RC2 Controller with 2000-nit Bright Screen',
      '3x Intelligent Flight Batteries (5400mAh)',
      '1x Rapid Multi-Bay Charging Hub',
      '4x Low-Noise Carbon Propeller Pairs',
      '1x Hard-Shell Tactical Flight Case'
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Capt. Rajesh Varma',
        role: 'Geospatial Lead, Survey of India Projects',
        rating: 5,
        date: '2 days ago',
        comment: 'DGCA compliance was seamless. NavIC integration gave us centimeter-accurate waypoint surveys in Western Ghats terrain.'
      },
      {
        id: 'rev-2',
        author: 'Ananya Deshmukh',
        role: 'Cinematographer, Mumbai',
        rating: 5,
        date: '1 week ago',
        comment: 'Shot commercial sequences in Ladakh high altitudes. Held rock-steady in high mountain winds.'
      }
    ]
  },
  {
    id: 'mech-titan-quadruped-v3',
    name: 'CyberHound Quadruped Bionic Rover',
    tagline: 'High-Torque All-Terrain Robotic Companion with ROS2 & SLAM',
    category: 'humanoids',
    subCategory: 'Quadruped Autonomous Mechs',
    price: 289999,
    originalPrice: 329999,
    rating: 4.95,
    reviewCount: 89,
    inStock: true,
    stockCount: 6,
    badge: 'Research & Industrial',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: '4.5 Hours Operating',
      maxSpeed: '18 km/h',
      range: '5 km Direct / 5G Mesh',
      payloadCapacity: '15.0 kg',
      aiCompute: '275 TFLOPS NVIDIA Jetson Orin AGX',
      weight: '12.4 kg',
      connectivity: 'Airtel / Jio 5G + Wi-Fi 7',
      ipRating: 'IP67 Submersible',
      sensors: 'Intel RealSense Depth + 3D LiDAR'
    },
    description: 'Titanium-alloy reinforced quadruped robotic unit designed for hazardous industrial exploration, security patrolling, and high-level ROS2 robotics research in Indian universities and defense labs.',
    features: [
      'Dynamic biomimetic inverse kinematics with instant self-balancing',
      'NVIDIA Jetson AGX Orin AI core for real-time 3D semantic SLAM mapping',
      'Modular back-mounting rail with 48V power tap for robotic arms or payloads',
      'Voice-command interface with multilingual Indian conversational models',
      'Zero-latency remote teleoperation via 5G networks'
    ],
    boxContents: [
      '1x CyberHound Bionic Chassis',
      '2x High-Capacity 28.8V Lithium-Titanate Battery Packs',
      '1x Industrial Master Handheld Controller',
      '1x ROS2 Development SDK & Documentation',
      '1x All-Weather Magnetic Docking Pad'
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Dr. Vivek Swaminathan',
        role: 'Robotics Lab Lead, IISc Bengaluru',
        rating: 5,
        date: '3 days ago',
        comment: 'Outstanding torque response. We tested autonomous navigation in rough outdoor quarry terrain without any hiccups.'
      }
    ]
  },
  {
    id: 'drone-spectre-fpv-racer',
    name: 'Spectre-7 Carbon FPV Interceptor',
    tagline: '160 km/h Digital HD Acro Quadcopter with Toray Carbon Exoskeleton',
    category: 'drones',
    subCategory: 'FPV High-Velocity Racers',
    price: 69999,
    originalPrice: 84999,
    rating: 4.85,
    reviewCount: 215,
    inStock: true,
    stockCount: 22,
    badge: '160 km/h Hyper-Speed',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: '18 Mins Acro / 24 Mins Cruise',
      maxSpeed: '162 km/h',
      range: '10 km Digital HD Link',
      payloadCapacity: '450g (Action Cam)',
      aiCompute: 'STM32 H7 Dual-Core Flight Engine',
      weight: '340g (Excl. Battery)',
      connectivity: 'ExpressLRS 2.4GHz + Digital HD Video',
      ipRating: 'Splash Proof Conformal Coated',
      sensors: '6-Axis Gyro + Barometric Altitude Lock'
    },
    description: 'Built for high-speed pursuit, freestyle acrobatics, and national FPV racing competitions across India. Features ultra-durable Toray carbon fiber arms and instantaneous sub-millisecond throttle response.',
    features: [
      'Instant 0-100 km/h in 1.4 seconds with explosive 9:1 thrust-to-weight ratio',
      'Ultra-clear 1080p 120fps low-latency FPV video transmission (sub-18ms)',
      'GPS rescue fail-safe with automated return-to-home',
      'Quick-swap modular arms with solder-free golden connectors',
      'Pre-tuned Betaflight firmware tuned for Indian racing circuits'
    ],
    boxContents: [
      '1x Spectre-7 FPV Quadcopter',
      '1x High-Gain Dual Antenna Array',
      '2x 6S 1800mAh 150C Graphene LiPo Battery Packs',
      '4x Tri-Blade Polycarbonate Propeller Sets',
      '1x Field Toolkit and Spare Hardware Pack'
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Rohan Mehta',
        role: 'Indian Drone Racing League Finalist',
        rating: 5,
        date: '5 days ago',
        comment: 'Pure performance. The digital video link stayed crystal-clear even around heavy concrete structures.'
      }
    ]
  },
  {
    id: 'sensor-omniscient-lidar-v2',
    name: 'NexaScan 360° Micro Solid-State LiDAR',
    tagline: 'Ultra-Compact 150m Range Spatial Mapping Scanner for Autonomous Drones & Mobile Robots',
    category: 'ai-vision',
    subCategory: 'Sensors & Perception',
    price: 58999,
    originalPrice: 69999,
    rating: 4.9,
    reviewCount: 64,
    inStock: true,
    stockCount: 18,
    badge: 'Precision LiDAR',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: 'N/A (5W Low Draw)',
      maxSpeed: 'N/A',
      range: '150m Detection Radius',
      payloadCapacity: 'N/A',
      aiCompute: 'Onboard DSP Point-Cloud Filter',
      weight: '98g Ultra-Light',
      connectivity: 'Ethernet / UART / USB-C High-Speed',
      ipRating: 'IP67 Waterproof Housing',
      sensors: '905nm Eye-Safe Laser Scanner (240k pts/sec)'
    },
    description: 'Transform any drone or mobile robot into an autonomous spatial mapper. NexaScan delivers 240,000 laser points per second in complete darkness or direct tropical sunlight, generating high-density point clouds.',
    features: [
      'Weighs only 98 grams — mountable on small quadcopters without sacrificing flight endurance',
      'Full 360° horizontal FoV x 70° vertical scanning cone',
      'Direct integration with ROS, ROS2, PX4, and ArduPilot autopilot systems',
      'Immune to ambient infrared interference up to 100,000 Lux sunlight',
      'Built-in IMU and timestamp synchronization for real-time SLAM'
    ],
    boxContents: [
      '1x NexaScan Micro LiDAR Sensor',
      '1x Multi-Interface Cable Harness',
      '1x Vibration Dampening Carbon Mount Plate',
      '1x Python / C++ SDK & ROS2 PointCloud Driver'
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Kavita Rao',
        role: 'Autonomous Systems Engineer, Hyderabad',
        rating: 5,
        date: '1 week ago',
        comment: 'Under 100 grams and generates cleaner point clouds than sensors 4x the cost. Flawless ROS2 node.'
      }
    ]
  },
  {
    id: 'cyber-neural-bionic-hand-x',
    name: 'AeroGrip Cybernetic Bionic Hand',
    tagline: '16-Degree-of-Freedom Myoelectric Prosthetic & Robotics Manipulator',
    category: 'cybernetics',
    subCategory: 'Prosthetics & Wearable Bionics',
    price: 239999,
    originalPrice: 279999,
    rating: 4.92,
    reviewCount: 77,
    inStock: true,
    stockCount: 8,
    badge: 'Bionic Precision',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: '16 Hours Continuous Battery',
      maxSpeed: 'Grip close in 0.28s',
      range: 'Bluetooth 5.3 Low Latency',
      payloadCapacity: '25 kg Max Static Lift',
      aiCompute: 'Edge AI EMG Pattern Classifier',
      weight: '490g (Titanium-Polymer)',
      connectivity: 'Bluetooth 5.3 / USB-C CANbus',
      ipRating: 'IP65 Dust & Water Resistant',
      sensors: '8-Channel HD EMG Sensors + Tactile Fingertips'
    },
    description: 'An advanced multi-articulating bionic hand engineered for myoelectric prosthetics and precision robotic arm manipulation. Features individual fingertip pressure sensors and adaptive neural grip algorithms.',
    features: [
      '16 individually controlled micro-actuators with titanium tendon linkages',
      'Deep learning EMG classifier recognizes user intent in under 15 milliseconds',
      'Haptic feedback module alerts user of fragile item contact pressure',
      'Compliant carbon-reinforced fingertips for handling delicate objects or heavy tools',
      'Open API for Indian healthcare researchers and robotics labs'
    ],
    boxContents: [
      '1x AeroGrip Bionic Hand (Right or Left Spec)',
      '1x 8-Channel Wireless EMG Sensor Armband',
      '2x Quick-Release Rechargeable Battery Sleeves',
      '1x Calibration App & Research SDK',
      '1x Protective Glove Shell'
    ],
    reviews: [
      {
        id: 'rev-6',
        author: 'Dr. Arvind Sharma',
        role: 'Biomechatronics Specialist, AIIMS New Delhi',
        rating: 5,
        date: '4 days ago',
        comment: 'Incredible sensitivity. Able to grasp delicate surgical tools with absolute precision.'
      }
    ]
  },
  {
    id: 'mech-unitree-humanoid-h1',
    name: 'Prometheus-1 Bipedal Humanoid Research Bot',
    tagline: 'Full-Size 1.7m AI Humanoid Robot with High-Torque Joint Actuation',
    category: 'humanoids',
    subCategory: 'Bipedal Humanoid Platforms',
    price: 1249999,
    originalPrice: 1399999,
    rating: 5.0,
    reviewCount: 31,
    inStock: true,
    stockCount: 2,
    badge: 'Enterprise Research',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: '2.5 Hours Autonomous Walking',
      maxSpeed: '11.5 km/h Dynamic Gait',
      range: '5G Cloud Telemetry',
      payloadCapacity: '30 kg Arm Payload',
      aiCompute: 'Dual NVIDIA Thor 2000 TFLOPS Superchip',
      weight: '47 kg',
      connectivity: '5G NR / Wi-Fi 7 / Optical Fiber',
      ipRating: 'IP55 Industrial Grade',
      sensors: 'Dual 3D LiDAR + 4x Depth Cameras'
    },
    description: 'The pinnacle of bipedal humanoid robotics. Prometheus-1 combines immense joint torque with end-to-end foundation model robotics for dexterous manipulation, human-like locomotion, and complex research.',
    features: [
      '360 N.m peak torque knee and hip actuators with integrated cycloidal drives',
      'End-to-End Vision-Language-Action model for natural voice command execution',
      'Dynamic balance stabilization against push disturbances up to 250 Newtons',
      'Full ROS2 Humble & Isaac Sim digital twin simulation included',
      'Hot-swappable 1.8kWh battery architecture'
    ],
    boxContents: [
      '1x Prometheus-1 Humanoid Robot',
      '1x Heavy-Duty Gantry Support & Safety Harness Stand',
      '2x 1800Wh Smart Lithium-Titanate Battery Modules',
      '1x Industrial Supercharger',
      '1x Master Teleoperation Rig & Enterprise SDK'
    ],
    reviews: [
      {
        id: 'rev-7',
        author: 'Prof. Ramesh Natarajan',
        role: 'Robotics Dept, IIT Madras',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Unprecedented dynamic balance. Traverses uneven outdoor gravel and steps with organic fluid motion.'
      }
    ]
  },
  {
    id: 'ai-orin-swarm-kit',
    name: 'NexaSwarm Autonomous Edge AI Dev Kit',
    tagline: 'Multi-Agent Drone & Rover Swarm AI Brain with Ultra-Low Latency Mesh',
    category: 'diy-robotics',
    subCategory: 'Edge Compute & Swarm AI',
    price: 44999,
    originalPrice: 52999,
    rating: 4.88,
    reviewCount: 112,
    inStock: true,
    stockCount: 30,
    badge: 'Make in India Ready',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: 'N/A (Board Level)',
      maxSpeed: 'N/A',
      range: '3 km Swarm Ad-Hoc Mesh',
      payloadCapacity: 'N/A',
      aiCompute: '100 TOPS AI Compute',
      weight: '62g',
      connectivity: 'Dual UWB Mesh + Wi-Fi 6E + CANbus',
      ipRating: 'Conformal Coated Circuitry',
      sensors: 'Triple Redundant IMU + Baro'
    },
    description: 'Design and deploy collaborative swarm robotics effortlessly. Features built-in peer-to-peer UWB localization, ad-hoc mesh networking, and hardware-accelerated ROS2 nodes for autonomous drone swarm shows and agriculture inspection.',
    features: [
      'Pre-loaded with decentralized consensus algorithms and collision-free flocking math',
      'Direct plug-and-play with Pixhawk, ArduPilot, and Betaflight flight stacks',
      'Sub-millisecond inter-agent communication for tightly coupled formation flight',
      'Ultra-compact form factor (50x50mm) mountable on any drone or mini rover',
      'Comprehensive Python/C++ swarm orchestration simulator included'
    ],
    boxContents: [
      '1x NexaSwarm AI Core Board',
      '2x High-Gain UWB Omnidirectional Antennas',
      '1x Aluminum CNC Heat Sink with Micro Fan',
      '1x Complete JST-GH Wiring Harness Set'
    ],
    reviews: [
      {
        id: 'rev-8',
        author: 'Sunil Chawla',
        role: 'Drone Tech Innovator, Pune',
        rating: 5,
        date: '1 week ago',
        comment: 'Configured a 10-drone synchronized agricultural survey swarm within an afternoon. UWB tracking is spot on.'
      }
    ]
  },
  {
    id: 'cyber-neural-hud-goggles',
    name: 'NexaVis Neuro-HUD FPV Goggles 8K',
    tagline: 'Micro-OLED AR & FPV Headset with Gaze-Tracked Drone Gimbal Control',
    category: 'cybernetics',
    subCategory: 'Vision Gear & AR Headsets',
    price: 98999,
    originalPrice: 114999,
    rating: 4.96,
    reviewCount: 168,
    inStock: true,
    stockCount: 11,
    badge: 'Neural Gaze Control',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: '4.5 Hours Headset Battery',
      maxSpeed: 'N/A',
      range: '20 km HD Digital Video Link',
      payloadCapacity: 'N/A',
      aiCompute: 'Dual Gaze-Tracking Neural Coprocessors',
      weight: '240g Ultra-Balanced',
      connectivity: 'Wi-Fi 7 / 60GHz Millimeter Wave',
      ipRating: 'Sweat-Resistant Breathable Foam',
      sensors: '240Hz Eye Trackers + 9-DOF Head Tracker'
    },
    description: 'Immerse yourself directly into the cockpit of your drone or robot. With dual 4K Micro-OLED displays, 100° field of view, and gaze-steered camera gimbal slaving, your drone camera mirrors your natural line of sight.',
    features: [
      'Dual 4K Sony Micro-OLED displays with 10,000:1 contrast ratio & 120Hz refresh',
      'Zero-latency eye-tracking controls drone camera orientation seamlessly',
      'Augmented reality flight telemetry overlay (altitude, battery, GPS grid, thermal heatmaps)',
      'Built-in DVR records uncompressed 4K footage directly to microSD',
      'Interchangeable prescription diopter lenses'
    ],
    boxContents: [
      '1x NexaVis 8K Neuro-HUD Goggles',
      '4x High-Gain Linear Omni Antennas',
      '1x 5000mAh Magnetic Power Pack',
      '1x Memory Foam Eye Cushion Set',
      '1x Hard Travel Case'
    ],
    reviews: [
      {
        id: 'rev-9',
        author: 'Daria Lin',
        role: 'Disaster Recon Pilot, NDRF Support',
        rating: 5,
        date: '3 days ago',
        comment: 'Looking into a dark flood zone and having the thermal drone gimbal follow my eye direction in real time is incredible.'
      }
    ]
  },
  {
    id: 'ai-thermal-matrix-cam',
    name: 'ThermoHawk AI Dual Thermal & Night Vision Gimbal',
    tagline: 'Long-Wave Infrared 640x512 + 4K Optical 30x Zoom Payload',
    category: 'ai-vision',
    subCategory: 'Thermal & Night Vision',
    price: 189999,
    originalPrice: 219999,
    rating: 4.9,
    reviewCount: 53,
    inStock: true,
    stockCount: 7,
    badge: 'Thermal AI',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: 'N/A (12W Low Draw)',
      maxSpeed: '3-Axis Stabilization up to 120 km/h',
      range: '2.5 km Human Detection / 6 km Vehicle Detection',
      payloadCapacity: 'N/A',
      aiCompute: 'Integrated Thermal Object Classifier',
      weight: '380g',
      connectivity: 'Ethernet IP / HDMI / MicroSD / CAN',
      ipRating: 'IP66 Weatherproof',
      sensors: 'Uncooled VOx Microbolometer + 1/1.8" CMOS 4K'
    },
    description: 'The ultimate reconnaissance and industrial inspection sensor gimbal. Combines radiometric thermal imaging with 30x optical zoom and real-time AI human/vehicle bounding box tracking for solar farms and powerlines across India.',
    features: [
      'Radiometric thermal sensor with accurate temperature measurement (-20°C to 550°C)',
      '30x Optical Zoom with continuous auto-focus and electronic haze penetration',
      'Onboard neural inference locks onto heat signatures through smoke, fog, and total darkness',
      '3-Axis brushless gimbal stabilization holds image rock-steady in high winds',
      'Quick-release mount fits DGCA-approved multicopters'
    ],
    boxContents: [
      '1x ThermoHawk Dual-Sensor Gimbal Camera',
      '1x Quick-Release Drone Mounting Adapter',
      '1x Damping Plate with Silicon Isolators',
      '1x Calibration Certificate & Software License'
    ],
    reviews: [
      {
        id: 'rev-10',
        author: 'Vikramaditya Rao',
        role: 'Solar Infrastructure Inspector, Gujarat',
        rating: 5,
        date: '6 days ago',
        comment: 'Spotted micro-cracks and hot-spots in 500MW solar installations in hours. Indispensable tool.'
      }
    ]
  },
  {
    id: 'drone-aqua-amphibian-x',
    name: 'Nautilus Sub-Air Amphibious Drone',
    tagline: 'Dual-Domain Drone that Flies in Air and Submerges 50m Underwater',
    category: 'drones',
    subCategory: 'Amphibious Dual-Domain',
    price: 199999,
    originalPrice: 239999,
    rating: 4.89,
    reviewCount: 46,
    inStock: true,
    stockCount: 5,
    badge: 'Air & Water Hybrid',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: '32 Mins Flight / 1.5 Hours Underwater',
      maxSpeed: '65 km/h (Air) / 6 Knots (Water)',
      range: '8 km Air / 100m Acoustic Sonar Link',
      payloadCapacity: '800g',
      aiCompute: '32 TOPS Hydrodynamic AI',
      weight: '1.45 kg',
      connectivity: 'Dual-Band RF + Acoustic Transceiver',
      ipRating: 'IP68 50m Pressure Proof',
      sensors: 'Sonar Bathymetry + 4K Hydro Camera'
    },
    description: 'Break boundaries across sky and water. The Nautilus seamlessly transitions from aerial flight to diving underwater down to 50 meters depth, equipped with dual-purpose hydrodynamic brushless thrusters for coastal and marine surveys in India.',
    features: [
      'Variable pitch underwater thrusters with automatic water purge cycle',
      'Underwater sonar mapping and water quality chemical analysis sensors',
      '4K 60fps camera with dual 3000-lumen underwater LED spotlight array',
      'Automatic buoyancy stabilization and submarine dive ballast system',
      'Emergency floating beacon transmitter with GPS telemetry'
    ],
    boxContents: [
      '1x Nautilus Sub-Air Amphibious Drone',
      '1x Waterproof Surface Relay Floating Buoy',
      '2x High-Density Submersible Power Packs',
      '1x All-Weather Remote Controller',
      '1x Waterproof Storage Case'
    ],
    reviews: [
      {
        id: 'rev-11',
        author: 'Dr. Meenakshi Sundaram',
        role: 'Marine Biologist, NIO Goa',
        rating: 5,
        date: '1 week ago',
        comment: 'Flew along Goa coastlines, dove straight into the water to inspect coral beds, then surfaced and flew back.'
      }
    ]
  },
  {
    id: 'mech-bionic-tactile-arm',
    name: 'TitanReach 6-DOF Industrial Robotic Arm',
    tagline: 'Carbon Fiber Lightweight Robotic Manipulator with 0.05mm Precision',
    category: 'humanoids',
    subCategory: 'Robotic Manipulators',
    price: 349999,
    originalPrice: 399999,
    rating: 4.94,
    reviewCount: 38,
    inStock: true,
    stockCount: 4,
    badge: 'Industrial Automation',
    image: 'https://images.unsplash.com/photo-1617839625591-e5a789593130?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617839625591-e5a789593130?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: 'Continuous 24/7 Duty',
      maxSpeed: '180°/s Joint Velocity',
      range: '850mm Reach Radius',
      payloadCapacity: '5.0 kg Full Extension',
      aiCompute: 'Embedded Real-Time Motion Controller',
      weight: '6.8 kg (Carbon Fiber)',
      connectivity: 'EtherCAT / CANopen / ROS2 / Python API',
      ipRating: 'IP65 Dust & Splash Proof',
      sensors: 'Harmonic Drive Absolute Optical Encoders'
    },
    description: 'Engineered for smart factory automation, research labs, and mobile AGVs in India. Crafted with carbon fiber links and harmonic drive gearing to achieve sub-millimeter repeat accuracy with drag-to-teach programming.',
    features: [
      'Drag-and-teach mode: manually move the arm to teach complex trajectories in seconds',
      'Seamless mounting interface for quadruped mechs, AGVs, or stationary lab benches',
      'Integrated torque sensors in all 6 joints for collaborative safety',
      'Interchangeable end-effectors: electric gripper, vacuum suction, or micro-welder',
      'Zero-backlash harmonic gearboxes ensure 0.05mm repeatability'
    ],
    boxContents: [
      '1x TitanReach 6-DOF Robotic Arm',
      '1x 2-Finger Adaptive Electric Parallel Gripper',
      '1x Compact Desktop Motion Controller',
      '1x Emergency Stop Button Unit',
      '1x Full ROS2 MoveIt2 Integration Package'
    ],
    reviews: [
      {
        id: 'rev-12',
        author: 'Siddharth Patel',
        role: 'Automation Engineer, Pune',
        rating: 5,
        date: '5 days ago',
        comment: 'Mounted it directly on our CyberHound rover. Collaborative safety and drag-to-teach interface saved weeks of development.'
      }
    ]
  },
  {
    id: 'diy-nexora-quantum-fc',
    name: 'NexaCore Dual-Processor H7 Flight Controller',
    tagline: 'Triple-Redundant IMU with Real-Time AI Auto-Tuning & 8S DShot Power',
    category: 'diy-robotics',
    subCategory: 'Flight Controllers & ESCs',
    price: 14999,
    originalPrice: 17999,
    rating: 4.97,
    reviewCount: 310,
    inStock: true,
    stockCount: 45,
    badge: 'Builder Choice',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      flightTime: 'N/A (Flight Controller)',
      maxSpeed: 'N/A',
      range: 'Telemetry Ready',
      payloadCapacity: 'N/A',
      aiCompute: '480MHz STM32H7 Dual Core',
      weight: '14g',
      connectivity: '8x UARTs, 2x CANbus, I2C, SPI, OSD',
      ipRating: 'Conformal Coated',
      sensors: 'Triple ICM-42688-P IMUs + DPS310 Barometer'
    },
    description: 'The golden standard brain for DIY heavy-lift delivery drones and racing quads built in India. Triple isolated IMUs prevent vibration desync, while high-current power rails effortlessly support up to 8S LiPo inputs.',
    features: [
      'Triple-redundant vibration-isolated gyro sensors with voting algorithm',
      'Direct plug-and-play ports for Digital HD and analog FPV video transmitters',
      'Supports Betaflight, INAV, and PX4 Autopilot with one-click firmware switching',
      'Integrated blackbox logger with 512MB flash memory',
      'Heavy-duty 10V/3A and 5V/3A BEC outputs'
    ],
    boxContents: [
      '1x NexaCore H7 Flight Controller Board',
      '4x Silicone Anti-Vibration Grommets',
      '1x Full Wiring Harness Cable Kit',
      '1x Low-ESR 35V 1000uF Electrolytic Capacitor'
    ],
    reviews: [
      {
        id: 'rev-13',
        author: 'Abhinav Sen',
        role: 'Custom Drone Fabricator, Delhi NCR',
        rating: 5,
        date: '3 days ago',
        comment: 'Cleanest gyro traces on a 7-inch quad. Instant locked-in flight characteristics.'
      }
    ]
  }
];
