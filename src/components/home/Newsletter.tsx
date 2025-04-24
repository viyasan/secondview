
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, this would call an API to subscribe the user
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section className="urbanite-section bg-urbanite-900 text-white">
      <div className="urbanite-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Stay in Touch</h2>
          <p className="text-urbanite-200 mb-6">
            Subscribe to our newsletter for exclusive offers, early access to new releases, and sustainable fashion insights.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-urbanite-300"
            />
            <Button type="submit" className="bg-white text-urbanite-900 hover:bg-white/90">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-urbanite-300 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
