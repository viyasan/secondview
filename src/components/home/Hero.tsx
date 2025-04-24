
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative bg-urbanite-950 text-white h-[90vh] min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600" 
          alt="Urbanite - Minimal Fashion"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-urbanite-950/40 to-urbanite-950/70" />
      </div>
      
      <div className="urbanite-container relative z-10">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in">
            Sustainable Style for Modern Living
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 animate-slide-down">
            Minimalist designs crafted with sustainable materials and ethical manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-white text-urbanite-950 hover:bg-gray-200"
              onClick={() => navigate('/collections/all')}
            >
              Shop Collection
              <ChevronRight size={16} className="ml-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/about')}
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
