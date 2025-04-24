
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StorySection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="urbanite-section bg-urbanite-50">
      <div className="urbanite-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="urbanite-section-heading">Sustainable by Design</h2>
            <p className="text-urbanite-600 mb-6">
              At Urbanite, we believe in creating clothing that lasts. Our commitment to sustainability shapes every decision we make, from selecting eco-friendly fabrics to ensuring ethical manufacturing processes.
            </p>
            <p className="text-urbanite-600 mb-6">
              Each piece is carefully designed to be timeless, transcending seasonal trends and becoming a staple in your wardrobe for years to come.
            </p>
            <Button 
              onClick={() => navigate('/about')}
              variant="outline"
              className="border-urbanite-900"
            >
              Learn About Our Story
            </Button>
          </div>
          
          <div className="aspect-square relative">
            <img 
              src="https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800" 
              alt="Sustainable fashion production" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
