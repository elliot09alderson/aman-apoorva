import { motion } from 'framer-motion';

const MantraMarquee = () => {
  const mantra = "ॐ मंगलम भगवान विष्णुः, मंगलं गरुड़ध्वजः। मंगलं पुण्डरीकाक्षः, मंगलाय तनो हरिः ॐ";
  
  // Duplicate mantra for seamless loop
  const repeatedMantra = `${mantra}   ✦   ${mantra}   ✦   ${mantra}   ✦   ${mantra}   ✦   `;

  return (
    <div 
      className="relative overflow-hidden py-3 bg-wedding-red"
    >
      {/* Top decorative border */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
      
      {/* Bottom decorative border */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />

      {/* Marquee Container */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          <span className="text-wedding-gold font-playfair text-lg md:text-xl tracking-[0.15em] px-4">
            {repeatedMantra}
          </span>
          <span className="text-wedding-gold font-playfair text-lg md:text-xl tracking-[0.15em] px-4">
            {repeatedMantra}
          </span>
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-wedding-red to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-wedding-red to-transparent pointer-events-none" />
    </div>
  );
};

export default MantraMarquee;
