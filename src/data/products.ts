
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Essential Cotton T-Shirt",
    price: 35,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800"
    ],
    category: "men",
    colors: ["Black", "White", "Gray", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Our signature cotton t-shirt made from 100% organic cotton for everyday comfort with minimal environmental impact.",
    details: [
      "100% organic cotton",
      "Regular fit",
      "Crew neck",
      "Pre-shrunk fabric",
      "Made in Portugal"
    ],
    isFeatured: true
  },
  {
    id: "2",
    name: "Relaxed Linen Blazer",
    price: 175,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1541346160430-93fcee38d521?auto=format&fit=crop&w=800"
    ],
    category: "men",
    colors: ["Beige", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Effortlessly elegant blazer crafted from premium European linen. Features a relaxed silhouette for versatile styling.",
    details: [
      "100% European linen",
      "Relaxed fit",
      "Single-breasted design",
      "Two front pockets",
      "Partially lined",
      "Made in Italy"
    ],
    isFeatured: true
  },
  {
    id: "3",
    name: "Wide Leg Trousers",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?auto=format&fit=crop&w=800"
    ],
    category: "women",
    colors: ["Black", "Cream", "Olive"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Elegant wide leg trousers with a high-rise waist. Made from sustainable Tencel™ lyocell fabric with a beautiful drape.",
    details: [
      "100% Tencel™ lyocell",
      "Wide leg fit",
      "High-rise waist",
      "Side pockets",
      "Made in Portugal"
    ],
    isFeatured: true
  },
  {
    id: "4",
    name: "Oversized Wool Sweater",
    price: 145,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800"
    ],
    category: "women",
    colors: ["Cream", "Gray", "Brown"],
    sizes: ["XS/S", "M/L"],
    description: "Cozy oversized sweater made from responsibly sourced merino wool. Features a relaxed fit and ribbed details.",
    details: [
      "100% merino wool",
      "Oversized fit",
      "Ribbed cuffs and hem",
      "Drop shoulders",
      "Made in Scotland"
    ],
    isNew: true
  },
  {
    id: "5",
    name: "Minimalist Canvas Tote",
    price: 85,
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=800"
    ],
    category: "accessories",
    colors: ["Natural", "Black", "Navy"],
    sizes: ["One Size"],
    description: "Durable canvas tote bag with minimal detailing. Features an inner pocket and reinforced straps.",
    details: [
      "Heavy-duty organic cotton canvas",
      "Inner pocket with zipper",
      "Reinforced handles",
      "Water-resistant finish",
      "Made in USA"
    ]
  },
  {
    id: "6",
    name: "Slim Fit Chino Pants",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800"
    ],
    category: "men",
    colors: ["Khaki", "Navy", "Olive", "Black"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Versatile slim fit chino pants made from premium organic cotton twill. Designed for everyday wear with a modern silhouette.",
    details: [
      "98% organic cotton, 2% elastane",
      "Slim fit",
      "Button closure",
      "Side and back pockets",
      "Made in Portugal"
    ],
    isNew: true
  },
  {
    id: "7",
    name: "Silk Button-Up Shirt",
    price: 165,
    images: [
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1584030373081-69b402bd0dde?auto=format&fit=crop&w=800"
    ],
    category: "women",
    colors: ["White", "Black", "Sand"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Luxurious silk button-up shirt with a relaxed fit. Features a classic collar and a slightly longer back hem.",
    details: [
      "100% mulberry silk",
      "Relaxed fit",
      "Mother-of-pearl buttons",
      "Classic collar",
      "Made in Italy"
    ]
  },
  {
    id: "8",
    name: "Leather Minimal Watch",
    price: 210,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1615870123253-f3de8aa89e24?auto=format&fit=crop&w=800"
    ],
    category: "accessories",
    colors: ["Black/Silver", "Brown/Gold", "Tan/Silver"],
    sizes: ["One Size"],
    description: "Sleek, minimal watch crafted with vegetable-tanned leather and a stainless steel case. Featuring Swiss movement.",
    details: [
      "Vegetable-tanned leather strap",
      "Stainless steel case (38mm)",
      "Sapphire crystal glass",
      "Swiss quartz movement",
      "Water resistant to 5 ATM",
      "Handcrafted in Switzerland"
    ],
    isFeatured: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
