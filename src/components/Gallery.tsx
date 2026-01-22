import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Family", "Friends"];

const images = [
  // Family photos (f-1 to f-5)
  { id: 1, category: "Family", src: "/images/family/f-1.jpeg", name: "परिवार" },
  { id: 2, category: "Family", src: "/images/family/f-2.jpeg", name: "परिवार" },
  { id: 3, category: "Family", src: "/images/family/f-3.jpeg", name: "परिवार" },
  { id: 4, category: "Family", src: "/images/family/f-4.jpeg", name: "परिवार" },
  { id: 5, category: "Family", src: "/images/family/f-5.jpeg", name: "परिवार" },
  // Friends photos (friends-1 to friends-3)
  { id: 6, category: "Friends", src: "/images/family/friends-1.jpeg", name: "मित्र" },
  { id: 7, category: "Friends", src: "/images/family/friends-2.jpeg", name: "मित्र" },
  { id: 8, category: "Friends", src: "/images/family/friends-3.jpeg", name: "मित्र" },
];

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [shuffleKey, setShuffleKey] = useState(0);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setShuffleKey(prev => prev + 1);
  };

  // Shuffle filtered images whenever category or shuffleKey changes
  const filteredAndShuffledImages = useMemo(() => {
    const filtered = activeCategory === "All" 
      ? images 
      : images.filter(img => img.category === activeCategory);
    return shuffleArray(filtered);
  }, [activeCategory, shuffleKey]);

  return (
    <section 
      id="gallery" 
      className="py-24 px-4 md:px-8 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at center, rgba(212, 175, 55, 0.03) 0%, transparent 60%),
          linear-gradient(180deg, #0d0505 0%, #0a0303 50%, #0d0505 100%)
        `
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
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
            <span className="text-4xl">📷</span>
          </motion.div>
          <p className="text-wedding-gold font-playfair text-lg tracking-[0.3em] uppercase mb-2">हमारे प्रियजन</p>
          <h2 className="text-4xl md:text-6xl font-great-vibes text-white mb-4 drop-shadow-lg">Our Loved Ones</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-8"
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full font-inter text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-wedding-gold text-black shadow-lg shadow-wedding-gold/20" 
                    : "bg-white/5 text-white/50 border border-white/10 hover:border-wedding-gold/30 hover:text-wedding-gold"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid - Centered with Layout Animation */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredAndShuffledImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                layoutId={`gallery-${img.id}`}
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 0.5) * 200,
                  rotate: (Math.random() - 0.5) * 30,
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.5,
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 0.5) * 200,
                  rotate: (Math.random() - 0.5) * 30,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: index * 0.05,
                }}
                className="relative group w-full max-w-[200px] aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                {/* Image */}
                <img 
                  src={img.src} 
                  alt={img.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Subtle Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Minimal Border */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-wedding-gold/50 rounded-xl transition-colors duration-300" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-great-vibes text-xl text-white drop-shadow-lg">{img.name}</p>
                  <p className="font-inter text-[10px] uppercase tracking-widest text-wedding-gold mt-1">{img.category}</p>
                </div>
                
                {/* Corner Accents on Hover */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-wedding-gold/0 group-hover:border-wedding-gold/60 transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-wedding-gold/0 group-hover:border-wedding-gold/60 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAndShuffledImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-white/30 font-playfair italic">No photos in this category yet</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
