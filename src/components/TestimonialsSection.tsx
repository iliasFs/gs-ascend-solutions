
import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Robert Johnson',
    role: 'Facility Manager, Skyline Tower',
    content:
      "GS Ascend Solutions has been maintaining our elevators for over 5 years now. Their response time is excellent, and their technicians are both knowledgeable and professional. I highly recommend their services.",
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    role: 'Property Manager, The Grand Residences',
    content:
      "After switching to GS Ascend Solutions, we've seen a dramatic decrease in elevator downtime. Their preventive maintenance program has saved us thousands in potential repairs.",
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Building Supervisor, Tech Plaza',
    content:
      "The team at GS Ascend was instrumental in modernizing our outdated elevator systems. The project was completed on time and on budget, with minimal disruption to our tenants.",
  },
];

const TestimonialsSection = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal">
            Don't just take our word for it. Here's what our clients have to say about 
            our elevator maintenance and installation services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="reveal border border-border/50 shadow-sm"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-accent/20" />
                </div>
                <p className="mb-6 italic">{testimonial.content}</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
