import React from 'react';
import { ArrowRight, MapPin, Sparkles, Building2, Store } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-ivory">
      {/* Subtle background ambient texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38251F 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Decorative antique gold accent corner flourishes */}
      <div className="absolute top-24 left-6 w-16 h-16 border-t border-l border-gold/30 hidden lg:block pointer-events-none" />
      <div className="absolute bottom-10 right-6 w-16 h-16 border-b border-r border-gold/30 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/60 border border-gold/30 text-walnut w-fit mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-berry" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-walnut">
                QUALITY DRY FRUITS • WHOLESALE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-walnut leading-[1.08] tracking-tight mb-6">
              Nature’s Finest.{' '}
              <span className="italic font-normal block sm:inline text-gold-dark">
                Sourced for Your Business.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal/85 max-w-2xl leading-relaxed mb-8 font-normal">
              Explore a selection of dry fruits for retailers, resellers, and businesses in Hyderabad.
            </p>

            {/* Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-walnut hover:bg-walnut-light text-ivory font-medium text-sm rounded-sm tracking-wide transition-all duration-200 border border-gold/40 shadow-luxury hover:shadow-luxury-hover group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-sand/40 text-walnut font-medium text-sm rounded-sm tracking-wide border border-walnut/30 hover:border-walnut transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <MapPin className="w-4 h-4 text-gold-dark" />
                <span>Find Our Location</span>
              </a>
            </div>

            {/* Business Credibility Badges (Factual & Honest) */}
            <div className="pt-8 border-t border-sand/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-walnut uppercase tracking-wider">Wholesale Focus</h2>
                  <p className="text-xs text-charcoal/70">Retailers & Resellers</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Store className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-walnut uppercase tracking-wider">Hyderabad Hub</h2>
                  <p className="text-xs text-charcoal/70">Kavadiguda Location</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-walnut uppercase tracking-wider">Select Varieties</h2>
                  <p className="text-xs text-charcoal/70">Standard Grades</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Art-Directed Dry-Fruit Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Gold framing outline effect */}
              <div className="absolute -inset-3 sm:-inset-4 border border-gold/30 rounded-xs pointer-events-none" />

              {/* Main Curated Dry Fruit Image */}
              <div className="relative overflow-hidden rounded-xs bg-sand/30 shadow-luxury group">
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SquK6J0YO8AsocCzd5zLMF8ZqwVa_dm6hRjlqYi2bjLRmL6aNkVcS4WNKhU0SJWGw0z4W_np1axPNGyVakIMpGbc-OG4NlCbgo8d66occIsXtwcAcOrQFjwjvcUSjnj9zS92vo0iq6V1g=s1360-w1360-h1020-rw"
                  alt="A premium assortment of almonds, cashews, pistachios, dates and dry fruits on warm natural surface"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                // onError={(e) => {
                //   // Safe fallback in case of network constraint
                //   e.currentTarget.src = "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=900&q=80";
                // }}
                />

                {/* Subtle vignette/warm tone gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Editorial Badge on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-ivory/95 backdrop-blur-md border border-gold/30 rounded-xs shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-gold-dark font-semibold">
                        Gokul Dry Fruit
                      </p>
                      <p className="font-serif text-sm sm:text-base font-semibold text-walnut">
                        Wholesale Dry Fruit Selection
                      </p>
                    </div>
                    <span className="text-xs text-charcoal/75 bg-sand/50 px-2.5 py-1 rounded-xs border border-sand">
                      Kavadiguda
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

