
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductsByCategory, products } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

const categoryLabels: Record<string, string> = {
  'all': 'All Products',
  'men': 'Men\'s Collection',
  'women': 'Women\'s Collection',
  'accessories': 'Accessories'
};

const CollectionPage = () => {
  const { category } = useParams<{category: string}>();
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  useEffect(() => {
    if (!category || category === 'all') {
      setDisplayedProducts(products);
    } else {
      setDisplayedProducts(getProductsByCategory(category));
    }
  }, [category]);

  const categoryTitle = category ? categoryLabels[category] || 'Products' : 'All Products';

  return (
    <Layout>
      <div className="urbanite-container urbanite-section pt-24 md:pt-32">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="urbanite-section-heading mb-2">{categoryTitle}</h1>
            <p className="text-gray-600">{displayedProducts.length} products</p>
          </div>
          
          <Button 
            variant="outline" 
            className="flex items-center md:hidden mt-4"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter size={16} className="mr-2" /> 
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <aside className={`${isMobileFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="space-y-6">
              {/* Price Filter */}
              <div>
                <h3 className="font-medium mb-3">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Under $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$100 - $200</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$200+</span>
                  </label>
                </div>
              </div>
              
              {/* Size Filter */}
              <div>
                <h3 className="font-medium mb-3">Size</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">XS</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">S</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">M</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">L</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">XL</span>
                  </label>
                </div>
              </div>
              
              {/* Color Filter */}
              <div>
                <h3 className="font-medium mb-3">Color</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Black</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">White</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Gray</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Navy</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Beige</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Products */}
          <div className="md:col-span-3">
            <ProductGrid products={displayedProducts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CollectionPage;
