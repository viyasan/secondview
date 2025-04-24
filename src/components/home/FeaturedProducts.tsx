
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import ProductGrid from '../products/ProductGrid';

const FeaturedProducts = () => {
  const [products, setProducts] = useState(getFeaturedProducts());

  return (
    <section className="urbanite-section bg-white">
      <div className="urbanite-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Products</h2>
          <Link to="/collections/all" className="flex items-center text-sm font-medium hover:text-urbanite-600 transition-colors">
            View All 
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
