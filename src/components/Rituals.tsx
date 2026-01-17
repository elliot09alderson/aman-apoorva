import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { rituals } from '../data/rituals';

const RitualCircle = ({ ritual, index }: { ritual: typeof rituals[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      className="flex flex-col items-center group"
    >
      <Link to={`/event/${ritual.id}`} className="relative">
        {/* Outer Glow Ring */}
        <motion.div
          className="absolute -inset-4 rounded-full bg-wedding-gold/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        />
        
        {/* Decorative Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3 rounded-full border border-dashed border-wedding-gold/40"
        />
        
        {/* Main Circle */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden cursor-pointer shadow-xl shadow-black/30"
        >
          {/* Image */}
          <img 
            src={ritual.image} 
            alt={ritual.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
          
          {/* Border */}
          <div className="absolute inset-0 rounded-full border-[3px] border-wedding-gold group-hover:border-white transition-colors duration-300" />
          
          {/* Center Icon on Hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-4xl drop-shadow-lg">{ritual.icon}</span>
          </motion.div>
        </motion.div>
        
        {/* Floating Date Badge */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-wedding-gold text-white px-3 py-1 rounded-full shadow-lg"
        >
          <span className="text-[10px] font-inter font-bold whitespace-nowrap tracking-wide">{ritual.date.split(',')[0]}</span>
        </motion.div>
      </Link>

      {/* Text Content */}
      <div className="mt-8 text-center max-w-[160px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="text-wedding-gold font-hindi text-base mb-1"
        >
          {ritual.hindiTitle}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="text-2xl md:text-3xl font-great-vibes text-white mb-1 drop-shadow-md"
        >
          {ritual.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="text-white/60 font-inter text-[10px] uppercase tracking-widest"
        >
          {ritual.time}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Rituals = () => {
  return (
    <section 
      id="rituals" 
      className="py-28 px-4 md:px-12 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top, rgba(196, 30, 58, 0.25) 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(196, 30, 58, 0.15) 0%, transparent 40%),
          radial-gradient(ellipse at bottom right, rgba(212, 175, 55, 0.1) 0%, transparent 40%),
          linear-gradient(180deg, #2a1515 0%, #1a0a0a 50%, #2a1515 100%)
        `
      }}
    >
      {/* Decorative Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-6xl opacity-30 text-wedding-gold"
      >
        ✿
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 text-6xl opacity-30 text-wedding-gold"
      >
        ✿
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-20 text-4xl opacity-20 text-wedding-red"
      >
        ❀
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="text-5xl">🪔</span>
          </motion.div>
          <p className="text-wedding-gold font-hindi text-xl tracking-normal uppercase mb-3">शुभ विवाह</p>
          <h2 className="text-5xl md:text-7xl font-great-vibes text-white mb-6 drop-shadow-lg">Wedding Rituals</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-6"
          />
          <p className="text-white/60 max-w-xl mx-auto font-playfair italic text-lg">
            Sacred ceremonies that weave our souls together
          </p>
        </motion.div>

        {/* Ritual Circles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {rituals.map((ritual, index) => (
            <RitualCircle key={ritual.id} ritual={ritual} index={index} />
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-wedding-gold/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default Rituals;
