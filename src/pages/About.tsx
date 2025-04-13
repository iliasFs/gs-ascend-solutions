
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Update title
    document.title = "About Us - GS Ascend Solutions";
    
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

  const values = [
    {
      title: 'Safety First',
      description: 'We never compromise on safety standards and regulations.',
    },
    {
      title: 'Quality Service',
      description: 'We strive for excellence in every aspect of our service delivery.',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our dealings.',
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and methods to improve our services.',
    },
  ];

  const teamMembers = [
    {
      name: 'George Smith',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'With over 25 years in the elevator industry, George founded GS Ascend Solutions with a vision to provide exceptional elevator maintenance services.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'Sarah oversees all operational aspects, ensuring our service delivery meets the highest standards of quality and efficiency.',
    },
    {
      name: 'Mark Wilson',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      bio: 'Mark leads our technical team with his extensive knowledge of elevator systems and innovative maintenance techniques.',
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">About Us</h1>
              <p className="text-xl reveal">
                Learn about our journey, our mission, and the team behind 
                GS Ascend Solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="GS Ascend Solutions History" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              
              <div className="reveal">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2003 by George Smith, GS Ascend Solutions began as a small elevator 
                  maintenance company with a team of just three technicians. With a strong focus 
                  on quality service and customer satisfaction, the company quickly gained a 
                  reputation for excellence in the industry.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the past 20 years, we've grown to become a leading provider of elevator 
                  maintenance, installation, and modernization services, now employing over 50 
                  skilled professionals and serving hundreds of buildings across the region.
                </p>
                <p className="text-muted-foreground mb-6">
                  Despite our growth, we've maintained our commitment to personalized service, 
                  treating each client with the same dedication and attention to detail that 
                  has been our hallmark since day one.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/services">
                      Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/projects">
                      View Our Projects
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission and Vision */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-sm reveal">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To provide exceptional elevator maintenance and installation services that 
                  ensure the safety, reliability, and efficiency of vertical transportation 
                  systems in our clients' buildings.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                    <span>Deliver reliable, high-quality service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                    <span>Ensure passenger safety and comfort</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                    <span>Minimize elevator downtime for clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                    <span>Provide transparent, honest service</span>
                  </li>
                </ul>
              </div>
              
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-sm reveal">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground mb-6">
                  To be the most trusted name in elevator maintenance and installation, 
                  recognized for our technical expertise, exceptional service, and unwavering 
                  commitment to safety and reliability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                    <span>Lead the industry in technical innovation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                    <span>Set new standards for customer service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                    <span>Expand our services while maintaining quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5" />
                    <span>Develop the next generation of elevator technicians</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto reveal">
                These principles guide our actions and decisions, shaping our company culture 
                and defining how we interact with clients and each other.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow reveal"
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Our Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto reveal">
                Meet the experienced professionals who lead GS Ascend Solutions and guide 
                our company's strategic direction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm reveal">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-accent mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Certifications & Affiliations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto reveal">
                We maintain the highest industry standards through certifications, 
                training, and professional affiliations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
              <div className="p-6 border rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">ISO</div>
                <p>ISO 9001:2015 Certified</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">ASME</div>
                <p>ASME A17.1 Compliant</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">NAEC</div>
                <p>National Association of Elevator Contractors</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">NEII</div>
                <p>National Elevator Industry, Inc.</p>
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

export default About;
