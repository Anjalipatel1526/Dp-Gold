export const categories = [
  { 
    id: "round-sheet", 
    name: "Round Sheets", 
    desc: "Premium quality non-conductive mounting sheets for ceiling rose, holders, and small fixtures.",
    image: "/src/assets/products/round-sheet.jpg"
  },
  { 
    id: "fan-sheet", 
    name: "Fan Sheets", 
    desc: "Heavy-duty structural backing sheets for ceiling fan installations ensuring safety and structural load distribution.",
    image: "/src/assets/products/fan-sheet.jpg"
  },
  { 
    id: "junction-box", 
    name: "Junction Boxes", 
    desc: "Standard and deep conduit boxes designed for easy cable routing and structural longevity.",
    image: "/src/assets/products/junction-box.jpg"
  },
  { 
    id: "fan-box", 
    name: "Fan Boxes", 
    desc: "Reinforced metal and PVC ceiling boxes designed for concrete slab embedding and heavy fan support.",
    image: "/src/assets/products/fan-box.jpg"
  },
  { 
    id: "elbow-tee", 
    name: "Elbows, Tees & Reducers", 
    desc: "High-impact precision conduit fittings ensuring tight, dust-proof connections for electrical raceways.",
    image: "/src/assets/products/elbow-tee.jpg"
  },
  { 
    id: "spotlight-box", 
    name: "Spot Light Boxes", 
    desc: "Architectural spotlight back-boxes designed for flush ceiling lighting fixtures in concrete ceilings.",
    image: "/src/assets/products/spotlight-box.jpg"
  }
];

