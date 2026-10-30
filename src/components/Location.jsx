import React from 'react';
import { MapPin, Compass, Building2, Store, ExternalLink } from 'lucide-react';

export default function Location() {
  const externalMapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Kavadiguda+Hyderabad+Telangana";

  return (
    <section id="location" className="py-20 md:py-28 bg-sand-light/40 relative border-t border-sand">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand border border-gold/30 text-walnut mb-4">
            <MapPin className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-walnut">
              Hyderabad Location
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-walnut font-medium tracking-tight mb-4">
            Find Us in Hyderabad
          </h2>

          <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed">
            Conveniently situated in Kavadiguda, central Hyderabad, serving commercial dry-fruit buyers across the Twin Cities.
          </p>
        </div>

        {/* Clean Luxury Location Panel (No embedded map) */}
        <div className="bg-ivory rounded-xs border border-gold-accent p-8 sm:p-12 shadow-luxury relative overflow-hidden">
          {/* Subtle antique gold corner flourishes */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sand/40 to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/30 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Primary Business Identity Block */}
            <div className="md:col-span-6 space-y-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-walnut flex items-center justify-center text-ivory border border-gold/40 shadow-xs shrink-0">
                  <Store className="w-7 h-7 text-gold-light" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-walnut">
                    Gokul Dry Fruit
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-gold-dark font-medium block mt-0.5">
                    Wholesale Dry Fruits • Hyderabad
                  </span>
                </div>
              </div>

              {/* Verified Address Highlight */}
              <div className="p-5 bg-sand/35 rounded-xs border border-sand/80">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-berry shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-walnut uppercase tracking-wider mb-1">
                      Business Locality
                    </h4>
                    <p className="text-lg font-serif font-bold text-walnut">
                      Kavadiguda
                    </p>
                    <p className="text-sm text-charcoal/80">
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-charcoal/80 leading-relaxed font-light">
                Centrally positioned for trade buyers, retail grocers, and commercial sweet makers across Hyderabad and Secunderabad.
              </p>
            </div>

            {/* Commercial Inquiries & Directions Block */}
            <div className="md:col-span-6 space-y-5 text-left md:border-l md:border-sand md:pl-8 lg:pl-12">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-sand flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-walnut">Central Accessibility</h4>
                  <p className="text-xs text-charcoal/75 mt-1 leading-relaxed">
                    Easily accessible via Secunderabad, Lower Tank Bund, Musheerabad, and RTC Cross Roads commercial corridors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-sand flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-walnut">Wholesale Visits Welcome</h4>
                  <p className="text-xs text-charcoal/75 mt-1 leading-relaxed">
                    Business clients are welcome to visit our Kavadiguda establishment to inspect samples, check lot consistency, and discuss bulk orders.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <a
                  href={externalMapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-walnut hover:bg-walnut-light text-ivory text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shadow-xs group"
                >
                  <span>Open Kavadiguda on Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
