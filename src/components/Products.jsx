import React, { useState } from 'react';
import { productCategories } from '../data/products';
import { Info, Sparkles, CheckCircle2, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="products" className="py-20 md:py-28 bg-sand-light/50 relative border-t border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand border border-gold/30 text-walnut mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-walnut">
              Wholesale Portfolio
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-walnut font-medium tracking-tight mb-5">
            A Selection of Nature’s Finest
          </h2>

          <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed">
            Carefully presented categories suited for retailers, commercial confectioners, and bulk dry-fruit buyers in the Hyderabad region.
          </p>

          {/* Factual Disclaimer Banner (Strictly truthful) */}
          <div className="mt-6 inline-flex items-start sm:items-center gap-2.5 px-4 py-2.5 bg-ivory/80 border border-gold/25 rounded-sm text-left max-w-2xl text-xs text-charcoal/85 shadow-xs">
            <Info className="w-4 h-4 text-gold-dark shrink-0 mt-0.5 sm:mt-0" />
            <p>
              <strong className="font-semibold text-walnut">Note for Wholesale Buyers:</strong>{' '}
              The items below reflect representative product categories. Specific grades, varieties, and stock levels fluctuate with seasonal trade.
            </p>
          </div>
        </div>

        {/* Product Grid - Visual Variation & Luxury Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {productCategories.map((item, index) => (
            <article
              key={item.id || item.name || index}
              className="group bg-ivory rounded-xs border border-gold-accent hover:border-gold/70 transition-all duration-300 shadow-luxury hover:shadow-luxury-hover flex flex-col overflow-hidden"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/40">
                <img
                  src={item.image || "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80"}
                  alt={item.alt || item.name || "Gokul Dry Fruit"}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
                  loading="lazy"
                // onError={(e) => {
                //   e.currentTarget.src = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80";
                // }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge / Vernacular */}
                {item.vernacular && (
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ivory bg-walnut/90 backdrop-blur-xs border border-gold/30 rounded-xs">
                      {item.vernacular}
                    </span>
                  </div>
                )}

                {item.tagline && (
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-ivory">
                    <span className="text-xs font-medium tracking-wide text-ivory/95 drop-shadow-xs">
                      {item.tagline}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl font-semibold text-walnut tracking-tight group-hover:text-gold-dark transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-sm text-charcoal/80 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Typical Formats / Forms Available in Wholesale */}
                <div className="pt-4 border-t border-sand/70">
                  {item.forms && item.forms.length > 0 && (
                    <>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-dark mb-2">
                        Representative Forms & Grades
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.forms.map((form) => (
                          <span
                            key={form}
                            className="inline-flex items-center text-[11px] px-2.5 py-1 rounded-xs bg-sand/40 text-walnut border border-sand"
                          >
                            {form}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-charcoal/60 italic">
                      Representative category
                    </span>
                    <a
                      href="#wholesale"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-gold-dark hover:text-walnut transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      <span>Wholesale details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom Wholesale Availability Notice */}
        <div className="mt-14 p-6 sm:p-8 bg-ivory rounded-xs border border-gold-accent max-w-4xl mx-auto shadow-xs text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-walnut font-medium">
              Looking for specific dry-fruit grades or bulk quantities?
            </h4>
            <p className="text-sm text-charcoal/80 mt-1">
              Visit our business premises in Kavadiguda, Hyderabad to verify current lot availability, quality, and wholesale transaction terms.
            </p>
          </div>
          <a
            href="#location"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory bg-walnut hover:bg-walnut-light border border-gold/40 rounded-xs transition-colors"
          >
            <span>Visit Store</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold-light" />
          </a>
        </div>

      </div>
    </section>
  );
}

