
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Wrench, Settings, Shield, Clock, BarChart, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    icon: <Wrench className="h-8 w-8 text-accent" />,
    title: 'Maintenance & Repair',
    description: 'Regular maintenance and prompt repairs to keep your elevators running safely and efficiently.',
  },
  {
    id: 2,
    icon: <Settings className="h-8 w-8 text-accent" />,
    title: 'Installation',
    description: 'Expert installation of new elevator systems for residential and commercial buildings.',
  },
  {
    id: 3,
    icon: <RefreshCw className="h-8 w-8 text-accent" />,
    title: 'Modernization',
    description: 'Update your existing elevator systems with the latest technology and safety features.',
  },
  {
    id: 4,
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: 'Safety Inspections',
    description: 'Comprehensive safety inspections to ensure your elevators meet all regulations.',
  },
  {
    id: 5,
    icon: <Clock className="h-8 w-8 text-accent" />,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency service to address urgent elevator issues.',
  },
  {
    id: 6,
    icon: <BarChart className="h-8 w-8 text-accent" />,
    title: 'Consulting',
    description: 'Expert consulting for elevator system planning, design, and optimization.',
  },
];

const ServicesSection = () => {
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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal">
            We provide comprehensive elevator solutions to keep your vertical transportation 
            systems running smoothly, safely, and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="service-card reveal border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
