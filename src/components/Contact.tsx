import { motion } from "motion/react";
import { Phone, MapPin, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative back blur */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-brand-accent block mb-2">Zapraszam do Kontaktu</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                Porozmawiajmy o słodkościach
              </h2>
              <p className="text-brand-text/90 font-light text-sm sm:text-base leading-relaxed">
                Niezależnie od tego, czy planujesz wystawne wesele, czy kameralne urodziny w gronie najbliższych – stworzę dla Ciebie coś niesamowitego. Zapraszam do kontaktu telefonicznego oraz przez profil na Facebooku. Odpowiem na wszystkie Twoje pytania i pomogę zaplanować idealną oprawę słodką.
              </p>
            </div>

            {/* Quick Contact Details */}
            <div className="space-y-4">
              <a 
                href="tel:785695095" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-brand-secondary/35 border border-brand-primary/35 hover:bg-brand-primary transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-text/60">Zadzwoń bezpośrednio</p>
                  <p className="font-serif font-bold text-brand-dark text-base sm:text-lg">785 695 095</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-secondary/35 border border-brand-primary/35">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-accent shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-text/60">Odbiór zamówień / Adres</p>
                  <p className="font-serif font-bold text-brand-dark text-base sm:text-lg">ul. Kaliska 9, 62-710 Władysławów</p>
                </div>
              </div>

              <a 
                href="https://www.facebook.com/slodkistoluzuzy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-brand-secondary/35 border border-brand-primary/35 hover:bg-brand-primary transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-105 transition-transform">
                  <Facebook size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-brand-text/60">Napisz na Facebooku</p>
                  <p className="font-serif font-bold text-brand-dark text-base sm:text-lg">fb.com/slodkistoluzuzy</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive framed Google Maps embed */}
          <div className="lg:col-span-6">
            <div className="rounded-[2.5rem] overflow-hidden border border-brand-primary/40 shadow-xl h-[450px] relative group">
              <iframe 
                title="Słodki Stół u Zuzy - Mapa dojazdu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.91373507119!2d18.471589177218652!3d52.13594037196024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b072212903e1b%3A0xe7c8dbb5f90bc894!2sKaliska%209%2C%2062-710%20W%C5%82adys%C5%82aw%C3%B3w!5e0!3m2!1spl!2spl!4v1719812425000!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
