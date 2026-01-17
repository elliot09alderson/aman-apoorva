import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Couple = () => {
  return (
    <section 
      id="couple" 
      className="py-24 px-4 md:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/s2-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-wedding-red/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-wedding-red/10 blur-3xl" />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-32 h-32 border border-wedding-red/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-10 w-48 h-48 border border-wedding-gold/15 rounded-full"
        />
        
        {/* Mandala-like pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#C41E3A" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="70" fill="none" stroke="#C41E3A" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="30" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
          </svg>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 text-4xl text-wedding-red/30"
        >
          ❀
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-1/4 text-4xl text-wedding-red/30"
        >
          ❀
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-20 text-2xl text-wedding-gold/20"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-20 text-2xl text-wedding-gold/20"
        >
          ✦
        </motion.div>
      </div>

      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
            className="inline-block mb-4"
          >
            <span className="text-4xl">💑</span>
          </motion.div>
          <p className="text-wedding-gold font-hindi text-lg tracking-normal uppercase mb-2">वधू और वर</p>
          <h2 className="text-4xl md:text-6xl font-great-vibes text-white mb-4 drop-shadow-lg">The Happy Couple</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto"
          />
        </motion.div>

        {/* Couple Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          
          {/* Bride - Apoorva */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-sm"
          >
            <div className="relative group">
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-wedding-gold/50 shadow-2xl"
              >
                <img 
                  src="/images/bride-0.jpeg" 
                  alt="Apoorva - Bride"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>

              {/* Name & Title */}
              <div className="text-center mt-6">
                <p className="text-wedding-gold font-playfair text-sm tracking-[0.2em] uppercase mb-1">The Bride</p>
                <h3 className="text-4xl font-great-vibes text-white mb-2">Apoorva</h3>
                <p className="text-white/40 font-inter text-xs tracking-widest uppercase">Daughter of Mr. Nilkanth & Mrs. Veena Ujjavalkar</p>
              </div>

              {/* Quote */}
              <div className="mt-6 text-center px-4">
                <p className="text-white/70 font-playfair italic text-sm leading-relaxed">
                  "He is my best friend, my soulmate, and now my forever. I can't wait to spend the rest of my life laughing with him."
                </p>
              </div>

              {/* Gallery Button */}
              <div className="text-center mt-6">
                <Link 
                  to="/gallery/bride"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-wedding-red/20 border border-wedding-red/40 rounded-full text-white text-sm font-inter hover:border-wedding-gold hover:bg-wedding-gold/20 transition-all duration-300"
                >
                  <span>View Apoorva's Gallery</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Center Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", delay: 0.3 }}
            className="flex-shrink-0 relative"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-wedding-gold to-amber-600 flex items-center justify-center shadow-2xl shadow-wedding-gold/30">
              <span className="text-4xl md:text-5xl">💕</span>
            </div>
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 border-2 border-dashed border-wedding-gold/30 rounded-full"
            />
          </motion.div>

          {/* Groom - Aman */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-sm"
          >
            <div className="relative group">
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-64 h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-wedding-gold/50 shadow-2xl"
              >
                <img 
                  src="/images/groom-0.jpeg" 
                  alt="Aman - Groom"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>

              {/* Name & Title */}
              <div className="text-center mt-6">
                <p className="text-wedding-gold font-playfair text-sm tracking-[0.2em] uppercase mb-1">The Groom</p>
                <h3 className="text-4xl font-great-vibes text-white mb-2">Aman</h3>
                <p className="text-white/40 font-inter text-xs tracking-widest uppercase">Son of Mr. Shivkumar Nirmalkar</p>
              </div>

              {/* Quote */}
              <div className="mt-6 text-center px-4">
                <p className="text-white/70 font-playfair italic text-sm leading-relaxed">
                  "She is my sunshine on cloudy days and my anchor in storms. Marrying her is the best decision of my life."
                </p>
              </div>

              {/* Gallery Button */}
              <div className="text-center mt-6">
                <Link 
                  to="/gallery/groom"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-wedding-red/20 border border-wedding-red/40 rounded-full text-white text-sm font-inter hover:border-wedding-gold hover:bg-wedding-gold/20 transition-all duration-300"
                >
                  <span>View Aman's Gallery</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Together Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link 
            to="/gallery/together"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-wedding-gold to-amber-500 rounded-full text-black font-inter font-semibold shadow-xl shadow-wedding-gold/30 hover:shadow-2xl hover:shadow-wedding-gold/40 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-xl">💑</span>
            <span>View Us Together</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Couple;
