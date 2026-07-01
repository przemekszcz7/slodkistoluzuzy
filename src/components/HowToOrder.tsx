import { motion } from "motion/react";
import { ClipboardList, CalendarDays, Wallet, Clock, Settings, AlertTriangle, CheckSquare } from "lucide-react";
import { orderSteps } from "../data";

const stepIcons = [
  <ClipboardList size={22} className="text-brand-accent" />,
  <CalendarDays size={22} className="text-brand-accent" />,
  <Wallet size={22} className="text-brand-accent" />,
  <Clock size={22} className="text-brand-accent" />,
  <Settings size={22} className="text-brand-accent" />,
  <AlertTriangle size={22} className="text-brand-accent" />,
  <CheckSquare size={22} className="text-brand-accent" />,
];

export default function HowToOrder() {
  return (
    <section id="jak-zamowic" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Abstract subtle decoration background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[80%] border-l-2 border-dashed border-brand-accent/20 -z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-accent block mb-2">Jak Zamawiać</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Proces Składania Zamówień
          </h2>
          <div className="h-0.5 w-24 bg-brand-accent mx-auto mb-4" />
          <p className="text-brand-text/90 font-light text-sm sm:text-base">
            Droga do wymarzonego tortu i słodkiego stołu w 7 przejrzystych krokach. Przeczytaj zasady współpracy w naszej pracowni, aby usprawnić realizację Twojego zamówienia.
          </p>
        </div>

        {/* Timeline list of cards */}
        <div className="space-y-12">
          {orderSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Step Number Circle */}
                <div className="lg:w-1/12 flex justify-center items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-accent flex items-center justify-center text-brand-dark font-serif text-xl font-bold shadow-md z-10 relative group-hover:scale-105 transition-transform">
                      {step.id}
                    </div>
                    {/* Decorative ring around the circle */}
                    <div className="absolute inset-0 rounded-full border border-brand-accent/30 scale-125 animate-pulse" />
                  </div>
                </div>

                {/* Card block */}
                <div className="w-full lg:w-11/12">
                  <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-brand-primary/20 hover:border-brand-accent/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
                    
                    {/* Icon section */}
                    <div className="w-12 h-12 rounded-2xl bg-brand-secondary/40 flex items-center justify-center flex-shrink-0">
                      {stepIcons[index]}
                    </div>

                    {/* Content text section */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 mb-2">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark">
                          {step.title}
                        </h3>
                        <span className="text-xs text-brand-accent font-semibold tracking-wider uppercase">
                          • {step.subtitle}
                        </span>
                      </div>
                      <p className="text-brand-text/90 text-sm font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer info note */}
        <div className="mt-16 bg-brand-primary/20 border border-brand-accent/30 p-6 sm:p-8 rounded-[2.5rem] max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-brand-dark font-semibold uppercase tracking-wider mb-2">
            Masz pytania lub nietypowy pomysł na zamówienie?
          </p>
          <p className="text-xs sm:text-sm text-brand-text/90 font-light mb-4">
            Zawsze z przyjemnością odpowiem na Twoje pytania i doradzę najlepsze rozwiązania dopasowane do charakteru imprezy.
          </p>
          <a 
            href="tel:785695095" 
            className="text-sm font-bold text-brand-dark hover:text-brand-accent underline underline-offset-4 transition-colors"
          >
            Zadzwoń bezpośrednio: 785 695 095
          </a>
        </div>

      </div>
    </section>
  );
}
