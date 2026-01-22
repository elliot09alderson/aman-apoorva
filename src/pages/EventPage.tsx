import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { rituals } from '../data/rituals';

const EventPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const event = rituals.find(r => r.id === eventId);
  
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soft-cream">
        <div className="text-center">
          <h1 className="text-4xl font-great-vibes text-gray-800 mb-4">Event Not Found</h1>
          <Link to="/" className="text-wedding-gold hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-cream">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] md:h-[70vh] overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
        {/* Back Button */}
        <Link 
          to="/#rituals"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-inter text-sm">Back</span>
        </Link>

        {/* Event Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl mb-2"
          >
            {event.icon}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-wedding-gold font-hindi text-3xl md:text-4xl mb-2"
          >
            {event.hindiTitle}
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-great-vibes text-white drop-shadow-2xl"
          >
            {event.title}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-32 h-1 bg-wedding-gold mx-auto mt-6"
          />
        </div>
      </motion.div>

      {/* Event Details */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 -mt-24 relative z-10 border border-wedding-gold/10"
        >
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Date</p>
                <p className="font-playfair text-lg text-gray-800">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Time</p>
                <p className="font-playfair text-lg text-gray-800">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Venue</p>
                <p className="font-playfair text-lg text-gray-800">Hotel Reyansh Gold, Takhatpur, Bilaspur</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 font-playfair text-xl text-center leading-relaxed max-w-3xl mx-auto">
            {event.longDescription}
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-4xl font-great-vibes text-center text-gray-800 mb-8">Photo Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {event.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(img)}
                className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg group"
              >
                <img 
                  src={img} 
                  alt={`${event.title} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </motion.div>
            ))}
          </div>
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
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

export default EventPage;
