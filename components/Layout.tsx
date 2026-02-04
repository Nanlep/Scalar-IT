import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ShieldCheck, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onOpenConsultation: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onOpenConsultation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-scalar-dark bg-white">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm border-scalar-border py-3 shadow-sm' : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
                <NavLink to="/">
                   <Logo />
                </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-sm font-medium transition-colors ${
                      isActive ? 'text-scalar-red font-semibold' : 'text-slate-600 hover:text-scalar-dark'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button 
                variant="primary" 
                size="sm" 
                onClick={onOpenConsultation}
                className="ml-4"
              >
                Request Consultation
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-scalar-dark p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen">
            <div className="pt-2 pb-3 space-y-1 px-4 mt-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-4 text-base font-medium border-b border-gray-50 ${
                      isActive ? 'text-scalar-red' : 'text-slate-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4">
                <Button fullWidth onClick={onOpenConsultation}>
                  Request Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-scalar-dark text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-1 md:col-span-1">
              <Logo className="text-white mb-6 h-8 invert brightness-0" />
              <p className="text-sm leading-6 text-slate-400">
                Enterprise-grade digital infrastructure for governments and regulated industries.
                Secure, compliant, and scalable by design.
              </p>
              <div className="mt-6 flex items-center space-x-2 text-sm text-slate-500">
                <ShieldCheck className="w-4 h-4" />
                <span>ISO 27001 Certified Operations</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li><Link to="/solutions" className="text-sm hover:text-white transition-colors">Financial Infrastructure</Link></li>
                <li><Link to="/solutions" className="text-sm hover:text-white transition-colors">Government Systems</Link></li>
                <li><Link to="/solutions" className="text-sm hover:text-white transition-colors">Enterprise Platforms</Link></li>
                <li><Link to="/solutions" className="text-sm hover:text-white transition-colors">Cloud & Security</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Scalar</Link></li>
                <li><Link to="/about" className="text-sm hover:text-white transition-colors">Leadership</Link></li>
                <li><Link to="/trust" className="text-sm hover:text-white transition-colors">Compliance</Link></li>
                <li><Link to="/careers" className="text-sm hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-scalar-red" />
                    <span>
                        Scalar IT Global HQ<br/>
                        5 Kwaji Close, Maitama<br/>
                        Abuja, Nigeria
                    </span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-scalar-red" />
                    <a href="mailto:enterprise@scalarit.pro" className="hover:text-white transition-colors">enterprise@scalarit.pro</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Scalar IT Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
              <Link to="/sla" className="hover:text-white">SLA</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};