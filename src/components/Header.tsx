import { useState, useEffect } from "react";
import { Phone, MapPin, Facebook, Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "O nas", href: "#o-nas" },
    { label: "Oferta", href: "#oferta" },
    { label: "Realizacje", href: "#galeria" },
    { label: "Jak zamówić", href: "#jak-zamowic" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar with quick info (hidden on scroll to maintain compact view) */}
      <div 
        className={`bg-brand-dark text-white text-xs py-2 px-4 transition-all duration-300 flex flex-wrap justify-between items-center gap-2 ${
          scrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="flex items-center gap-4 mx-auto sm:mx-0">
          <a href="tel:785695095" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors">
            <Phone size={13} />
            <span>785 695 095</span>
          </a>
          <span className="hidden sm:inline text-brand-accent">|</span>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} />
            <span>ul. Kaliska 9, Władysławów</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="https://www.facebook.com/slodkistoluzuzy/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 hover:text-brand-primary transition-colors"
          >
            <Facebook size={13} />
            <span>Słodki Stół u Zuzy</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav 
        className={`transition-all duration-300 px-6 md:px-12 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-brand-primary/20" 
            : "bg-brand-bg/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/qMsK2ybd/329726975-3347029348890547-6802246382988494517-n.jpg" 
              alt="Słodki Stół u Zuzy" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-accent object-cover shadow-sm transition-transform duration-500 group-hover:rotate-12"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-brand-dark group-hover:text-brand-accent transition-colors">
                Słodki Stół
              </span>
              <span className="text-[10px] md:text-xs tracking-widest uppercase text-brand-accent font-medium">
                u Zuzy
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="relative text-brand-text font-medium text-sm tracking-wide transition-colors hover:text-brand-accent py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="#kontakt" 
              className="px-5 py-2 bg-brand-accent text-white rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-brand-dark hover:shadow-lg transition-all duration-300"
            >
              Zamów realizację
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-brand-dark hover:text-brand-accent transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 top-[0px] z-40 bg-white/98 transition-all duration-300 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-10"
        }`}
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 text-brand-dark hover:text-brand-accent"
        >
          <X size={30} />
        </button>

        <img 
          src="https://i.ibb.co/qMsK2ybd/329726975-3347029348890547-6802246382988494517-n.jpg" 
          alt="Słodki Stół u Zuzy" 
          referrerPolicy="no-referrer"
          className="w-20 h-20 rounded-full border-2 border-brand-accent object-cover shadow-md mb-6"
        />

        <div className="text-center mb-8">
          <span className="font-serif text-2xl font-bold tracking-wider text-brand-dark block">Słodki Stół</span>
          <span className="text-xs tracking-widest uppercase text-brand-accent font-medium block mt-1">u Zuzy</span>
        </div>

        <div className="flex flex-col gap-6 text-center mb-12">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="font-serif text-xl font-medium text-brand-text hover:text-brand-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a 
          href="#kontakt" 
          onClick={() => setIsOpen(false)}
          className="px-8 py-3.5 bg-brand-accent text-white rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-brand-dark hover:shadow-xl transition-all duration-300 flex items-center gap-2 shadow-md"
        >
          <Sparkles size={16} />
          <span>Zamów realizację</span>
        </a>

        <div className="absolute bottom-8 flex flex-col items-center gap-3">
          <p className="text-xs text-brand-text/60">ul. Kaliska 9, Władysławów</p>
          <a href="tel:785695095" className="text-sm font-semibold text-brand-dark hover:text-brand-accent">
            tel. 785 695 095
          </a>
        </div>
      </div>
    </header>
  );
}
