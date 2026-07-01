import { Phone, MapPin, Facebook, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Or fallback to 2025

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 px-6 md:px-12 border-t border-brand-accent/20 relative overflow-hidden">
      {/* Decorative luxury sparkles on background */}
      <div className="absolute top-10 right-10 text-white/5 animate-pulse duration-[6s]">
        <Sparkles size={120} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/qMsK2ybd/329726975-3347029348890547-6802246382988494517-n.jpg" 
              alt="Słodki Stół u Zuzy Logo" 
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full border border-brand-accent object-cover"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-brand-primary">
                Słodki Stół
              </span>
              <span className="text-[10px] tracking-widest uppercase text-brand-accent font-medium">
                u Zuzy
              </span>
            </div>
          </div>
          <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm">
            Ekskluzywna pracownia tortów artystycznych i słodkich stołów. Tworzymy niezapomniane kulinarne dzieła sztuki na najważniejsze chwile w Twoim życiu.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/slodkistoluzuzy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-accent hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Facebook Profile"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-primary">Pracownia</h4>
          <ul className="space-y-2.5 text-sm text-white/70 font-light">
            <li>
              <a href="#o-nas" className="hover:text-brand-accent transition-colors">O marce</a>
            </li>
            <li>
              <a href="#oferta" className="hover:text-brand-accent transition-colors">Moja oferta</a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-brand-accent transition-colors">Galeria realizacji</a>
            </li>
            <li>
              <a href="#jak-zamowic" className="hover:text-brand-accent transition-colors">Jak zamówić</a>
            </li>
            <li>
              <a href="#kontakt" className="hover:text-brand-accent transition-colors">Skontaktuj się</a>
            </li>
          </ul>
        </div>

        {/* Contact/Location Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-brand-primary">Kontakt & Lokalizacja</h4>
          <ul className="space-y-3.5 text-sm text-white/70 font-light">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-brand-accent mt-0.5 flex-shrink-0" />
              <span>ul. Kaliska 9, 62-710 Władysławów</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-brand-accent flex-shrink-0" />
              <a href="tel:785695095" className="hover:text-brand-accent transition-colors font-semibold">
                785 695 095
              </a>
            </li>
            <li className="pt-2 text-xs text-white/40">
              <span className="block font-semibold text-brand-accent uppercase tracking-wider mb-1">Godziny otwarcia:</span>
              <span className="block">Dopasowane do realizacji zleceń weekendowych.</span>
              <span className="block">Odbiory osobiste po wcześniejszym uzgodnieniu telefonicznym.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright notes */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50 font-light">
        <p>© 2026 Słodki Stół u Zuzy. Wszelkie prawa zastrzeżone.</p>
        <div className="flex gap-4">
          <span>Projekt: Premium Cake Design Studio</span>
          <span>•</span>
          <a href="#o-nas" className="hover:text-brand-accent transition-colors">Regulamin Pracowni</a>
        </div>
      </div>
    </footer>
  );
}
