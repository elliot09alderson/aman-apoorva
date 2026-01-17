import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const weddingDate = new Date('2026-02-05T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="flex justify-center gap-4 md:gap-8 mt-10"
    >
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4 + index * 0.1, type: "spring", stiffness: 200 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-wedding-gold via-amber-400 to-wedding-gold rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative bg-black/60 backdrop-blur-md border border-wedding-gold/30 rounded-xl px-3 py-4 md:px-6 md:py-5 min-w-[70px] md:min-w-[100px] text-center">
            <span className="block text-3xl md:text-5xl font-playfair text-wedding-gold font-bold tracking-tight">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="block text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70 mt-2 font-inter">
              {unit.label}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Countdown;
