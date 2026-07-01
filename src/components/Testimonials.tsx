import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elegant circles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-accent block mb-2">Opinie Klientów</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Słodkie Wspomnienia
          </h2>
          <div className="h-0.5 w-24 bg-brand-accent mx-auto mb-4" />
          <p className="text-brand-text/90 font-light text-sm">
            Największą nagrodą za moją pracę jest uśmiech zadowolonych klientów i ich gości. Przeczytaj opinie osób, które zaufały mojej pracowni.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-brand-secondary/20 p-8 sm:p-10 rounded-[2.5rem] border border-brand-primary/20 flex flex-col justify-between relative group hover:bg-white hover:shadow-xl hover:border-brand-accent/30 transition-all duration-300"
            >
              {/* Quote icon background decoration */}
              <div className="absolute top-6 right-8 text-brand-accent/15 group-hover:text-brand-accent/25 transition-colors duration-300">
                <Quote size={48} className="transform rotate-180" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                {/* Text quote */}
                <p className="text-brand-text/90 font-serif italic text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                  „{testimonial.text}”
                </p>
              </div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
