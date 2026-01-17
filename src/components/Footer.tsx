import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 text-9xl">✿</div>
        <div className="absolute bottom-0 right-1/4 text-9xl">✿</div>
      </div>
      
      {/* Gold Line at Top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Logo/Names */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-wedding-gold text-2xl mb-2">ॐ</p>
            <h2 className="text-5xl md:text-6xl font-great-vibes mb-4 text-wedding-gold">Apoorva & Aman</h2>
            <p className="font-playfair text-gray-400 text-lg italic mb-8">Beginning their forever.</p>
          </motion.div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 font-inter text-sm">
            <Link to="/" className="text-gray-400 hover:text-wedding-gold transition-colors">Home</Link>
            <a href="#rituals" className="text-gray-400 hover:text-wedding-gold transition-colors">Rituals</a>
            <a href="#gallery" className="text-gray-400 hover:text-wedding-gold transition-colors">Gallery</a>
            <a href="#wishes" className="text-gray-400 hover:text-wedding-gold transition-colors">Blessings</a>
          </div>
          
          {/* Date & Venue */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-500 font-inter text-sm mb-8">
            <span>📅 February 5th, 2026</span>
            <span>📍 Hotel Reyansh Gold, Takhatpur, Balod (C.G.)</span>
          </div>

          {/* Divider */}
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-8" />
          
          {/* Copyright */}
          <p className="text-xs font-inter text-gray-600">
            Made with ❤️ by Yashaswi for Apoorva & Aman's Wedding • © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
