import { motion } from "motion/react";
import { Heart, Sparkles, Award, ShieldCheck } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Heart size={20} className="text-brand-accent" />,
      title: "Ręczne Wykonanie (Handmade)",
      description: "Każdy element dekoracji, makaronik czy biszkopt powstaje w naszej pracowni od absolutnych podstaw."
    },
    {
      icon: <Sparkles size={20} className="text-brand-accent" />,
      title: "Najwyższa Estetyka",
      description: "Inspirujemy się najnowszymi światowymi trendami wedding & cake design, by tworzyć prawdziwe dzieła sztuki."
    },
    {
      icon: <Award size={20} className="text-brand-accent" />,
      title: "Wyjątkowy Smak",
      description: "Łączymy tradycyjne, sprawdzone receptury z nowoczesnymi nutami smakowymi, dbając o idealny balans słodyczy."
    },
    {
      icon: <ShieldCheck size={20} className="text-brand-accent" />,
      title: "Indywidualne Podejście",
      description: "Dopasujemy rozmiar, smaki oraz design wypieków pod motyw przewodni, kolorystykę i budżet Twojej uroczystości."
    }
  ];

  return (
    <section id="o-nas" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Grid of Beautiful Visuals */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="rounded-[2rem] overflow-hidden shadow-md aspect-[3/4] border border-brand-primary/20">
                  <img 
                    src="https://i.ibb.co/3mbKFDbM/669559856-18574719358052541-6675714136337149298-n.jpg" 
                    alt="Praca nad tortem z owocami" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-md aspect-square border border-brand-primary/20">
                  <img 
                    src="https://i.ibb.co/bjMJD5mS/668706300-1375420324606061-6331811172392480912-n.jpg" 
                    alt="Luksusowe złocone makaroniki" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 pt-12"
              >
                <div className="rounded-[2rem] overflow-hidden shadow-md aspect-square border border-brand-primary/20">
                  <img 
                    src="https://i.ibb.co/5xtJZkwK/662301240-18574719385052541-6487700578515695446-n.jpg" 
                    alt="Monodesery truskawkowe premium" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-md aspect-[3/4] border border-brand-primary/20">
                  <img 
                    src="https://i.ibb.co/cckY1mjd/669039051-1375420341272726-4561153364590735908-n.jpg" 
                    alt="Tort weselny u Zuzy" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Premium Copywriting */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-xs uppercase font-bold tracking-widest text-brand-accent block mb-2">Moja Pasja, Twój Wyjątkowy Dzień</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
                Tworzone z pasją <br />i sercem
              </h2>
              <p className="text-brand-text font-light text-base sm:text-lg leading-relaxed mb-6">
                Witaj w moim słodkim świecie! Nazywam się Zuza i jestem założycielką pracowni. Słodki Stół u Zuzy powstał z miłości do piękna i wyjątkowego smaku. Wierzę, że tort to nie tylko wypiek, lecz kulminacyjny moment każdego ważnego święta – wesela, rocznicy, chrzcin czy urodzin.
              </p>
              <p className="text-brand-text font-light text-base sm:text-lg leading-relaxed">
                W mojej cukierniczej pracowni artystycznej we Władysławowie rezygnuję z gotowych mieszanek cukierniczych i sztucznych barwników na rzecz prawdziwego masła, świeżych owoców, belgijskiej czekolady i jadalnych kwiatów. Każde zamówienie to osobna historia pisana z dbałością o każdy detal wizualny i smakowy.
              </p>
            </motion.div>

            {/* Grid of Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-brand-secondary/40 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-sm text-brand-dark mb-1">{item.title}</h4>
                    <p className="text-xs text-brand-text/80 font-light leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
