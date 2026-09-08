export const CONFIGURATOR_STEPS = [
  { id: 'chassis', name: '1. Airframe & Chassis', subtitle: 'Select structural material and frame architecture' },
  { id: 'propulsion', name: '2. Propulsion & Motors', subtitle: 'Select motor power, torque and propeller dynamics' },
  { id: 'sensors', name: '3. Vision & LiDAR Payload', subtitle: 'Select camera gimbals, LiDAR and optical sensors' },
  { id: 'compute', name: '4. AI Flight Computer', subtitle: 'Select neural edge processor & autonomy stack' },
  { id: 'power', name: '5. Battery Matrix', subtitle: 'Select high-density energy cells and telemetry BMS' }
];

export const CONFIG_OPTIONS = {
  chassis: [
    {
      id: 'frame-carbon-x4',
      name: 'Toray 12K Aero Carbon Quad X4',
      type: 'Quadcopter Frame',
      price: 24999,
      weight: 380,
      durability: 'Extreme Carbon (850MPa)',
      flightTimeImpact: 0,
      description: 'Ultra-rigid carbon weave frame designed for high-speed stability and minimal aerodynamic drag.',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'frame-titanium-hex6',
      name: 'Titanium-Aero Heavy Hexacore X6',
      type: 'Hexacopter Heavy Frame',
      price: 49999,
      weight: 720,
      durability: 'Titanium Grade 5 (1100MPa)',
      flightTimeImpact: -4,
      description: 'Reinforced 6-arm chassis engineered for heavy payload cinema gimbals and industrial sensors.',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'frame-stealth-micro',
      name: 'Ghost-Scale Sub-250g Nano Frame',
      type: 'Micro Carbon Unibody',
      price: 14999,
      weight: 120,
      durability: 'Impact Poly-Carbon Hybrid',
      flightTimeImpact: +6,
      description: 'Featherlight sub-250g DGCA Nano-category compliance frame for silent flight.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=400&q=80'
    }
  ],
  propulsion: [
    {
      id: 'prop-cyclone-brushless',
      name: 'Cyclone-X 2808 1500KV Brushless Stators',
      type: 'High-Efficiency Propulsion',
      price: 19999,
      weight: 240,
      thrust: '7.8 kg Total Thrust',
      flightTimeImpact: +2,
      topSpeed: '110 km/h',
      description: 'Japanese NMB ball bearings with curved neodymium magnets for 94% electrical efficiency.'
    },
    {
      id: 'prop-ducted-stealth',
      name: 'AeroShield Ducted Low-Noise Turbines',
      type: 'Enclosed Ducted Props',
      price: 26999,
      weight: 310,
      thrust: '6.5 kg Total Thrust',
      flightTimeImpact: -2,
      topSpeed: '85 km/h (Ultra Silent 48dB)',
      description: 'Enclosed shroud prevents blade damage during indoor inspections and reduces acoustic signature.'
    },
    {
      id: 'prop-hyper-vector',
      name: 'HyperDrive 2207 2750KV High-Velocity Motors',
      type: 'Acro / Racing Propulsion',
      price: 29999,
      weight: 220,
      thrust: '9.4 kg Total Thrust (12:1 TWR)',
      flightTimeImpact: -5,
      topSpeed: '175 km/h',
      description: 'Maximum power for instant 0-100 km/h acceleration in 1.2s and razor-sharp racing maneuvers.'
    }
  ],
  sensors: [
    {
      id: 'sens-8k-cinema-gimbal',
      name: 'Apex 8K ProRes 3-Axis Optical Gimbal',
      type: 'Cinema Optical Sensor',
      price: 69999,
      weight: 340,
      features: '8K/60fps RAW, 14-Stop DR, Active Laser AF',
      flightTimeImpact: -3,
      description: 'Full-frame cinema grade sensor with motorized ND filters and AI optical target tracking.'
    },
    {
      id: 'sens-lidar-spatial',
      name: 'Solid-State 360° Micro-LiDAR + Stereo Depth',
      type: 'Autonomous Spatial SLAM',
      price: 58999,
      weight: 160,
      features: '150m Range, 240k Pts/sec, Zero-Light SLAM',
      flightTimeImpact: -1,
      description: 'Autonomous indoor navigation and dynamic 3D obstacle avoidance point-cloud generation.'
    },
    {
      id: 'sens-flir-thermal',
      name: 'Radiometric 640x512 FLIR Thermal + 4K Optical',
      type: 'Dual Thermal & Optical Recon',
      price: 94999,
      weight: 290,
      features: 'Temp Detection -20°C to 500°C, 10x Optical Zoom',
      flightTimeImpact: -2,
      description: 'Solar grid, powerline, and industrial inspection payload.'
    }
  ],
  compute: [
    {
      id: 'core-orin-agx',
      name: 'NVIDIA Jetson Orin Core (100 TOPS)',
      type: 'Edge AI Supercomputer',
      price: 52999,
      weight: 120,
      aiTops: '100 TOPS Deep Neural Engine',
      flightTimeImpact: -2,
      description: 'Runs real-time YOLOv10 object detection, path planning, and autonomous semantic mapping.'
    },
    {
      id: 'core-nexacore-h7',
      name: 'NexaCore Dual STM32H7 Flight Master',
      type: 'Real-Time Deterministic Core',
      price: 18999,
      weight: 35,
      aiTops: 'Real-Time IMU Kalman Filter 32kHz',
      flightTimeImpact: +1,
      description: 'Ultra-low latency flight stabilization with triple redundant gyroscopes and blackbox telemetry.'
    },
    {
      id: 'core-quantum-hybrid',
      name: 'NexaQuantum Hybrid V5 (Dual Core H7 + 40 TOPS NPU)',
      type: 'Unified Flight & Vision Brain',
      price: 38999,
      weight: 75,
      aiTops: '40 TOPS NPU + 480MHz Real-Time MCU',
      flightTimeImpact: 0,
      description: 'Sub-microsecond motor loop control paired with neural obstacle prediction.'
    }
  ],
  power: [
    {
      id: 'bat-solid-state-6s',
      name: 'Solid-State 6S 6500mAh High-Density Battery',
      type: 'Solid-State Lithium Matrix',
      price: 22999,
      weight: 580,
      capacity: '6500mAh (320 Wh/kg)',
      baseFlightTime: 38,
      description: 'Non-flammable solid electrolyte cell with 40% higher energy density than standard LiPo packs.'
    },
    {
      id: 'bat-graphene-longrange',
      name: 'Graphene Ultra-Cell 6S 9200mAh Heavy Duty',
      type: 'Graphene Heavy Endurance',
      price: 34999,
      weight: 890,
      capacity: '9200mAh (Long-Endurance)',
      baseFlightTime: 52,
      description: 'Massive capacity for extreme long-distance survey missions and heavy sensor payloads.'
    },
    {
      id: 'bat-racing-graphite',
      name: 'HyperBurst 6S 2200mAh 180C Lightweight Pack',
      type: 'Ultra-High Discharge Racer',
      price: 11999,
      weight: 290,
      capacity: '2200mAh (180C Peak Burst)',
      baseFlightTime: 22,
      description: 'Maximum discharge current for blistering speed and minimal weight penalty.'
    }
  ]
};
