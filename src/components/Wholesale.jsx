import React from 'react';
import { Building, Layers, Check, MapPin, ArrowRight, ShieldCheck, Scale } from 'lucide-react';

export default function Wholesale() {
  const businessFocusPoints = [
    {
      icon: Building,
      title: 'Dedicated Wholesale Trade',
      desc: 'Structured to support grocery retailers, departmental stores, sweet & bakery manufacturers, and independent re-packagers looking for regular dry-fruit supplies in Hyderabad.'
    },
    {
      icon: Scale,
      title: 'Standard Commercial Grades',
      desc: 'Dry fruit items are categorized by standard trade grades, kernel sizes, and moisture specifications to provide predictable quality for commercial operations.'
    },
    {
      icon: ShieldCheck,
      title: 'Direct Lot Verification',
      desc: 'We encourage prospective business clients to inspect samples and lot consistency directly at our premises in Kavadiguda prior to finalizing purchasing arrangements.'
    }
  ];

  return (
    <section id="wholesale" className="py-20 md:py-28 bg-walnut text-ivory relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F5EFE4 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Subtle gold line accents */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Area */}
        <div className="max-w-3xl mb-14 md:mb-18 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-walnut-light/80 border border-gold/30 text-gold-light mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
              COMMERCIAL SUPPLY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-medium tracking-tight mb-6">
            Built for Businesses
          </h2>

          <p className="text-ivory/85 text-base sm:text-lg leading-relaxed font-light">
            Gokul Dry Fruit serves as a reliable wholesale partner for businesses in Hyderabad seeking bulk dry fruits. We invite retail buyers, confectionery makers, and commercial resellers to connect with us directly to verify current lot availability, batch quality, and purchasing details.
          </p>
        </div>

        {/* 3 Pillar Cards with Antique Gold Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {businessFocusPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-walnut-dark/80 p-8 rounded-xs border border-gold/25 hover:border-gold/60 transition-colors duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xs bg-walnut-light border border-gold/30 flex items-center justify-center text-gold-light mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-ivory tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ivory/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-walnut-light/70 flex items-center gap-2 text-gold-light text-xs font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Wholesale Focused</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Guidance Panel (No Fake MOQs or Fake Prices) */}
        <div className="p-8 sm:p-10 bg-walnut-light/50 border border-gold/30 rounded-xs shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold-light font-semibold">
                Direct Wholesale Engagement
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
                Transparent Trade &amp; Lot Inquiries
              </h4>
              <p className="text-sm sm:text-base text-ivory/80 leading-relaxed font-light">
                Because dry-fruit rates, origin varieties, and batch arrivals change regularly in the wholesale market, we maintain an open, direct approach with trade buyers. Visit our Kavadiguda establishment to inspect samples, check real-time stock, and finalize purchasing arrangements suited to your enterprise.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="#location"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gold hover:bg-gold-light text-walnut font-semibold text-sm rounded-xs tracking-wide transition-colors shadow-md text-center"
              >
                <MapPin className="w-4 h-4 text-walnut" />
                <span>Visit Store in Kavadiguda</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ivory/90 hover:text-ivory bg-transparent hover:bg-walnut/60 border border-gold/30 rounded-xs transition-colors text-center"
              >
                <span>Read About Gokul Dry Fruit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

