
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container pt-32 md:pt-40 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-8">Page not found</p>
      <p className="text-gray-600 text-center max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={() => navigate('/')}>Return to Home</Button>
    </div>
  );
};

export default NotFound;
