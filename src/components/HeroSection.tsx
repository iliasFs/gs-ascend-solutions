
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const observer = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.current?.observe(el));

    return () => {
      revealElements.forEach((el) => observer.current?.unobserve(el));
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80)',
          filter: 'brightness(0.4)'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 reveal">
            Elevating Your <span className="text-accent">Experience</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 reveal">
            Premium elevator maintenance, installation, and modernization services 
            with a commitment to safety, reliability, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 reveal">
            <Button size="lg" className="text-lg">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg text-black border-white hover:text-primary hover:bg-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Animated down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="transform rotate-90 text-white w-10 h-10" />
      </div>
    </section>
  );
};

export default HeroSection;
