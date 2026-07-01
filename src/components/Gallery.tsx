import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye, X } from "lucide-react";
import { galleryItems } from "../data";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Pagination logic: default to 8, or all if expanded
  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, 8);

  const openLightbox = (id: number) => {
    const index = galleryItems.findIndex(item => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-extra/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-accent block mb-2">Galeria Pracowni</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Moje Słodkie Realizacje
          </h2>
          <div className="h-0.5 w-24 bg-brand-accent mx-auto mb-4" />
          <p className="text-brand-text/90 font-light text-sm sm:text-base">
            Zobacz galerię tortów i deserów wykonanych w 100% ręcznie. Kliknij wybrane zdjęcie, aby przyjrzeć się bliżej precyzyjnemu wykończeniu i detalom dekoracji.
          </p>
        </div>

        {/* Masonry Layout Grid */}
        <div className="gallery-masonry">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="gallery-item group relative cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                <div className="relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl border border-brand-primary/20 transition-all duration-500 bg-brand-bg group-hover:scale-[1.01]">
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full object-cover h-auto max-h-[600px] transition-transform duration-[8s] ease-out group-hover:scale-105"
                  />
                  {/* Elegant overlay - no text, pure focus on photography */}
                  <div className="absolute inset-0 bg-brand-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-12">
          {galleryItems.length > 8 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 bg-brand-accent text-white hover:bg-brand-dark rounded-full font-semibold text-xs tracking-widest uppercase hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md inline-flex items-center gap-2"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>{showAll ? "Pokaż mniej realizacji" : "Pokaż więcej realizacji"}</span>
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-md flex flex-col justify-between p-6"
          >
            {/* Header */}
            <div className="flex justify-end items-center w-full max-w-7xl mx-auto">
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image content */}
            <div className="flex-1 flex justify-center items-center my-6 max-h-[75vh]">
              <button
                onClick={prevImage}
                className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xl font-bold z-10"
              >
                &#8592;
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={galleryItems[lightboxIndex].url}
                alt={galleryItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              <button
                onClick={nextImage}
                className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xl font-bold z-10"
              >
                &#8594;
              </button>
            </div>

            {/* Footer with counts */}
            <div className="text-center w-full text-white/60 text-xs tracking-wider">
              Realizacja {lightboxIndex + 1} z {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
