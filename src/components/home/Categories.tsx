
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Categories = () => {
  const navigate = useNavigate();
  
  return (
    <section className="urbanite-section">
      <div className="urbanite-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Men's Category */}
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=800"
              alt="Men's Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="bg-white/90 p-6 max-w-xs">
                <h3 className="text-xl font-semibold mb-2">Men's Collection</h3>
                <p className="text-urbanite-600 mb-4">Minimal essentials for the modern man.</p>
                <Button 
                  onClick={() => navigate('/collections/men')}
                  variant="outline"
                >
                  Shop Men
                </Button>
              </div>
            </div>
          </div>
          
          {/* Women's Category */}
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1525450824786-227cbef70703?auto=format&fit=crop&w=800"
              alt="Women's Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="bg-white/90 p-6 max-w-xs">
                <h3 className="text-xl font-semibold mb-2">Women's Collection</h3>
                <p className="text-urbanite-600 mb-4">Effortless style for everyday living.</p>
                <Button 
                  onClick={() => navigate('/collections/women')}
                  variant="outline"
                >
                  Shop Women
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
