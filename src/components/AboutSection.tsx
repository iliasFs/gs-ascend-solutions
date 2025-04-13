
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
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

  const features = [
    'Certified technicians with decades of experience',
    'Modern equipment and diagnostic tools',
    'Manufacturer-approved spare parts',
    '100% compliance with safety regulations',
    'Transparent pricing and no hidden fees',
    'Customized maintenance plans',
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative reveal">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80" 
                alt="About GS Ascend Solutions" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-accent p-6 rounded-lg text-white hidden md:block">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
          
          {/* Content side */}
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-accent">GS Ascend Solutions</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2003, GS Ascend Solutions has established itself as a leader in the elevator maintenance industry. 
              Our team of certified technicians brings decades of combined experience to every project, 
              ensuring the highest standards of safety and performance.
            </p>
            <p className="text-muted-foreground mb-6">
              We believe that reliable vertical transportation is essential for modern buildings, 
              and we're committed to providing services that keep your elevators running smoothly 
              and safely for years to come.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
