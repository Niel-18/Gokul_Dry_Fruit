import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Products', href: '#products' },
    { name: 'Wholesale', href: '#wholesale' },
    { name: 'About Us', href: '#about' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold/20 py-3'
          : 'bg-ivory/80 backdrop-blur-sm border-b border-sand/60 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
          >
            {/* Monogram Seal */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-walnut flex items-center justify-center border border-gold/40 shadow-xs group-hover:border-gold transition-colors">
              <span className="font-serif text-ivory text-xl sm:text-2xl font-semibold tracking-wider">
                G
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-walnut group-hover:text-gold-dark transition-colors">
                Gokul Dry Fruit
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold-dark font-medium -mt-1">
                Wholesale • Hyderabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-charcoal hover:text-gold-dark transition-colors rounded-sm relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {link.name}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
            
            <a
              href="#location"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ivory bg-walnut hover:bg-walnut-light border border-gold/30 rounded-sm transition-all shadow-xs hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-light" />
              <span>Kavadiguda</span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-walnut hover:text-gold-dark hover:bg-sand/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gold/20 bg-ivory/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-lg transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-walnut hover:text-gold-dark hover:bg-sand/30 rounded-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-sand">
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold uppercase tracking-wider text-ivory bg-walnut hover:bg-walnut-light border border-gold/30 rounded-sm transition-colors text-center"
              >
                <MapPin className="w-4 h-4 text-gold-light" />
                <span>Visit Store • Kavadiguda</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

