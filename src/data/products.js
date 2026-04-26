export const products = [
  {
    id: 1,
    name: "BAGCO Chain Satchel Set - Blue",
    category: "crossbody",
    price: 18000,
    image: "/images/bag-21.jpg",
    description: "A polished chain satchel set with matching wallet in rich blue tones.",
    featured: true
  },
  {
    id: 2,
    name: "BAGCO Chain Satchel Set - Black",
    category: "crossbody",
    price: 18000,
    image: "/images/bag-22.jpg",
    description: "Elegant black satchel set designed for evening and statement looks.",
    featured: true
  },
  {
    id: 3,
    name: "CHRISBELLA Duo Carry Set - Ruby",
    category: "tote",
    price: 21000,
    image: "/images/bag-23.jpg",
    description: "A bold burgundy handbag and clutch combo for premium day-to-night styling.",
    featured: true
  },
  {
    id: 4,
    name: "CHRISBELLA Structured Tote Set - Blush",
    category: "tote",
    price: 20000,
    image: "/images/bag-24.jpg",
    description: "Chic blush tote with matching purse, perfect for office and social outings.",
    featured: false
  },
  {
    id: 5,
    name: "CHRISBELLA Quilted Luxe Tote - Coral",
    category: "tote",
    price: 17000,
    image: "/images/bag-27.jpg",
    description: "Soft quilted finish with chain accents for a glamorous everyday carry.",
    featured: false
  },
  {
    id: 6,
    name: "CHRISBELLA Quilted Statement Tote - Sunset",
    category: "tote",
    price: 18000,
    image: "/images/bag-28.jpg",
    description: "A vibrant orange quilted tote that stands out beautifully in any outfit.",
    featured: false
  },
  {
    id: 7,
    name: "Rose Monogram Shopper Tote",
    category: "tote",
    price: 17000,
    image: "/images/bag-29.jpg",
    description: "A lightweight patterned shopper with a soft rose trim for daily errands.",
    featured: true
  },
  {
    id: 8,
    name: "Checkered Bear Charm Tote",
    category: "tote",
    price: 16000,
    image: "/images/bag-30.jpg",
    description: "Timeless check tote with a playful charm and generous carry space.",
    featured: false
  },
  {
    id: 9,
    name: "I.T Lock Charm Mini Crossbody",
    category: "mini",
    price: 14000,
    image: "/images/bag-31.jpg",
    description: "Compact mini crossbody with premium hardware and clean minimal lines.",
    featured: false
  },
  {
    id: 10,
    name: "BF Pastel Chain Trio",
    category: "crossbody",
    price: 15000,
    image: "/images/bag-32.jpg",
    description: "Soft pastel chain crossbodies created for graceful everyday styling.",
    featured: false
  },
  {
    id: 11,
    name: "CHRISBELLA Lock Handbag - Caramel",
    category: "crossbody",
    price: 17000,
    image: "/images/bag-34.jpg",
    description: "Refined caramel and brown tones with gold chain detail and matching pouch.",
    featured: false
  },
  {
    id: 12,
    name: "CHRISBELLA Duo Shoulder Set",
    category: "crossbody",
    price: 17000,
    image: "/images/bag-35.jpg",
    description: "A premium two-tone shoulder set with coordinated wallet and chain strap.",
    featured: false
  },
  {
    id: 13,
    name: "CHRISBELLA Mint Luxe Duo",
    category: "crossbody",
    price: 17000,
    image: "/images/bag-36.jpg",
    description: "Fresh mint-and-ivory combination with a structured silhouette and mini pouch.",
    featured: true
  },
  {
    id: 14,
    name: "Minimal Crossbody Collection",
    category: "crossbody",
    price: 14000,
    image: "/images/bag-37.jpg",
    description: "Clean modern shape in neutral tones for simple, elevated daily wear.",
    featured: false
  },
  {
    id: 15,
    name: "BAILEE Signature Set",
    category: "tote",
    price: 23000,
    image: "/images/bag-38.jpg",
    description: "Statement family of signature sets curated in multiple elegant colorways.",
    featured: true
  },
  {
    id: 16,
    name: "BAILEE Edition Collection",
    category: "crossbody",
    price: 21000,
    image: "/images/bag-40.jpg",
    description: "A complete collection layout showcasing premium shades for custom preference.",
    featured: false
  }
];

export const featuredProducts = products.filter((product) => product.featured);