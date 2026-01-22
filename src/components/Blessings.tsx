import { motion } from 'framer-motion';


const wishesRow1 = [
  { 
    name: "Riya Sharma", 
    relation: "Best Friend", 
    message: "May your love grow stronger with each passing day. Wishing you a lifetime of happiness!", 
    image: "https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=2070&auto=format&fit=crop" // Young Indian woman
  },
  { 
    name: "Mr. Vijay Sharma", 
    relation: "Professor", 
    message: "Watching Apoorva grow has been a delight. Wishing you both wisdom and endless happiness.", 
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=2021&auto=format&fit=crop" // Elderly Indian man
  },
  { 
    name: "Rahul Verma", 
    relation: "Childhood Friend", 
    message: "From playground partners to witnessing your wedding. Congrats, Aman!", 
    image: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1974&auto=format&fit=crop" // Young Indian man
  },
  { 
    name: "Priya Gupta", 
    relation: "College Friend", 
    message: "So happy for you both! May your journey together be filled with beautiful moments.", 
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=1974&auto=format&fit=crop" // Young Indian woman
  },
  { 
    name: "Mrs. Kamla Devi", 
    relation: "Grandmother", 
    message: "Watching you grow up and now getting married fills my heart with joy. God bless!", 
    image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop" // Elderly Indian woman
  },
];

const wishesRow2 = [
  { 
    name: "Anjali Gupta", 
    relation: "Sister", 
    message: "Can't wait to welcome my new brother! May your bond be eternal and your home filled with love.", 
    image: "https://images.unsplash.com/photo-1609132718484-cc90df3417f8?q=80&w=1974&auto=format&fit=crop" // Young Indian woman
  },
  { 
    name: "Mr. Ramesh Ji", 
    relation: "Uncle", 
    message: "May Lord bless this union with prosperity, love, and happiness. We are overjoyed!", 
    image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=2012&auto=format&fit=crop" // Elderly Indian man
  },
  { 
    name: "Neha & Karan", 
    relation: "Couple Friends", 
    message: "Marriage is a wonderful journey! Welcome to the club! May your story be beautiful.", 
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop" // Indian couple
  },
  { 
    name: "Mrs. Shanti Aunty", 
    relation: "Family Elder", 
    message: "May your lives together be healthy, happy, and filled with love. Blessings!", 
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop" // Elderly Indian woman
  },
  { 
    name: "Amit Kumar", 
    relation: "Office Colleague", 
    message: "Congratulations on finding your life partner. Wishing you both a wonderful married life!", 
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" // Young Indian man
  },
];


// Falling Golden Bubble Component
const FallingBubble = ({ delay, left, size, duration }: { delay: number; left: string; size: number; duration: number }) => {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left,
        top: -20,
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0.3))`,
        boxShadow: `0 0 ${size/2}px rgba(212, 175, 55, 0.4)`,
      }}
      initial={{ y: -20, opacity: 0.8 }}
      animate={{ 
        y: '60vh',
        opacity: [0.8, 0.6, 0.3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const WishCard = ({ wish }: { wish: typeof wishesRow1[0] }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      transition={{ duration: 0.3 }}
      className="flex-shrink-0 w-80 h-48 rounded-xl overflow-hidden relative group cursor-pointer shadow-lg"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${wish.image})` }}
      />
      
      {/* Gradient Overlay - stronger on the right side for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/90" />
      
      {/* Content on Right Side */}
      <div className="absolute inset-y-0 right-0 w-3/5 p-5 flex flex-col justify-center">
        {/* Quote Icon */}
        <div className="text-wedding-gold text-xl font-serif mb-1 opacity-70">"</div>
        
        {/* Message */}
        <p className="text-white/90 font-playfair text-xs leading-relaxed mb-3 line-clamp-3">
          {wish.message}
        </p>
        
        {/* Divider */}
        <div className="w-8 h-[1px] bg-wedding-gold/60 mb-2" />
        
        {/* Author Info */}
        <div>
          <p className="text-white font-inter font-semibold text-xs">{wish.name}</p>
          <p className="text-wedding-gold/80 text-[10px] font-inter tracking-wider uppercase">{wish.relation}</p>
        </div>
      </div>
      
      {/* Subtle Border */}
      <div className="absolute inset-0 border border-white/10 group-hover:border-wedding-gold/40 rounded-xl transition-colors duration-300" />
    </motion.div>
  );
};

const InfiniteScroll = ({ wishes }: { wishes: typeof wishesRow1 }) => {
  return (
    <div 
      className="flex gap-8 overflow-x-auto py-2 px-4"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {wishes.map((wish, i) => (
        <WishCard key={`${wish.name}-${i}`} wish={wish} />
      ))}
    </div>
  );
};

// Generate random bubbles configuration
const bubbles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 4 + Math.random() * 12,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 4,
}));

const Blessings = () => {
  return (
    <section 
      id="wishes" 
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.06) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(196, 30, 58, 0.04) 0%, transparent 40%),
          linear-gradient(180deg, #1a0a0a 0%, #0d0505 50%, #1a0a0a 100%)
        `
      }}
    >
      {/* Falling Golden Bubbles */}
      <div className="absolute inset-x-0 top-0 h-[60%] overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <FallingBubble 
            key={bubble.id}
            left={bubble.left}
            size={bubble.size}
            delay={bubble.delay}
            duration={bubble.duration}
          />
        ))}
        {/* Fade gradient at bottom of bubbles area */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0505] to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-64 h-64 border border-wedding-gold/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-80 h-80 border border-wedding-gold/5 rounded-full"
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-4xl">🙏</span>
          </motion.div>
          <p className="text-wedding-gold font-hindi text-lg tracking-normal uppercase mb-2">आशीर्वाद</p>
          <h2 className="text-4xl md:text-6xl font-great-vibes text-white mb-4 drop-shadow-lg">Blessings & Wishes</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-4"
          />
          <p className="text-white/40 font-playfair italic text-sm">
            Warm words from our loved ones
          </p>
        </motion.div>

        {/* Scrolling Rows */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <InfiniteScroll wishes={wishesRow1} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <InfiniteScroll wishes={wishesRow2} />
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 px-4"
        >
          <p className="text-white/20 font-great-vibes text-xl">
            "Two souls, one heart, forever united"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blessings;
