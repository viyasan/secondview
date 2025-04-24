
export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  colors: string[];
  sizes: string[];
  description: string;
  details: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
  size: string;
}
