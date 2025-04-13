
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to elevate your building's vertical transportation?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today for a free consultation and quote. Our expert team is ready 
            to help with all your elevator maintenance, installation, and modernization needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white hover:text-primary hover:bg-white">
              <a href="tel:+15551234567">
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
