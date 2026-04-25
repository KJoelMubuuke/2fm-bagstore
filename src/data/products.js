export const products = [
  {
    id: 1,
    name: "Harper Work Tote",
    category: "tote",
    price: 145000,
    image: "/images/bag-1.jpg",
    description: "A clean everyday tote with enough room for work essentials and daily carry.",
    featured: true
  },
  {
    id: 2,
    name: "Mila Crossbody",
    category: "crossbody",
    price: 132000,
    image: "/images/bag-2.jpg",
    description: "A compact crossbody that keeps your hands free while staying polished.",
    featured: true
  },
  {
    id: 3,
    name: "Camden Shopper Tote",
    category: "tote",
    price: 168000,
    image: "/images/bag-3.jpg",
    description: "Structured enough for meetings and soft enough for daily errands.",
    featured: true
  },
  {
    id: 4,
    name: "Nora Mini Bag",
    category: "mini",
    price: 98000,
    image: "/images/bag-4.jpg",
    description: "A small statement piece for evenings, events, and lighter days.",
    featured: false
  },
  {
    id: 5,
    name: "Belle Clutch",
    category: "clutch",
    price: 121000,
    image: "/images/bag-5.jpg",
    description: "A sleek clutch with a refined look for dinners and special occasions.",
    featured: false
  },
  {
    id: 6,
    name: "Isla Satchel",
    category: "crossbody",
    price: 154000,
    image: "/images/bag-6.jpg",
    description: "A balanced satchel shape that works for office days and weekends.",
    featured: false
  },
  {
    id: 7,
    name: "Wren Shoulder Bag",
    category: "crossbody",
    price: 176000,
    image: "/images/bag-7.jpg",
    description: "A versatile shoulder bag with a neat silhouette and everyday practicality.",
    featured: true
  },
  {
    id: 8,
    name: "Arden Mini Bag",
    category: "mini",
    price: 109000,
    image: "/images/bag-8.jpg",
    description: "Compact, lightweight, and designed for quick plans and minimal carry.",
    featured: false
  },
  {
    id: 9,
    name: "Lyra Clutch",
    category: "clutch",
    price: 129000,
    image: "/images/bag-9.jpg",
    description: "A clean clutch with a modern finish and easy occasion styling.",
    featured: false
  },
  {
    id: 10,
    name: "Sol Tote",
    category: "tote",
    price: 158000,
    image: "/images/bag-10.jpg",
    description: "A practical tote with a simple shape that does not feel bulky.",
    featured: false
  },
  {
    id: 11,
    name: "June Crossbody",
    category: "crossbody",
    price: 113000,
    image: "/images/bag-11.jpg",
    description: "An easy crossbody with an understated look and daily comfort.",
    featured: false
  },
  {
    id: 12,
    name: "Sage Clutch",
    category: "clutch",
    price: 95000,
    image: "/images/bag-12.jpg",
    description: "A refined clutch with a softer profile for casual and formal looks.",
    featured: false
  }
];

export const featuredProducts = products.filter((product) => product.featured);