import { motion } from "motion/react";
import { Phone, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-secondary via-brand-primary/20 to-brand-bg relative overflow-hidden">
      {/* Decorative luxury back blur or sparkle elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 backdrop-blur-sm -z-10" />
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent/25 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-extra/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Sparkle star icon */}
          <div className="w-16 h-16 bg-white border border-brand-accent/20 rounded-full flex items-center justify-center mx-auto shadow-md">
            <Sparkles size={24} className="text-brand-accent animate-pulse" />
          </div>

          <span className="text-xs uppercase font-bold tracking-widest text-brand-accent block">Darmowa Wycena Terminów Ślubnych</span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
            Stwórzmy razem <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-dark">coś wyjątkowego</span>
          </h2>

          <p className="text-brand-text text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Każdy tort, każde ciasto i każdy słodki stół w mojej pracowni powstaje z pasją, starannością i dbałością o najmniejszy detal smakowy oraz wizualny. Pozwól mi osłodzić Twoje najpiękniejsze chwile!
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:785695095" 
              className="px-10 py-5 bg-brand-accent hover:bg-brand-dark text-white rounded-full font-semibold text-sm tracking-widest uppercase hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 w-full sm:w-auto relative group"
            >
              {/* Pulsing decoration circle inside button */}
              <span className="absolute -inset-1 rounded-full bg-brand-accent/30 scale-100 group-hover:scale-105 transition-all -z-10 duration-500 opacity-0 group-hover:opacity-100" />
              <Phone size={16} className="animate-bounce" />
              <span>Zadzwoń teraz</span>
            </a>
            
            <a 
              href="#kontakt" 
              className="px-10 py-5 bg-white hover:bg-brand-secondary text-brand-dark border border-brand-accent/20 rounded-full font-semibold text-sm tracking-widest uppercase hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              Napisz wiadomość
            </a>
          </div>

          {/* Prompt warning of natural limited weekend spaces */}
          <p className="text-[11px] text-brand-text/70 uppercase tracking-widest font-semibold pt-4">
            * Ograniczona liczba miejsc na realizacje w weekendy letnie 2026/2027!
          </p>

        </motion.div>
      </div>
    </section>
  );
}
