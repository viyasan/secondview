
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative product-image-container overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          {product.isNew && (
            <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">
              New
            </div>
          )}
        </div>
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-sm mt-1">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
