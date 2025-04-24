
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { getProductById } from '@/data/products';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="urbanite-container urbanite-section text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/collections/all')}>
          Browse All Products
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="urbanite-container urbanite-section pt-24 md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="flex flex-col gap-4">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-auto aspect-square object-cover bg-gray-100"
          />
          {product.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${product.name} - view ${index + 2}`}
                  className="w-full h-auto aspect-square object-cover bg-gray-100" 
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>
          <p className="text-xl mt-2">${product.price}</p>

          <p className="mt-6 text-urbanite-600">{product.description}</p>

          {/* Color Selection */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold mb-3">COLOR: {selectedColor}</h3>
            <RadioGroup 
              value={selectedColor} 
              onValueChange={setSelectedColor}
              className="flex gap-2"
            >
              {product.colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                  <Label 
                    htmlFor={`color-${color}`}
                    className="rounded-full h-8 w-8 border border-urbanite-200 peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-black cursor-pointer flex items-center justify-center text-xs"
                  >
                    {color.charAt(0)}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Size Selection */}
          <div className="mt-6">
            <div className="flex justify-between mb-3">
              <h3 className="text-sm font-semibold">SIZE: {selectedSize}</h3>
              <button className="text-sm text-urbanite-600 underline">Size Guide</button>
            </div>
            <RadioGroup 
              value={selectedSize} 
              onValueChange={setSelectedSize}
              className="flex flex-wrap gap-2"
            >
              {product.sizes.map((size) => (
                <div key={size} className="flex items-center">
                  <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                  <Label 
                    htmlFor={`size-${size}`}
                    className="border border-urbanite-200 h-10 min-w-10 px-3 rounded-md flex items-center justify-center peer-data-[state=checked]:border-black peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white cursor-pointer"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Quantity Selection */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold mb-3">QUANTITY</h3>
            <div className="flex border border-urbanite-200 rounded-md w-36">
              <button 
                onClick={decrementQuantity}
                className="flex-1 py-2 flex justify-center items-center border-r border-urbanite-200"
              >
                <Minus size={16} />
              </button>
              <span className="flex-1 py-2 flex justify-center items-center">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                className="flex-1 py-2 flex justify-center items-center border-l border-urbanite-200"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add To Cart Button */}
          <Button 
            onClick={handleAddToCart}
            className="mt-8 w-full h-12 text-base"
          >
            Add to Cart
          </Button>

          <Separator className="my-8" />

          {/* Product Details */}
          <Tabs defaultValue="details">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm text-urbanite-600">• {detail}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6">
              <div className="text-sm text-urbanite-600 space-y-4">
                <p>Free shipping on all orders over $75.</p>
                <p>Standard shipping (3-5 business days) for $5.99.</p>
                <p>Express shipping (1-2 business days) for $12.99.</p>
                <p>Free returns within 30 days of delivery.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
