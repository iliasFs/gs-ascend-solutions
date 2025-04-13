
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  useEffect(() => {
    // Update title
    document.title = "Contact Us - GS Ascend Solutions";
    
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

  const faqs = [
    {
      question: "How quickly can you respond to an elevator emergency?",
      answer: "Our emergency response team is available 24/7, and we typically respond within 2-4 hours for emergency calls, depending on your service plan and location."
    },
    {
      question: "How often should elevator maintenance be performed?",
      answer: "The frequency of maintenance depends on the elevator type, age, and usage. For most commercial elevators, we recommend monthly maintenance, while residential elevators may require quarterly service."
    },
    {
      question: "Do you offer warranty on your services?",
      answer: "Yes, we provide warranties on all our installation and major repair work. Maintenance services are covered under the terms of your service agreement. Specific warranty periods vary by service type."
    },
    {
      question: "Can you modernize our existing elevator system?",
      answer: "Yes, we specialize in elevator modernization. We can update specific components or perform complete system modernization to improve performance, energy efficiency, and appearance."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Contact Us</h1>
              <p className="text-xl reveal">
                Get in touch with our team to discuss your elevator maintenance needs 
                or request a free quote.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-12">
                <div className="reveal">
                  <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-accent mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-lg">Our Location</h3>
                        <p className="text-muted-foreground">123 Elevator Street, New York, NY 10001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-accent mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-lg">Phone Number</h3>
                        <p className="text-muted-foreground">Main Office: +1 (555) 123-4567</p>
                        <p className="text-muted-foreground">24/7 Emergency: +1 (555) 987-6543</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-accent mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-lg">Email Address</h3>
                        <p className="text-muted-foreground">General Inquiries: contact@gsascend.com</p>
                        <p className="text-muted-foreground">Service Requests: service@gsascend.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-accent mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-lg">Working Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                        <p className="text-muted-foreground mt-2 font-medium">24/7 Emergency Service Available</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="reveal">
                  <h3 className="font-semibold text-lg mb-4">Our Location</h3>
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
              
              {/* Contact Form */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Request */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 reveal">Need Emergency Service?</h2>
              <p className="text-lg text-muted-foreground mb-8 reveal">
                For urgent elevator issues requiring immediate attention, 
                contact our 24/7 emergency service line.
              </p>
              <Button size="lg" asChild className="reveal">
                <a href="tel:+15559876543">
                  Call Emergency Line
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center reveal">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-sm border reveal"
                  >
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
