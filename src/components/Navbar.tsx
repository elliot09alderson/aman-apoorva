import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Couple', href: '#couple' },
  { name: 'Rituals', href: '#rituals' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Wishes', href: '#wishes' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detect section when it's in the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12"
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/20" />
      
      <Link to="/" className="relative z-10 text-2xl font-great-vibes text-wedding-gold font-bold drop-shadow-lg">
        A & A
      </Link>
      
      <div className="relative z-10 hidden md:flex gap-8 font-inter text-sm font-medium">
        {navItems.map((item) => (
          <Link 
            key={item.name}
            to={`/${item.href}`} 
            className={`relative py-1 transition-colors duration-300 ${
              activeSection === item.href.slice(1) 
                ? "text-wedding-gold" 
                : "text-white/70 hover:text-wedding-gold"
            }`}
          >
            {item.name}
            {activeSection === item.href.slice(1) && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-wedding-gold"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 bg-gradient-to-r from-wedding-gold to-amber-500 text-white px-6 py-2 rounded-full font-inter text-sm font-semibold shadow-lg shadow-wedding-gold/30 hover:shadow-xl transition-shadow"
      >
        RSVP
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
