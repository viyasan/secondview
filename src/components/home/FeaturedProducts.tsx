
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <p className="text-muted-foreground">Featured products will be displayed here.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
