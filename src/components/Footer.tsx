
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import GSLogo from './GSLogo';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <GSLogo className="text-white" />
            <p className="mt-4 text-sm">
              Providing premium elevator installation, maintenance, and repair services since 2005.
              We promise reliability, safety, and excellence in every project.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-accent transition-colors">Elevator Installation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Maintenance & Repair</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Modernization</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">24/7 Emergency Service</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Safety Inspections</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>contact@gsascend.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>123 Elevator Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>Mon-Fri: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8 text-sm text-center md:flex md:justify-between">
          <p>© {new Date().getFullYear()} GS Ascend Solutions. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-accent transition-colors mr-4">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
