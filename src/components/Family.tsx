import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const familyData = [
  {
    id: 'bride',
    image: '/images/family/bride-family.jpeg',
    title: "Bride's Family",
    hindiTitle: 'वधू का परिवार',
    caption: 'The loving family of Apoorva - Mr. Nilkanth & Mrs. Veena Ujjavalkar',
    description: 'United in love, blessed with joy, and celebrating the beginning of a beautiful new chapter.',
  },
  {
    id: 'groom',
    image: '/images/family/grooms-family.jpeg',
    title: "Groom's Family",
    hindiTitle: 'वर का परिवार',
    caption: 'The proud family of Aman - Mr. Shivkumar Nirmalkar',
    description: 'A family bound by traditions, filled with warmth, and ready to welcome a new member.',
  },
];

const Family = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel - always running
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % familyData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + familyData.length) % familyData.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % familyData.length);
  };

  const currentFamily = familyData[currentIndex];

  return (
    <section 
      id="family" 
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(196, 30, 58, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
          linear-gradient(180deg, #1a0a0a 0%, #0d0808 50%, #1a0a0a 100%)
        `
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 border border-wedding-gold/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 border border-wedding-gold/10 rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-4xl">👨‍👩‍👧‍👦</span>
          </motion.div>
          <p className="text-wedding-gold font-hindi text-lg tracking-normal uppercase mb-2">हमारे प्रियजन</p>
          <h2 className="text-4xl md:text-6xl font-great-vibes text-white mb-4 drop-shadow-lg">Our Beloved Families</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-4"
          />
          <p className="text-white/40 font-playfair italic text-sm">
            Two families, one celebration of love
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Carousel Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Image Container - full image on mobile, cropped on desktop */}
            <div className="relative">
              {/* Mobile: Full image with auto height */}
              <img 
                src={currentFamily.image} 
                alt={currentFamily.title}
                className="w-full h-auto md:hidden"
              />
              {/* Desktop: Fixed aspect ratio */}
              <div className="hidden md:block relative aspect-[21/9]">
                <img 
                  src={currentFamily.image} 
                  alt={currentFamily.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
              
              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-4 md:pb-12 px-4">
                {/* Mobile: Only show Hindi title and English title */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-wedding-gold font-hindi text-lg md:text-2xl mb-1 md:mb-2"
                >
                  {currentFamily.hindiTitle}
                </motion.p>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-5xl font-great-vibes text-white mb-1 md:mb-3 drop-shadow-lg"
                >
                  {currentFamily.title}
                </motion.h3>
                
                {/* Desktop only: Show caption with names */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="hidden md:block text-white/90 font-inter text-base font-medium mb-2 text-center px-2"
                >
                  {currentFamily.caption}
                </motion.p>
                
                {/* Desktop only: Show description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="hidden md:block text-white/60 font-playfair italic text-sm max-w-xl text-center"
                >
                  {currentFamily.description}
                </motion.p>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-2 md:inset-4 border border-wedding-gold/20 rounded-xl md:rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Navigation Arrows - Desktop only */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-wedding-gold hover:text-black transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full items-center justify-center text-white hover:bg-wedding-gold hover:text-black transition-all duration-300 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {familyData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-wedding-gold w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/20 font-great-vibes text-xl">
            "Where families unite, love multiplies"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Family;
