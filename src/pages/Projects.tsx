
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Skyline Tower',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80',
    description: 'Complete modernization of 8 high-speed elevators in this 42-story office building, including new control systems, motors, and cab interiors.',
  },
  {
    id: 2,
    title: 'Grand Residences',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    description: 'Installation of 4 new residential elevators with enhanced energy efficiency features and smart building integration.',
  },
  {
    id: 3,
    title: 'Central Hospital',
    category: 'healthcare',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80',
    description: 'Maintenance and upgrade of 12 elevators and 4 service lifts, ensuring 24/7 reliability for this critical healthcare facility.',
  },
  {
    id: 4,
    title: 'Westfield Mall',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80',
    description: 'Installation and ongoing maintenance of 10 escalators and 6 panoramic elevators in this busy shopping center.',
  },
  {
    id: 5,
    title: 'Marina Apartments',
    category: 'residential',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80',
    description: 'Replacement of outdated elevator systems with new energy-efficient models in this luxury waterfront residential complex.',
  },
  {
    id: 6,
    title: 'Tech Innovation Center',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
    description: 'Installation of 6 high-speed elevators with biometric access control and destination dispatch systems.',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    // Update title
    document.title = "Projects - GS Ascend Solutions";
    
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

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Our Projects</h1>
              <p className="text-xl reveal">
                Explore our portfolio of elevator installation, modernization, and maintenance projects 
                across various building types.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'} 
                onClick={() => setFilter('all')}
              >
                All Projects
              </Button>
              <Button 
                variant={filter === 'commercial' ? 'default' : 'outline'} 
                onClick={() => setFilter('commercial')}
              >
                Commercial
              </Button>
              <Button 
                variant={filter === 'residential' ? 'default' : 'outline'} 
                onClick={() => setFilter('residential')}
              >
                Residential
              </Button>
              <Button 
                variant={filter === 'healthcare' ? 'default' : 'outline'} 
                onClick={() => setFilter('healthcare')}
              >
                Healthcare
              </Button>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow reveal"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-accent mb-3 uppercase">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </p>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Our Project Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto reveal">
                We follow a structured approach to ensure every project is completed efficiently, 
                safely, and to the highest standards.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-primary transform -translate-x-1/2"></div>
                
                {/* Steps */}
                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 reveal">
                    <div className="md:col-span-2 md:text-right flex md:block items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 md:ml-auto">1</div>
                      <h3 className="text-xl font-semibold ml-4 md:ml-0 md:mt-4">Initial Consultation</h3>
                    </div>
                    <div className="md:col-span-3 pl-12 md:pl-0">
                      <p>We begin by understanding your specific needs, assessing your building, and discussing your elevator requirements and budget constraints.</p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 reveal">
                    <div className="md:col-span-2 md:text-right flex md:block items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 md:ml-auto">2</div>
                      <h3 className="text-xl font-semibold ml-4 md:ml-0 md:mt-4">Design & Planning</h3>
                    </div>
                    <div className="md:col-span-3 pl-12 md:pl-0">
                      <p>Our engineering team develops detailed plans and specifications, ensuring compliance with all relevant building codes and standards.</p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 reveal">
                    <div className="md:col-span-2 md:text-right flex md:block items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 md:ml-auto">3</div>
                      <h3 className="text-xl font-semibold ml-4 md:ml-0 md:mt-4">Proposal & Agreement</h3>
                    </div>
                    <div className="md:col-span-3 pl-12 md:pl-0">
                      <p>We provide a comprehensive proposal outlining the scope of work, timeline, and costs, followed by a detailed contract once terms are agreed upon.</p>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 reveal">
                    <div className="md:col-span-2 md:text-right flex md:block items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 md:ml-auto">4</div>
                      <h3 className="text-xl font-semibold ml-4 md:ml-0 md:mt-4">Implementation</h3>
                    </div>
                    <div className="md:col-span-3 pl-12 md:pl-0">
                      <p>Our skilled technicians execute the project with minimal disruption to your building's operations, following strict safety protocols.</p>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 reveal">
                    <div className="md:col-span-2 md:text-right flex md:block items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 md:ml-auto">5</div>
                      <h3 className="text-xl font-semibold ml-4 md:ml-0 md:mt-4">Testing & Certification</h3>
                    </div>
                    <div className="md:col-span-3 pl-12 md:pl-0">
                      <p>We conduct rigorous testing to ensure all systems meet safety standards and obtain necessary certifications and approvals.</p>
                    </div>
                  </div>
                  
                  {/* Step 6 */}
                  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 reveal">
                    <div className="md:col-span-2 md:text-right flex md:block items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 md:ml-auto">6</div>
                      <h3 className="text-xl font-semibold ml-4 md:ml-0 md:mt-4">Handover & Maintenance</h3>
                    </div>
                    <div className="md:col-span-3 pl-12 md:pl-0">
                      <p>We provide training on system operation, complete documentation, and offer ongoing maintenance services to ensure long-term performance.</p>
                    </div>
                  </div>
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

export default Projects;
