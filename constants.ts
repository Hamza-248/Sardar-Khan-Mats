import { Category, Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  // --- AUTOMOTIVE ---
  {
    id: 'auto-1',
    name: 'Universal PVC Car Mats 5-Piece Set',
    category: Category.AUTOMOTIVE,
    price: 2500,
    isCustomPrice: false,
    image: 'https://m.media-amazon.com/images/I/81jY%2Bn3CFML.jpg',
    shortDescription: 'Complete 5-piece protection for your vehicle floor.',
    fullDescription: 'High-quality universal PVC car mats designed to fit most sedans and hatchbacks. This 5-piece set provides complete coverage, protecting your car carpet from dirt, mud, and spills. Easy to clean and durable.',
    specs: {
      'Pieces': '5 (2 Front, 2 Rear, 1 Bridge)',
      'Material': 'Heavy Duty PVC',
      'Fit': 'Universal',
      'Washable': 'Yes'
    },
    rating: 4.8,
    reviewCount: 342,
    warranty: '2 Years'
  },
  {
    id: 'auto-2',
    name: 'Clear Transparent PVC Car Mats',
    category: Category.AUTOMOTIVE,
    price: 3000,
    isCustomPrice: false,
    image: 'https://m.media-amazon.com/images/I/61U6v-ck6tL._AC_UF1000,1000_QL80_.jpg',
    shortDescription: 'Invisible protection that shows off your original carpet.',
    fullDescription: 'Keep your original car flooring visible while keeping it clean. These transparent PVC mats are heavy-duty, waterproof, and feature anti-slip backing to stay in place.',
    specs: {
      'Color': 'Transparent / Clear',
      'Material': 'High-Grade Vinyl',
      'Thickness': '3mm',
      'Anti-Slip': 'Yes'
    },
    rating: 4.6,
    reviewCount: 128,
    warranty: '2 Years'
  },
  {
    id: 'auto-3',
    name: 'Custom Fit PVC Car Mats (Cut to Size)',
    category: Category.AUTOMOTIVE,
    price: 4500,
    isCustomPrice: true,
    image: 'https://img11.fr-trading.com/3/1_952_59568_750_750.jpg',
    shortDescription: 'Tailored specifically for your vehicle model.',
    fullDescription: 'Get the perfect fit for your specific car model. We cut these mats to exact dimensions, ensuring zero gaps and maximum coverage. Available for all local and imported vehicles.',
    specs: {
      'Customization': 'Cut to Order',
      'Material': 'Textured PVC',
      'Edges': 'Trimmed / Bound',
      'Color Options': 'Black, Grey, Beige'
    },
    rating: 4.9,
    reviewCount: 510,
    warranty: '3 Years'
  },
  {
    id: 'auto-4',
    name: 'PVC Coil Roll for Car Mat Custom Cutting',
    category: Category.AUTOMOTIVE,
    price: 1500,
    isCustomPrice: true,
    image: 'https://www.pvccoilmats.com/Outdoor-Anti-slip-Pvc-Coil-Floor-Mat-roll-p.jpg',
    shortDescription: 'Spaghetti/Noodle mats available in rolls.',
    fullDescription: 'Premium PVC coil "noodle" mats that trap dust and dirt deep inside, keeping the surface clean. Available in rolls for custom cutting for any vehicle or floor space.',
    specs: {
      'Roll Width': '4 Feet',
      'Thickness': '12mm - 15mm',
      'Dust Trap': 'High Efficiency',
      'Backing': 'Spiked Anti-Slip'
    },
    rating: 4.7,
    reviewCount: 89,
    warranty: '2 Years'
  },

  // --- HOME ---
  {
    id: 'home-1',
    name: 'PVC Coil Mat Roll for Home/Office',
    category: Category.HOME,
    price: 1800,
    isCustomPrice: false,
    image: 'https://m.media-amazon.com/images/I/81dJUz2HjPL.jpg',
    shortDescription: 'Soft, cushioned flooring for entrance and walkways.',
    fullDescription: 'Versatile coil mats perfect for home entrances or office walkways. The cushioned feel reduces fatigue while the structure scrapes shoes clean effectively.',
    specs: {
      'Usage': 'Indoor / Outdoor',
      'Feel': 'Cushioned Soft',
      'Maintenance': 'Shake or Wash',
      'Colors': 'Multi-color options'
    },
    rating: 4.7,
    reviewCount: 215,
    warranty: '3 Years'
  },
  {
    id: 'home-2',
    name: 'Anti-Slip PVC Mat for Wet Areas',
    category: Category.HOME,
    price: 950,
    isCustomPrice: false,
    image: 'https://m.media-amazon.com/images/I/71nemlg67fS._AC_UF894,1000_QL80_.jpg',
    shortDescription: 'Essential safety mats for bathrooms and kitchens.',
    fullDescription: 'Prevent slips and falls in wet areas. Ideal for bathrooms, kitchens, and laundry rooms. The open grid design allows water to drain freely.',
    specs: {
      'Waterproof': '100%',
      'Drainage': 'Excellent',
      'Texture': 'Grid / Mesh',
      'Size': 'Roll or Tile'
    },
    rating: 4.8,
    reviewCount: 156,
    warranty: '3 Years'
  },
  {
    id: 'home-3',
    name: 'PVC Entrance & Welcome Mats',
    category: Category.HOME,
    price: 1200,
    isCustomPrice: false,
    image: 'https://i.ebayimg.com/images/g/QBcAAOSwa7ZkrgKn/s-l1200.jpg',
    shortDescription: 'Durable welcome mats that make a great first impression.',
    fullDescription: 'Heavy-duty entrance mats designed to withstand high foot traffic while trapping dirt at the door. Weather-resistant and easy to hose down.',
    specs: {
      'Design': 'Welcome / Patterns',
      'Backing': 'Rubberized',
      'Durability': 'Heavy Foot Traffic',
      'Weatherproof': 'Yes'
    },
    rating: 4.6,
    reviewCount: 98,
    warranty: '2 Years'
  },

  // --- OFFICE ---
  {
    id: 'office-1',
    name: 'PVC Office Chair Floor Protection Mat',
    category: Category.OFFICE,
    price: 3200,
    isCustomPrice: false,
    image: 'https://i5.walmartimages.com/seo/HomGarden-47-x-35-PVC-Office-Chair-Mat-Clear-Floor-Desk-Mat.jpg',
    shortDescription: 'Protect carpets and hard floors from chair casters.',
    fullDescription: 'Extend the life of your office flooring. This transparent PVC mat allows chairs to glide smoothly while preventing scratches, scuffs, and carpet wear.',
    specs: {
      'Shape': 'Rectangular / Lipped',
      'Transparency': 'Clear / Frosted',
      'Material': 'Rigid PVC',
      'Impact Resistant': 'Yes'
    },
    rating: 4.8,
    reviewCount: 112,
    warranty: '5 Years'
  },

  // --- INDUSTRIAL / SPECIALIZED ---
  {
    id: 'ind-1',
    name: 'Heavy-Duty PVC Industrial Flooring Roll',
    category: Category.INDUSTRIAL,
    price: 4500,
    isCustomPrice: true,
    image: 'https://images.thdstatic.com/productImages/59b7429c-0d53-487c-a7fd-d94e6063228e/svn/black-diamond-texture-husky-garage-flooring-rolls.jpg',
    shortDescription: 'Tough flooring for warehouses and factories.',
    fullDescription: 'Industrial-grade PVC rolls capable of withstanding heavy machinery, forklifts, and constant foot traffic. Resistant to oils, chemicals, and abrasion.',
    specs: {
      'Texture': 'Diamond Plate',
      'Thickness': '3mm - 5mm',
      'Roll Width': 'Available in 4ft - 6ft',
      'Load Rating': 'Heavy Duty'
    },
    rating: 4.9,
    reviewCount: 67,
    warranty: '5 Years'
  },
  {
    id: 'ind-2',
    name: 'Anti-Slip PVC Mat for Factories',
    category: Category.INDUSTRIAL,
    price: 3800,
    isCustomPrice: true,
    image: 'https://m.media-amazon.com/images/I/81zhyygDYdL.jpg',
    shortDescription: 'Safety flooring for hazardous work areas.',
    fullDescription: 'Maximize worker safety with high-traction PVC mats. Ideal for ramps, walkways, and production lines where spills occur. Reduces slip accidents significantly.',
    specs: {
      'Surface': 'High Traction Grit',
      'Chemical Resistant': 'Yes',
      'Color': 'Black / Yellow Safety',
      'Fire Retardant': 'Class B1'
    },
    rating: 4.8,
    reviewCount: 45,
    warranty: '4 Years'
  },
  {
    id: 'ind-3',
    name: 'PVC Coin/Stud Texture Industrial Mat',
    category: Category.INDUSTRIAL,
    price: 4000,
    isCustomPrice: true,
    image: 'https://floormats.pk/cdn/shop/products/coin-roll.jpg',
    shortDescription: 'Classic coin pattern for grip and aesthetics.',
    fullDescription: 'The "Coin" pattern is a timeless choice for garages, gyms, and industrial spaces. Provides multidirectional grip and is very easy to sweep and mop.',
    specs: {
      'Pattern': 'Coin / Stud',
      'Thickness': '2.5mm - 4mm',
      'Application': 'Floor / Workbench',
      'Origin': 'Imported'
    },
    rating: 4.7,
    reviewCount: 82,
    warranty: '5 Years'
  },
  {
    id: 'ind-4',
    name: 'PVC Roll for Garage & Workshop',
    category: Category.INDUSTRIAL,
    price: 3500,
    isCustomPrice: false,
    image: 'https://m.media-amazon.com/images/I/71b2GtrA7rL._AC_UF894,1000_QL80_.jpg',
    shortDescription: 'Transform your garage into a showroom.',
    fullDescription: 'Oil-resistant and easy to clean, this PVC roll is perfect for home garages and professional workshops. Covers cracks and stains in concrete immediately.',
    specs: {
      'Resistance': 'Oil, Gas, Battery Acid',
      'Installation': 'Loose Lay / Glue',
      'Cleanability': 'Easy',
      'Finish': 'Matte / Gloss'
    },
    rating: 4.8,
    reviewCount: 104,
    warranty: '5 Years'
  },
  {
    id: 'spec-1',
    name: 'Anti-Bacterial PVC Mat for Hospitals/OT',
    category: Category.INDUSTRIAL, // Grouped under Industrial for simplicity in Phase 1
    price: 6000,
    isCustomPrice: true,
    image: 'https://m.media-amazon.com/images/I/71OC55taE3L.jpg',
    shortDescription: 'Sterile flooring for healthcare environments.',
    fullDescription: 'Specialized PVC flooring treated with anti-bacterial agents. Seamless installation prevents bacteria growth. Ideal for Operation Theaters, Clinics, and Labs.',
    specs: {
      'Grade': 'Medical / Hospital',
      'Anti-Bacterial': 'Certified',
      'Seams': 'Heat Weldable',
      'Static Control': 'Optional'
    },
    rating: 5.0,
    reviewCount: 23,
    warranty: '5 Years'
  },
  {
    id: 'spec-2',
    name: 'Chemical-Resistant PVC Flooring',
    category: Category.INDUSTRIAL,
    price: 5500,
    isCustomPrice: true,
    image: 'https://m.media-amazon.com/images/I/61T1+6nalwL._AC_UF894,1000_QL80_.jpg',
    shortDescription: 'For labs and industrial chemical handling.',
    fullDescription: 'Designed to resist aggressive chemicals, acids, and solvents. Protects the subfloor from corrosion and damage in harsh industrial environments.',
    specs: {
      'Chemical Resistance': 'High',
      'Stain Resistance': 'Superior',
      'Bonding': 'Epoxy Adhesive',
      'Lifespan': '10+ Years'
    },
    rating: 4.9,
    reviewCount: 18,
    warranty: '5 Years'
  },
  {
    id: 'spec-3',
    name: 'Custom PVC Safety and Protection Mats',
    category: Category.INDUSTRIAL,
    price: 0,
    isCustomPrice: true,
    image: 'https://m.media-amazon.com/images/I/71Ql2Bb+USL._AC_UF894,1000_QL80_.jpg',
    shortDescription: 'Bespoke safety solutions for any requirement.',
    fullDescription: 'We fabricate custom safety mats for electrical panels (insulation), gym weights (impact), or specialized machinery. Contact us with your specifications.',
    specs: {
      'Customization': 'Full',
      'Types': 'Insulation / Impact / Anti-Fatigue',
      'Certification': 'As required',
      'Voltage Rating': 'Available for Electrical Mats'
    },
    rating: 5.0,
    reviewCount: 12,
    warranty: 'Custom'
  }
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Automotive', path: '/category/Automotive' },
  { label: 'Industrial', path: '/category/Industrial' },
  { label: 'Home', path: '/category/Home' },
  { label: 'Office', path: '/category/Office' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const CLIENTS = [
  { name: 'Pakistan Army', logo: 'https://ui-avatars.com/api/?name=Pakistan+Army&background=1d5c2e&color=fff&size=200&font-size=0.3' },
  { name: 'Punjab Police', logo: 'https://ui-avatars.com/api/?name=Punjab+Police&background=1b2a4e&color=fff&size=200&font-size=0.3' },
  { name: 'Motorway Police', logo: 'https://ui-avatars.com/api/?name=Motorway+Police&background=0f4c81&color=fff&size=200&font-size=0.3' },
  { name: 'City Hospital', logo: 'https://ui-avatars.com/api/?name=City+Hospital&background=e03e3e&color=fff&size=200&font-size=0.3' },
  { name: 'Vehicle Mods Co', logo: 'https://ui-avatars.com/api/?name=Vehicle+Mods&background=333&color=fff&size=200&font-size=0.3' },
  { name: 'Power Gym', logo: 'https://ui-avatars.com/api/?name=Power+Gym&background=000&color=fff&size=200&font-size=0.3' },
  { name: 'Lahore General', logo: 'https://ui-avatars.com/api/?name=LG+Hospital&background=4299e1&color=fff&size=200&font-size=0.3' },
  { name: 'Toyota Motors', logo: 'https://ui-avatars.com/api/?name=Toyota+Motors&background=eb0a1e&color=fff&size=200&font-size=0.3' },
];

export const REVIEWS = [
  { id: 1, user: 'Ali Khan', text: 'Best quality car mats in Saddar. The fitting for my Civic was perfect. Highly recommended!', rating: 5, date: '2 weeks ago' },
  { id: 2, user: 'Dr. Sarah', text: 'Ordered customized flooring for our clinic OT. Very professional service and durable material.', rating: 5, date: '1 month ago' },
  { id: 3, user: 'Ahmed Auto', text: 'We buy rolls in bulk for our modification shop. Trusted supplier for years.', rating: 5, date: '3 months ago' },
  { id: 4, user: 'Bilal Ahmed', text: 'Excellent customer service. They helped me choose the right mat for my kitchen.', rating: 4, date: '1 week ago' },
  { id: 5, user: 'Usman R.', text: 'Fast delivery to Lahore. The mat quality is heavy duty as promised.', rating: 5, date: '2 days ago' },
];

export const VIDEOS = [
  { id: 1, title: 'Car Mat Installation', thumb: 'https://placehold.co/600x400/222/FFF?text=Car+Mat+Install', duration: '3:45' },
  { id: 2, title: 'Industrial Durability Test', thumb: 'https://placehold.co/600x400/333/FFF?text=Durability+Test', duration: '2:10' },
  { id: 3, title: 'Store Walkthrough', thumb: 'https://placehold.co/600x400/C8102E/FFF?text=Store+Tour', duration: '1:30' },
  { id: 4, title: 'Customer Review', thumb: 'https://placehold.co/600x400/444/FFF?text=Happy+Customer', duration: '0:55' },
  { id: 5, title: 'Factory Tour', thumb: 'https://placehold.co/600x400/111/FFF?text=Factory+Process', duration: '5:20' },
  { id: 6, title: 'Office Floor Upgrade', thumb: 'https://placehold.co/600x400/555/FFF?text=Office+Flooring', duration: '2:45' },
  { id: 7, title: 'Anti-Slip Demo', thumb: 'https://placehold.co/600x400/666/FFF?text=Anti-Slip+Demo', duration: '1:15' },
  { id: 8, title: 'Custom Cutting Process', thumb: 'https://placehold.co/600x400/777/FFF?text=Custom+Cutting', duration: '4:00' },
];
