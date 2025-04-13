
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { CheckCircle, Wrench, Settings, Shield, Clock, BarChart, RefreshCw } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    // Update title
    document.title = "Services - GS Ascend Solutions";
    
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

  const mainServices = [
    {
      id: 1,
      icon: <Wrench className="h-16 w-16 text-accent" />,
      title: 'Maintenance & Repair',
      description: 'Our comprehensive maintenance programs are designed to keep your elevators running smoothly and efficiently, minimizing downtime and extending their operational life.',
      features: [
        'Regular preventive maintenance',
        'Prompt emergency repairs',
        'Detailed inspection reports',
        'Replacement of worn parts',
        'Performance optimization',
        'Safety compliance checks',
      ],
    },
    {
      id: 2,
      icon: <Settings className="h-16 w-16 text-accent" />,
      title: 'Installation',
      description: 'From initial consultation to final testing, our installation services ensure your new elevator system is set up correctly, safely, and according to all applicable codes and regulations.',
      features: [
        'New elevator system installation',
        'Capacity and traffic flow analysis',
        'Energy-efficient options',
        'Custom design solutions',
        'Quality material selection',
        'Rigorous testing and certification',
      ],
    },
    {
      id: 3,
      icon: <RefreshCw className="h-16 w-16 text-accent" />,
      title: 'Modernization',
      description: 'Update your existing elevator system with the latest technology to improve performance, energy efficiency, and passenger experience while extending its service life.',
      features: [
        'Control system upgrades',
        'Door operation modernization',
        'Cab interior renovation',
        'Motor and drive system replacement',
        'Safety feature updates',
        'ADA compliance upgrades',
      ],
    },
    {
      id: 4,
      icon: <Shield className="h-16 w-16 text-accent" />,
      title: 'Safety Inspections',
      description: 'Our detailed safety inspections identify potential issues before they become problems, ensuring your elevator system meets or exceeds all safety standards and regulations.',
      features: [
        'Comprehensive safety audits',
        'Regulatory compliance verification',
        'Risk assessment and mitigation',
        'Documentation and certification',
        'Technical recommendations',
        'Follow-up inspections',
      ],
    },
    {
      id: 5,
      icon: <Clock className="h-16 w-16 text-accent" />,
      title: '24/7 Emergency Service',
      description: 'Our emergency response team is available around the clock to address urgent elevator issues, minimizing downtime and ensuring passenger safety.',
      features: [
        'Rapid response times',
        'Elevator entrapment resolution',
        'Emergency shutdown procedures',
        'Temporary repair solutions',
        'On-site technician availability',
        'Priority scheduling for critical systems',
      ],
    },
    {
      id: 6,
      icon: <BarChart className="h-16 w-16 text-accent" />,
      title: 'Consulting',
      description: 'Leverage our expertise for your elevator projects, from initial planning to optimization of existing systems.',
      features: [
        'New construction consulting',
        'System specification development',
        'Cost-benefit analysis',
        'Energy efficiency recommendations',
        'Long-term maintenance planning',
        'Compliance strategy development',
      ],
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Our Services</h1>
              <p className="text-xl reveal">
                Comprehensive elevator solutions to keep your building's vertical 
                transportation running safely and efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 reveal">
                Comprehensive Elevator Services
              </h2>
              <p className="text-lg text-muted-foreground reveal">
                At GS Ascend Solutions, we offer a complete range of elevator services designed 
                to meet the unique needs of residential buildings, commercial properties, 
                and industrial facilities.
              </p>
            </div>

            <div className="space-y-24">
              {mainServices.map((service, index) => (
                <div 
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-secondary p-8 rounded-lg flex justify-center items-center">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Maintenance Plans */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 reveal">Maintenance Plans</h2>
              <p className="text-lg text-muted-foreground reveal">
                Choose the maintenance plan that best fits your building's needs and budget.
                All plans include emergency service and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              {/* Basic Plan */}
              <div className="border rounded-lg overflow-hidden bg-white">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
                  <p className="text-muted-foreground">
                    Essential maintenance for low-traffic elevators.
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Quarterly maintenance visits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Basic safety inspections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Lubrication and adjustment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>48-hour response time</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Standard Plan */}
              <div className="border rounded-lg overflow-hidden bg-white shadow-lg">
                <div className="p-6 border-b bg-primary text-white">
                  <h3 className="text-xl font-bold mb-2">Standard Plan</h3>
                  <p className="text-primary-foreground/90">
                    Comprehensive coverage for medium-traffic elevators.
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Monthly maintenance visits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Comprehensive inspections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Parts replacement included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>24-hour response time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Annual safety certification</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Premium Plan */}
              <div className="border rounded-lg overflow-hidden bg-white">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
                  <p className="text-muted-foreground">
                    Elite service for high-traffic elevators.
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Bi-weekly maintenance visits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Advanced diagnostic testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>All parts and labor included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>4-hour emergency response</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Quarterly performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </div>
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

export default Services;
