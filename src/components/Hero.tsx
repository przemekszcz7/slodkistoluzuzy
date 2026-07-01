import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-36 pb-16 lg:py-0 overflow-hidden bg-gradient-to-tr from-brand-secondary via-white to-brand-bg">
      {/* Abstract luxury background shapes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-primary/30 rounded-full blur-3xl -z-10 animate-pulse duration-[8s]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-extra/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left column: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-4 mb-3"
          >
            <img 
              src="https://i.ibb.co/qMsK2ybd/329726975-3347029348890547-6802246382988494517-n.jpg" 
              alt="Słodki Stół u Zuzy Logo" 
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-full border border-brand-accent/40 object-cover shadow-md"
            />
            <div className="h-px w-16 bg-brand-accent/30 hidden sm:block" />
            <span className="text-sm font-semibold tracking-widest text-brand-accent uppercase font-sans">
              Pracownia tortów
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-brand-dark mb-6 leading-[1.1]"
          >
            Słodki Stół <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-dark font-serif italic font-normal">
              u Zuzy
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-brand-text text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10"
          >
            Tworzę wyjątkowe torty artystyczne, luksusowe słodkie stoły oraz domowe wypieki handmade na najważniejsze chwile w Twoim życiu. Każdy detal dopracowuję z pasją i miłością.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#kontakt" 
              className="px-8 py-4 bg-brand-accent text-white rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-brand-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md text-center flex items-center justify-center gap-2 group"
            >
              <span>Zamów realizację</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#o-nas" 
              className="px-8 py-4 bg-white hover:bg-brand-secondary text-brand-dark border border-brand-accent/20 rounded-full font-semibold text-sm tracking-widest uppercase hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              Dowiedz się więcej
            </a>
          </motion.div>
        </div>

        {/* Right column: Image showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center h-full"
        >
          {/* Creative layout frame */}
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-[3rem] p-4 bg-white shadow-2xl border border-brand-primary/40 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="w-full h-full rounded-[2.3rem] overflow-hidden relative group">
              <img 
                src="https://i.ibb.co/Xxyj972G/545588019-1201438485337580-7571886367284458532-n.jpg" 
                alt="Wspaniały luksusowy tort weselny od Zuzy" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Overlay card for absolute hand-crafted feel */}
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-2xl flex items-center justify-between shadow-lg">
                <div>
                  <h3 className="font-serif text-sm font-semibold text-brand-dark">Torty Weselne Premium</h3>
                  <p className="text-[10px] text-brand-text/80 uppercase tracking-wider font-medium">Realizacja ślubna z różami</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white">
                  <Sparkles size={14} />
                </div>
              </div>
            </div>

            {/* Decorative badges floating around */}
            <div className="absolute -top-6 -right-6 bg-brand-primary text-brand-dark p-4 rounded-full border border-brand-accent shadow-lg text-center hidden sm:block rotate-12">
              <span className="block text-xs font-bold uppercase tracking-wider">100%</span>
              <span className="block text-[10px] uppercase font-semibold">Naturalne</span>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-brand-dark text-white py-3 px-5 rounded-full border border-white/10 shadow-lg text-center hidden sm:block -rotate-6">
              <span className="block text-xs font-semibold tracking-wider">Rękodzieło z Pasją</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