export const products = [
  // Round Sheets
  {
    id: "rs-butterfly",
    name: "Butterfly Round Sheet",
    category: "round-sheet",
    price: 3.50,
    unit: "Piece",
    image: "/src/assets/products/round-sheet.jpg",
    description: "Elegant butterfly-shaped premium electrical base sheet. High dielectric strength with flame retardant properties.",
    features: ["Flame Retardant PVC", "Aesthetic Design", "Easy Screw Alignment", "UV Stabilized"],
    specs: {
      "Material": "Polycarbonate/FR PVC",
      "Shape": "Butterfly",
      "Mounting": "Wall/Ceiling",
      "Dielectric Strength": "High"
    }
  },
  {
    id: "rs-wonder",
    name: "Wonder Round Sheet",
    category: "round-sheet",
    price: 4.00,
    unit: "Piece",
    image: "/src/assets/products/round-sheet.jpg",
    description: "Industrial grade circular backing sheet designed for heavy commercial switches and ceiling fittings.",
    features: ["Extra Thickness", "Dust Repellent", "Crack Resistant", "Glossy Finish"],
    specs: {
      "Material": "High-Grade FR-PVC",
      "Shape": "Round Classic",
      "Diameter": "Standard 3-inch",
      "Thickness": "2.5 mm"
    }
  },
  {
    id: "rs-om",
    name: "OM Round Sheet",
    category: "round-sheet",
    price: 4.30,
    unit: "Piece",
    image: "/src/assets/products/round-sheet.jpg",
    description: "Premium spiritual theme circular backing plate for standard domestic ceiling mounts.",
    features: ["Precision Engineered", "High Glossy White", "Heavy Duty Wall Thickness", "Shock Proof"],
    specs: {
      "Material": "Virgin Polymer",
      "Design": "OM Embossed/Plain Option",
      "Diameter": "Standard",
      "Impact Resistance": "Medium-High"
    }
  },
  {
    id: "rs-dpgold-medium",
    name: "DPGOLD Medium Round Sheet",
    category: "round-sheet",
    price: 4.30,
    unit: "Piece",
    image: "/src/assets/products/round-sheet.jpg",
    description: "Mid-tier flagship circular backing plate offering robust engineering and high aesthetic value.",
    features: ["Virgin Material", "Scratch-Resistant", "Optimum Flexibility", "Elegant Finish"],
    specs: {
      "Material": "Premium Virgin PVC",
      "Grade": "Commercial/Residential",
      "Diameter": "3.2 inches",
      "Warranty": "5 Years"
    }
  },
  {
    id: "rs-dpgold-jumbo",
    name: "DPGOLD Jumbo Round Sheet",
    category: "round-sheet",
    price: 6.20,
    unit: "Piece",
    image: "/src/assets/products/round-sheet.jpg",
    description: "Oversized heavy duty round sheet for concealing larger cutouts and supporting heavy wall brackets.",
    features: ["Maximum Cover Area", "Heavy Wall Thickness", "Premium Architectural Grade", "Self-Extinguishing"],
    specs: {
      "Material": "Heavy-Duty FR Polycarbonate",
      "Diameter": "4.2 inches",
      "Color": "Snow White",
      "Flame Retardancy": "UL94 V-0"
    }
  },
  {
    id: "rs-round-block",
    name: "Round Block",
    category: "round-sheet",
    price: 6.00,
    unit: "Piece",
    image: "/src/assets/products/round-sheet.jpg",
    description: "Extra-deep spacing block designed for surface mounting applications with thick wiring bundles.",
    features: ["Deep Space Profile", "Reinforced Screw Bosses", "Multiple Knockouts", "Excellent Impact Resistance"],
    specs: {
      "Material": "Heavy-Duty Rigid PVC",
      "Height/Depth": "15 mm",
      "Diameter": "3.5 inches",
      "Mounting Type": "Surface Mount"
    }
  },

  // Fan Sheets
  {
    id: "fs-medium-regular",
    name: "Medium Regular Fan Sheet",
    category: "fan-sheet",
    price: 8.50,
    unit: "Piece",
    image: "/src/assets/products/fan-sheet.jpg",
    description: "Standard grade fan mounting sheet. Provides dust-free separation between ceiling and fan canopy.",
    features: ["Sleek Profile", "Vibration Absorbent", "Perfect Canopy Fit", "Standard Mounting Holes"],
    specs: {
      "Material": "Standard PVC",
      "Thickness": "3.0 mm",
      "Diameter": "5.5 inches",
      "Application": "Ceiling Fan Mount"
    }
  },
  {
    id: "fs-dpgold-heavy",
    name: "DPGOLD Heavy Fan Sheet",
    category: "fan-sheet",
    price: 11.00,
    unit: "Piece",
    image: "/src/assets/products/fan-sheet.jpg",
    description: "Heavy-duty structural backing sheet designed to bear vibrations and distribute loads for premium ceiling fans.",
    features: ["High Structural Rigidity", "Acoustic Dampening", "Glossy White Polycarbonate", "Weatherproof"],
    specs: {
      "Material": "Reinforced Polycarbonate",
      "Thickness": "4.5 mm",
      "Diameter": "5.8 inches",
      "Flame Retardant": "Yes"
    }
  },
  {
    id: "fs-jumbo-heavy",
    name: "Jumbo Heavy Fan Sheet",
    category: "fan-sheet",
    price: 13.00,
    unit: "Piece",
    image: "/src/assets/products/fan-sheet.jpg",
    description: "Extra-large heavy-duty sheet for high-end heavy-body decorative fans and commercial ceiling units.",
    features: ["Maximum Support Area", "Thick Structural Grid", "Premium Aesthetic Trim", "Zero Sagging Guarantee"],
    specs: {
      "Material": "Glass-Reinforced Polymer",
      "Thickness": "5.5 mm",
      "Diameter": "6.5 inches",
      "Load Bearing": "Up to 50 kg"
    }
  },

  // Junction Boxes
  {
    id: "jb-19mm-1-2",
    name: "19mm JB 1 & 2 Way",
    category: "junction-box",
    price: 8.50,
    unit: "Piece",
    image: "/src/assets/products/junction-box.jpg",
    description: "Standard depth 19mm junction box with options for straight-through (2-way) or terminal (1-way) conduit connection.",
    features: ["Precision Knockouts", "Threaded Brass Inserts", "Dust-Tight Fit", "Extra Accessories Options"],
    specs: {
      "Conduit Diameter": "19 mm",
      "Outlets": "1-Way or 2-Way (Opposite/Right)",
      "Material": "High-Impact PVC",
      "Standard": "IS:3419 Compliant"
    },
    hasCapOption: true,
    capPrice: 7.00
  },
  {
    id: "jb-19mm-3-4",
    name: "19mm JB 3 & 4 Way",
    category: "junction-box",
    price: 9.50,
    unit: "Piece",
    image: "/src/assets/products/junction-box.jpg",
    description: "Three-way (Tee) and four-way (Cross) routing junction box for complex 19mm electrical conduit layouts.",
    features: ["Multi-directional Routing", "Robust Screw Columns", "Tight Sleeve Fits", "Corrosion Proof"],
    specs: {
      "Conduit Diameter": "19 mm",
      "Outlets": "3-Way (Tee) or 4-Way (Intersection)",
      "Material": "Unplasticized PVC (uPVC)",
      "Depth": "Standard 25 mm"
    },
    hasCapOption: true,
    capPrice: 7.00
  },
  {
    id: "jb-25mm-1-2",
    name: "25mm JB 1 & 2 Way",
    category: "junction-box",
    price: 9.00,
    unit: "Piece",
    image: "/src/assets/products/junction-box.jpg",
    description: "Industrial standard 25mm diameter junction box. Ideal for thick power wiring and mains distribution networks.",
    features: ["Large Wire Space", "Thick PVC Walls", "Smooth Interior Walls", "Weatherproof Gasket Ready"],
    specs: {
      "Conduit Diameter": "25 mm",
      "Outlets": "1-Way or 2-Way",
      "Material": "FR-uPVC Heavy-Duty",
      "Standard": "IEC Compliant"
    },
    hasCapOption: true,
    capPrice: 7.00
  },
  {
    id: "jb-25mm-3-4",
    name: "25mm JB 3 & 4 Way",
    category: "junction-box",
    price: 10.00,
    unit: "Piece",
    image: "/src/assets/products/junction-box.jpg",
    description: "Multi-direction routing hub for heavy-duty 25mm conduits. Provides optimal space for multi-wire splices.",
    features: ["Saves Space", "Robust Construction", "Anti-Aging Compound", "Precision Molded"],
    specs: {
      "Conduit Diameter": "25 mm",
      "Outlets": "3-Way or 4-Way",
      "Material": "Heavy uPVC",
      "Internal Volume": "High"
    },
    hasCapOption: true,
    capPrice: 7.00
  },
  {
    id: "jb-19mm-deep-1-2",
    name: "19mm Deep JB 1 & 2 Way",
    category: "junction-box",
    price: 11.00,
    unit: "Piece",
    image: "/src/assets/products/junction-box.jpg",
    description: "Extra deep junction box for 19mm conduits. Perfect for structural concrete ceilings where more wiring space is needed.",
    features: ["Extra Deep Chamber", "Fits Heavy Wire Bundles", "Excellent Concrete Lock Design", "High Impact Strength"],
    specs: {
      "Conduit Diameter": "19 mm",
      "Box Depth": "45 mm (Deep Model)",
      "Outlets": "1-Way or 2-Way",
      "Material": "FR-uPVC Heavy Duty"
    },
    hasCapOption: true,
    capPrice: 7.00
  },
  {
    id: "jb-19mm-deep-3-4",
    name: "19mm Deep JB 3 & 4 Way",
    category: "junction-box",
    price: 12.00,
    unit: "Piece",
    image: "/src/assets/products/junction-box.jpg",
    description: "Deep-well 19mm junction box with 3 or 4 outlet options. Allows neat loops and complex wiring intersections.",
    features: ["Double Wiring Capacity", "Brass Screw Anchors", "Strong Rigid Ribs", "Zero Deformity Under Concrete Pressure"],
    specs: {
      "Conduit Diameter": "19 mm",
      "Box Depth": "45 mm (Deep Model)",
      "Outlets": "3-Way or 4-Way",
      "Material": "Unplasticized FR-PVC"
    },
    hasCapOption: true,
    capPrice: 7.00
  },
  {
    id: "jb-25mm-deep-1-2",
    name: "25mm Deep JB 1 & 2 Way",
    category: "junction-box",
    price: 12.00,
    unit: "Piece",
    image: "/src/assets/products/junction-box.jpg",
    description: "Deep chamber junction box for 25mm conduits. Suitable for heavy industrial automation and plant power cabling.",
    features: ["Heavy Wall Profile", "High Mechanical Strength", "IP30 Protection Rated", "Acid & Alkali Resistant"],
    specs: {
      "Conduit Diameter": "25 mm",
      "Box Depth": "50 mm (Super Deep)",
      "Outlets": "1-Way or 2-Way",
      "Material": "Industrial Grade FR-uPVC"
    },
    hasCapOption: true,
    capPrice: 7.00
  },
  {
    id: "jb-25mm-deep-3-4",
    name: "25mm Deep JB 3 & 4 Way",
    category: "junction-box",
    price: 13.00,
    unit: "Piece",
    image: "/src/assets/products/junction-box.jpg",
    description: "Deep well multi-route 25mm junction box. The ultimate choice for primary distribution conduits in large buildings.",
    features: ["Maximum Wire Volume", "Extreme Load Resisting Body", "Corrosion & Dust Proof", "Brass Thread Inserts"],
    specs: {
      "Conduit Diameter": "25 mm",
      "Box Depth": "50 mm (Super Deep)",
      "Outlets": "3-Way or 4-Way",
      "Material": "Industrial Grade FR-uPVC"
    },
    hasCapOption: true,
    capPrice: 7.00
  },

  // Fan Boxes
  {
    id: "fb-small",
    name: "Small Fan Box",
    category: "fan-box",
    price: 43.00,
    unit: "Piece",
    image: "/src/assets/products/fan-box.jpg",
    description: "Compact fan box designed for shallow concrete slabs. Features high-tensile steel mounting rods for standard fans.",
    features: ["Heavy-Duty Steel Hook", "Anti-Rust Primer Coated", "Sturdy Hexagonal Shape", "Precision Knockouts"],
    specs: {
      "Hook Thickness": "8 mm (Tension Steel)",
      "Box Material": "Mild Steel / Galvanized Option",
      "Depth": "60 mm",
      "Hook Capacity": "Up to 80 kg load"
    }
  },
  {
    id: "fb-gold",
    name: "DPGOLD Fan Box",
    category: "fan-box",
    price: 48.00,
    unit: "Piece",
    image: "/src/assets/products/fan-box.jpg",
    description: "Flagship gold-standard fan box with corrosion-resistant coating and heavy reinforcement welds.",
    features: ["Double Welded Hook", "Premium Powder Coated Finish", "Extra Side Conduit Entry Holes", "Concrete Leak Proof"],
    specs: {
      "Hook Thickness": "10 mm (Heavy Duty Steel)",
      "Box Material": "Reinforced Cold-Rolled Steel",
      "Depth": "75 mm",
      "Hook Capacity": "Up to 120 kg load"
    }
  },
  {
    id: "fb-jumbo",
    name: "Jumbo Fan Box",
    category: "fan-box",
    price: 68.00,
    unit: "Piece",
    image: "/src/assets/products/fan-box.jpg",
    description: "Extra large deep-well heavy-body fan box. Best suited for high ceilings, large chandeliers, and industrial high-volume fans.",
    features: ["Super-Thick Steel Hook", "Anti-Corrosion Epoxy Powder Coating", "Universal Conduit Knockouts (19mm & 25mm)", "Lifetime Structural Warranty"],
    specs: {
      "Hook Thickness": "12 mm (Super Strength Steel)",
      "Box Material": "Heavy Gauge Carbon Steel",
      "Depth": "90 mm",
      "Hook Capacity": "Up to 200 kg load"
    }
  },

  // Elbow & Tee
  {
    id: "et-19mm-elbow",
    name: "19mm Conduit Elbow",
    category: "elbow-tee",
    price: 2.10,
    unit: "Piece",
    image: "/src/assets/products/elbow-tee.jpg",
    description: "90-degree bend conduit elbow for 19mm PVC pipes. Ensures smooth, snag-free wire pulling.",
    features: ["90° Precision Angle", "Smooth Internal Radius", "Tight Coupling Fit", "High Wall Strength"],
    specs: {
      "Diameter": "19 mm",
      "Angle": "90 Degrees",
      "Material": "Conduit-Grade PVC",
      "Color": "White/Slate"
    }
  },
  {
    id: "et-25mm-elbow",
    name: "25mm Conduit Elbow",
    category: "elbow-tee",
    price: 3.00,
    unit: "Piece",
    image: "/src/assets/products/elbow-tee.jpg",
    description: "Heavy-duty 90-degree sweep elbow for 25mm main-line conduits. Features low friction interior.",
    features: ["Wide Radius Sweep", "Frictionless Interior", "uPVC Virgin Resin", "High Shock Resistance"],
    specs: {
      "Diameter": "25 mm",
      "Angle": "90 Degrees",
      "Material": "uPVC Rigid Conduit",
      "Color": "White"
    }
  },
  {
    id: "et-19mm-tee",
    name: "19mm Conduit Tee",
    category: "elbow-tee",
    price: 2.30,
    unit: "Piece",
    image: "/src/assets/products/elbow-tee.jpg",
    description: "T-shaped conduit connection for splitting branch wiring in a 19mm layout.",
    features: ["Equilateral Tee Outlets", "Reinforced T-Joint", "Dust Proof Seal", "Easy Glue Bonding"],
    specs: {
      "Diameter": "19 mm",
      "Type": "3-Way equal branch",
      "Material": "FR-uPVC"
    }
  },
  {
    id: "et-25mm-tee",
    name: "25mm Conduit Tee",
    category: "elbow-tee",
    price: 3.20,
    unit: "Piece",
    image: "/src/assets/products/elbow-tee.jpg",
    description: "T-junction fitting for heavy-gauge 25mm conduits, facilitating neat branch drops.",
    features: ["Heavy Duty Corner Wall", "Precision Collar Sockets", "Weather Resistant", "Flame Retardant"],
    specs: {
      "Diameter": "25 mm",
      "Type": "3-Way equal branch",
      "Material": "Rigid PVC Compound"
    }
  },
  {
    id: "et-reducer",
    name: "19mm/25mm Reducer",
    category: "elbow-tee",
    price: 3.50,
    unit: "Piece",
    image: "/src/assets/products/elbow-tee.jpg",
    description: "Adapter sleeve to connect 25mm primary conduits down to 19mm secondary distribution runs.",
    features: ["Seamless Reducer Step", "Strong Glue Seal", "Saves Conduit Cost", "Compact Profile"],
    specs: {
      "Input Size": "25 mm Socket",
      "Output Size": "19 mm Spigot/Socket",
      "Material": "Virgin High-Impact PVC"
    }
  },

  // Spot Light Box
  {
    id: "slb-mini",
    name: "Mini Spot Light Box",
    category: "spotlight-box",
    price: 18.00,
    unit: "Piece",
    image: "/src/assets/products/spotlight-box.jpg",
    description: "Small recessed spotlight box for LED cabinets and architectural niche spotlighting in ceilings.",
    features: ["Compact Design", "Conduit Knockouts", "Firm Concrete Grip", "Flame Resistant"],
    specs: {
      "Diameter": "2.5 inches (Cutout standard)",
      "Depth": "45 mm",
      "Material": "Polycarbonate FR",
      "Applications": "Mini Recessed Spotlights"
    },
    hasCapOption: true,
    capPrice: 5.00
  },
  {
    id: "slb-supreme",
    name: "Supreme Spot Light Box",
    category: "spotlight-box",
    price: 25.00,
    unit: "Piece",
    image: "/src/assets/products/spotlight-box.jpg",
    description: "Flagship standard spotlight box designed to house premium downlights and LED ceiling units.",
    features: ["Wide Heat Dissipation Space", "Double Conduit Sleeves", "Perfect circular brim", "Strong Concrete Anchor Ribs"],
    specs: {
      "Diameter": "3.5 inches",
      "Depth": "60 mm",
      "Material": "Heavy Duty FR-uPVC",
      "Color": "Slate Grey/White"
    },
    hasCapOption: true,
    capPrice: 5.00
  },
  {
    id: "slb-jumbo",
    name: "Jumbo Spot Light Box",
    category: "spotlight-box",
    price: 30.00,
    unit: "Piece",
    image: "/src/assets/products/spotlight-box.jpg",
    description: "Oversized spotlight enclosure for heavy driver LED panels, smart RGB downlights, and premium fixtures.",
    features: ["Max Capacity Chamber", "Reinforced Frame Structure", "Thermal Ventilation Slots", "Heavy Concrete Load Guard"],
    specs: {
      "Diameter": "4.5 inches",
      "Depth": "75 mm",
      "Material": "Ultra-Tough Flame Retardant PC",
      "Mounting Hook": "Optional Screw Plate"
    },
    hasCapOption: true,
    capPrice: 5.00
  }
];

