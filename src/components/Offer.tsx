import { ReactNode } from "react";
import { motion } from "motion/react";
import { Cake, Heart, Sparkles, Cookie, ChevronRight } from "lucide-react";
import { offers } from "../data";

const iconMap: Record<string, ReactNode> = {
  Cake: <Cake size={28} className="text-brand-accent" />,
  Heart: <Heart size={28} className="text-brand-accent" />,
  Sparkles: <Sparkles size={28} className="text-brand-accent" />,
  Cookie: <Cookie size={28} className="text-brand-accent" />,
};

export default function Offer() {
  return (
    <section id="oferta" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative floral elements backgrounds */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-extra/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-accent block mb-2">Moja Oferta</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Słodkie Kreacje Artystyczne
          </h2>
          <div className="h-0.5 w-24 bg-brand-accent mx-auto mb-4" />
          <p className="text-brand-text/90 font-light text-sm sm:text-base">
            Odkryj luksusowe kompozycje smakowe i wizualne stworzone z myślą o Twoim wyjątkowym dniu. Każdy wyrób powstaje na indywidualne zamówienie z naturalnych składników najwyższej jakości.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => {
            return (
              <motion.div 
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-brand-primary/20 flex flex-col justify-between group"
              >
                <div>
                  {/* Clean Icon & Title Header */}
                  <div className="p-8 pb-0 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-secondary flex items-center justify-center shadow-sm border border-brand-primary/30 flex-shrink-0">
                      {iconMap[offer.iconName]}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark tracking-wide">
                      {offer.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 pt-6">
                    <p className="text-brand-text/90 text-sm sm:text-base font-light leading-relaxed mb-6">
                      {offer.description}
                    </p>

                    <div className="space-y-3.5">
                      <h4 className="text-xs uppercase font-bold tracking-widest text-brand-accent mb-4">Co oferujemy w cenie:</h4>
                      {offer.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <ChevronRight size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-brand-text/90 font-light">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer/CTA of Card */}
                <div className="px-6 py-6 sm:px-8 border-t border-brand-primary/10 bg-brand-secondary/15 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-dark uppercase tracking-wider">Luksusowy Standard Handmade</span>
                  <a 
                    href="#kontakt" 
                    className="text-xs font-bold text-brand-accent uppercase tracking-widest hover:text-brand-dark transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300"
                  >
                    <span>Zamów wycenę</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
