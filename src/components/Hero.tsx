import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Countdown from './Countdown';

const Hero = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Start reveal animation after a small delay
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Circle Reveal Animation Overlay */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            className="fixed inset-0 z-[100] bg-soft-cream flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <div id="home" ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Circle Mask Reveal */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: isRevealed ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)" }}
          transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div 
            style={{ y }}
            className="w-full h-full"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: "url('/images/heroSection.png')",
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isRevealed ? 0.2 : 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Main Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          {/* Om Symbol / Auspicious Symbol */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: isRevealed ? 1 : 0, rotate: 0 }}
            transition={{ delay: 0.8, duration: 1, type: "spring" }}
            className="mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-wedding-gold/20 border border-wedding-gold flex items-center justify-center"
          >
            <span className="text-wedding-gold text-3xl md:text-4xl">ॐ</span>
          </motion.div>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isRevealed ? 0 : 20, opacity: isRevealed ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-2xl text-wedding-gold font-playfair tracking-[0.3em] uppercase mb-4"
          >
            Shubh Vivah
          </motion.p>
          
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isRevealed ? 1 : 0.8, opacity: isRevealed ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
            className="text-5xl md:text-8xl lg:text-9xl font-great-vibes text-white mb-4 drop-shadow-2xl"
          >
            Apoorva <span className="text-wedding-gold">&</span> Aman
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isRevealed ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-48 h-[2px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-6"
          />

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isRevealed ? 0 : 30, opacity: isRevealed ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-white/90 font-inter text-lg md:text-xl tracking-wide"
          >
            <p className="font-playfair italic text-xl md:text-2xl">Save the Date</p>
            <p className="mt-2 text-3xl md:text-4xl font-playfair text-wedding-gold">
              5th February 2026
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <Countdown />

          {/* Venue Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isRevealed ? 1 : 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-8 text-white/70 font-inter text-sm tracking-widest uppercase"
          >
            <span className="text-wedding-gold">📍</span> Hotel Reyansh Gold, Takhatpur, Balod (C.G.)
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isRevealed ? 1 : 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
        >
          <span className="text-xs tracking-widest mb-2 font-inter">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
