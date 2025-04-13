
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Update title
    document.title = "GS Ascend Solutions - Elevator Maintenance Services";
    
    // Animation observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <StatsSection />
        <TestimonialsSection />
        
        {/* Contact Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Contact Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto reveal">
                Get in touch with our team to discuss your elevator maintenance needs 
                and receive a free quote.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8 reveal">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">123 Elevator Street, New York, NY 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-accent mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-accent mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">contact@gsascend.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-accent mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Working Hours</p>
                        <p className="text-muted-foreground">Mon-Fri: 8am - 6pm</p>
                        <p className="text-muted-foreground">24/7 Emergency Service Available</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894616!2d-74.11976373946229!3d40.69766374932085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="GS Ascend Solutions location"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
