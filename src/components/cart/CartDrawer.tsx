
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const [isRendered, setIsRendered] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => {
        if (!isOpen) setIsRendered(false);
      }, 300); // Match transition duration
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };
  
  if (!isRendered) return null;
  
  const totalPrice = getTotalPrice();
  const shippingPrice = totalPrice >= 75 ? 0 : 5.99;
  const finalPrice = totalPrice + shippingPrice;

  return (
    <>
      <div 
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-background shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
              <ShoppingBag size={64} className="text-gray-300 mb-4" />
              <p className="text-xl font-medium mb-2">Your cart is empty</p>
              <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button onClick={onClose}>Continue Shopping</Button>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-auto p-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={`${item.product.id}-${item.color}-${item.size}`} className="flex gap-4">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="h-20 w-20 object-cover bg-gray-100 flex-shrink-0"
                      />
                      <div className="flex-grow">
                        <h3 className="font-medium text-sm">{item.product.name}</h3>
                        <div className="flex text-sm text-gray-500 mt-1 gap-2">
                          <p>{item.size}</p>
                          <span>•</span>
                          <p>{item.color}</p>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex border border-gray-200 rounded-md">
                            <button 
                              className="px-2 py-0.5"
                              onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            >-</button>
                            <span className="px-2 py-0.5 border-x border-gray-200">{item.quantity}</span>
                            <button 
                              className="px-2 py-0.5"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >+</button>
                          </div>
                          <p className="font-medium">${item.product.price}</p>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-500">Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-500">Shipping</p>
                    <p>{shippingPrice === 0 ? "Free" : `$${shippingPrice.toFixed(2)}`}</p>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <p>Total</p>
                    <p>${finalPrice.toFixed(2)}</p>
                  </div>
                  <Button 
                    className="w-full mt-4"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full mt-2"
                    onClick={onClose}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