export const faqs = [
  {
    question: "What material is used in DPGOLD Round Sheets and Fan Sheets?",
    answer: "All DPGOLD Round Sheets and Fan Sheets are manufactured using 100% Virgin Flame-Retardant Polycarbonate and premium PVC polymer resins. This ensures they do not support combustion, maintain color vibrancy (zero yellowing), and resist cracking during installation."
  },
  {
    question: "Are your junction boxes compliant with industry standards?",
    answer: "Yes, our junction boxes and deep boxes are manufactured in accordance with IS:3419 standard specifications. They feature standard sizes (19mm and 25mm), standard depths, and are fitted with premium threaded brass inserts to prevent screw slippage during wiring installations."
  },
  {
    question: "Does the pricing for spot light and junction boxes include the cap?",
    answer: "Our standard prices are for the base box units. Caps are available separately at an additional charge: ₹7 extra for Junction Box caps, and ₹5 extra for Spot Light Box caps, ensuring flexibility for projects where separate covers are not required."
  },
  {
    question: "What is the weight capacity of your Fan Boxes?",
    answer: "Our Fan Boxes are fabricated from carbon steel and galvanized options. The Small Fan Box supports up to 80 kg, the Gold supports 120 kg, and our Jumbo Fan Box features an extra-thick steel hook that can support up to 200 kg, making it ideal for commercial decorative chandeliers and high-volume ceiling fans."
  },
  {
    question: "Do you supply products in bulk across India?",
    answer: "DPGOLD is a brand by Dinesh Plastics, a leading PVC Electrical Accessories manufacturer based in Chennai. We cater to wholesale distributors, electrical retailers, and bulk construction project inquiries across India. For customized bulk quotes, please contact us via our Inquiry Form or WhatsApp."
  }
];
