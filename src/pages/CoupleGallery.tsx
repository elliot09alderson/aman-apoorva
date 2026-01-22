import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Gallery images for different categories
const galleryData = {
  bride: {
    title: "Apoorva",
    hindiTitle: "अपूर्वा",
    subtitle: "The Beautiful Bride",
    images: [
      "/images/bride/b-1.jpeg",
      "/images/bride/b-2.jpeg",
      "/images/bride/b-3.jpeg",
      "/images/bride/b-4.jpeg",
      "/images/bride/b-5.jpeg",
      "/images/bride/b-6.jpeg",
    ],
    color: "from-pink-500 to-rose-600",
  },
  groom: {
    title: "Aman",
    hindiTitle: "अमन",
    subtitle: "The Dashing Groom",
    images: [
      "/images/grrom/g-1.jpeg",
      "/images/grrom/g-2.jpeg",
      "/images/grrom/g-4.jpeg",
      "/images/grrom/g-5.jpeg",
    ],
    color: "from-blue-500 to-indigo-600",
  },
  together: {
    title: "Together Forever",
    hindiTitle: "साथ साथ",
    subtitle: "Our Beautiful Moments",
    images: [
      "/images/together-1.jpeg",

      "/images/together-3.jpeg",
      "/images/together-4.jpeg",
      "/images/together-5.jpeg",
      "/images/together-6.jpeg",
      "/images/together-8.jpeg",
      "/images/together-9.jpeg",
      "/images/together-10.jpeg",
      "/images/together-11.jpeg",
    ],
    color: "from-wedding-gold to-amber-600",
  },
};

// Shuffle function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CoupleGallery = () => {
  const { type } = useParams<{ type: 'bride' | 'groom' | 'together' }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [shuffleKey, setShuffleKey] = useState(0);
  
  const gallery = galleryData[type as keyof typeof galleryData];
  
  if (!gallery) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soft-cream">
        <div className="text-center">
          <h1 className="text-4xl font-great-vibes text-gray-800 mb-4">Gallery Not Found</h1>
          <Link to="/" className="text-wedding-gold hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const shuffledImages = useMemo(() => shuffleArray(gallery.images), [type, shuffleKey]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Header */}
      <div className={`relative h-[40vh] bg-gradient-to-r ${gallery.color} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Back Button */}
        <Link 
          to="/#couple"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-inter text-sm">Back</span>
        </Link>

        <div className="relative z-10 text-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white/80 font-hindi text-xl mb-2"
          >
            {gallery.hindiTitle}
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-great-vibes text-white drop-shadow-2xl"
          >
            {gallery.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 font-inter text-sm mt-2 tracking-widest uppercase"
          >
            {gallery.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Shuffle Button */}
      <div className="text-center py-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShuffleKey(prev => prev + 1)}
          className="px-6 py-3 bg-wedding-gold/20 border border-wedding-gold/50 rounded-full text-wedding-gold font-inter text-sm hover:bg-wedding-gold hover:text-black transition-all duration-300"
        >
          🔀 Shuffle Photos
        </motion.button>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {shuffledImages.map((img, index) => (
              <motion.div
                key={`${img}-${shuffleKey}`}
                layout
                initial={{ 
                  opacity: 0, 
                  scale: 0.5,
                  x: (Math.random() - 0.5) * 150,
                  y: (Math.random() - 0.5) * 150,
                  rotate: (Math.random() - 0.5) * 20,
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: index * 0.05,
                }}
                onClick={() => setSelectedImage(img)}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              >
                <img 
                  src={img} 
                  alt={`${gallery.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute inset-0 border border-white/10 group-hover:border-wedding-gold/50 rounded-xl transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute top-6 right-6 text-white text-4xl hover:text-wedding-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoupleGallery;
