import React from 'react';
import { MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Products', href: '#products' },
    { name: 'Wholesale', href: '#wholesale' },
    { name: 'About Us', href: '#about' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <footer className="bg-walnut-dark text-ivory relative border-t border-gold/30">
      {/* Upper Footer Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-walnut border border-gold/40 flex items-center justify-center">
                <span className="font-serif text-ivory text-xl font-bold">G</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-ivory block">
                  Gokul Dry Fruit
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-light font-medium block">
                  Wholesale Dry Fruits
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory/70 leading-relaxed max-w-md font-light mb-6">
              A wholesale dry-fruit business based in Kavadiguda, Hyderabad. Curating representative categories of almonds, cashews, pistachios, dates, raisins, and assorted nuts for retailers and businesses across Telangana.
            </p>

            <div className="flex items-center gap-2 text-xs text-ivory/80">
              <MapPin className="w-4 h-4 text-gold-light shrink-0" />
              <span>Kavadiguda, Hyderabad, Telangana, India</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 lg:col-span-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-light mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-ivory/75 hover:text-gold-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & In-Person Notice Column */}
          <div className="md:col-span-3 lg:col-span-4 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-light mb-4">
              Wholesale Inquiries
            </h4>
            <p className="text-sm text-ivory/75 leading-relaxed mb-4 font-light">
              We welcome prospective wholesale buyers to visit our establishment in Kavadiguda, Hyderabad for lot inspection, sample verification, and commercial purchase discussions.
            </p>
            <div className="p-3.5 bg-walnut/60 border border-gold/20 rounded-xs text-xs text-ivory/70">
              <p className="font-medium text-gold-light mb-1">Direct Commercial Trade</p>
              <p>Lot availability and grade specifications verified on-site.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Back to Top Bar */}
      <div className="border-t border-walnut-light/40 bg-walnut-deep py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <p>
            © {currentYear} Gokul Dry Fruit. Kavadiguda, Hyderabad, Telangana, India. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-gold-light hover:text-ivory transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

