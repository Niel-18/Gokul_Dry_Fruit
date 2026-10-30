import React from 'react';
import { MapPin, Sparkles, Building, Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-ivory relative overflow-hidden">
      {/* Decorative filigree frame element */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Asymmetrical Editorial Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Outer Antique Gold Outline Frame */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border border-gold/35 rounded-xs pointer-events-none" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xs bg-sand shadow-luxury">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksXl3XdWfwBRhqQfP4Wd5oUmWM88isV8r2PuBOaQ39w&s=10"
                  alt="Dry fruits and nuts arranged elegantly in warm natural lighting"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent opacity-50" />
              </div>

              {/* Floating Stat / Location Tag */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-sand border border-gold/40 p-4 sm:p-5 rounded-xs shadow-luxury max-w-[240px] text-left">
                <p className="text-[10px] uppercase tracking-widest text-gold-dark font-bold">
                  Location Hub
                </p>
                <p className="font-serif text-lg font-semibold text-walnut mt-0.5 leading-snug">
                  Kavadiguda, Hyderabad
                </p>
                <p className="text-xs text-charcoal/70 mt-1">
                  Centrally situated for regional wholesale access.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/60 border border-gold/30 text-walnut mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-walnut">
                About the Business
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-walnut font-medium tracking-tight mb-6">
              A Tradition of Good Taste
            </h2>

            <div className="space-y-4 text-charcoal/85 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                <strong className="font-semibold text-walnut">Gokul Dry Fruit</strong> is a dedicated wholesale dry-fruit business established in Kavadiguda, Hyderabad, Telangana.
              </p>

              <p>
                Serving local businesses, retailers, and commercial buyers, we curate representative wholesale categories including almonds, cashews, pistachios, dates, raisins, and assorted dried fruits essential for confectionery, retail packaging, and culinary food services.
              </p>

              <p>
                Our commercial approach prioritizes straightforward business dealings, attentive service for bulk purchasers, and transparent evaluation of product lots. We believe in building enduring commercial relationships with business owners across the Twin Cities through direct communication and mutual respect.
              </p>
            </div>

            {/* Factual Highlights List */}
            <div className="mt-8 pt-6 border-t border-sand grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sand flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-walnut">Wholesale Distribution</h4>
                  <p className="text-xs text-charcoal/75 mt-0.5">Catering to shops, sweet makers, and resellers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sand flex items-center justify-center text-gold-dark shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-walnut">Kavadiguda Base</h4>
                  <p className="text-xs text-charcoal/75 mt-0.5">Accessible wholesale trade point in central Hyderabad.</p>
                </div>
              </div>
            </div>

            {/* Direct Visit CTA */}
            <div className="mt-8">
              <a
                href="#location"
                className="inline-flex items-center gap-2 text-sm font-semibold text-walnut hover:text-gold-dark transition-colors group"
              >
                <span>Find our location in Kavadiguda</span>
                <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

