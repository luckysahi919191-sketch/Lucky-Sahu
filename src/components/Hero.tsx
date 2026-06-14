import { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data';
import { Calendar, Utensils, Star, Clock, MapPin, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Determine if restaurant is currently open based on local hour
    const checkOpen = () => {
      const now = new Date();
      const currentHour = now.getHours();
      
      // Open between 11 AM and 11 PM
      if (currentHour >= RESTAURANT_INFO.timings.openHour && currentHour < RESTAURANT_INFO.timings.closeHour) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };

    checkOpen();
    const interval = setInterval(checkOpen, 60000); // Check once a minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-20">
      
      {/* Background Image of open garden */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_INFO.gmapsEmbed ? RESTAURANT_INFO.gmapsEmbed : ''} // Fallback to safe img
          srcSet={`${RESTAURANT_INFO.gmapsEmbed} 1x`} // Guard
          className="hidden" // Internal check
          alt="Shivoy Garden"
          referrerPolicy="no-referrer"
        />
        {/* We use our generated shivoy_hero image loaded from assets */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-102 transition-transform duration-10000"
          style={{ backgroundImage: `url('${RESTAURANT_INFO.gmapsEmbed ? '/src/assets/images/shivoy_hero_1781416690529.jpg' : ''}')` }}
        />
        {/* Advanced elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/80 to-black/80" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white flex flex-col items-center">
        
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md text-xs font-semibold text-emerald-300 mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-emerald-400 fill-emerald-400" />
          <span>Kota's Premium Open-Air Dining Destination</span>
        </motion.div>

        {/* Big Displays Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight max-w-4xl leading-none"
        >
          Shivoy <span className="text-orange-400 inline-block">Fun 'n' Food</span> <span className="block sm:inline">Restaurant</span>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 font-sans text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed"
        >
          A delightful family oasis featuring 100% pure vegetarian cuisine, royal Rajasthani Thalis, cozy garden seating, and peaceful dining.
        </motion.p>

        {/* Dynamic status + reviews bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm"
        >
          {/* Working hours status indicator with real status! */}
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
            <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
            <span className="font-semibold text-white">
              {isOpenNow ? 'OPEN NOW' : 'CLOSED NOW'}
            </span>
            <span className="text-white/60">•</span>
            <span className="text-white/80">11:00 AM - 11:00 PM</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
            <div className="flex text-amber-400">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
              <Star className="h-3.5 w-3.5 text-amber-400" /> {/* 4.0 rating */}
            </div>
            <span className="font-bold text-white">4.0 / 5</span>
            <span className="text-white/40">({RESTAURANT_INFO.reviewCount}+ reviews)</span>
          </div>
        </motion.div>

        {/* Hero CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-book-btn"
            onClick={onOpenReservation}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-97 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-orange-500/30 transition-all text-base cursor-pointer"
          >
            <Calendar className="h-5 w-5" />
            <span>Book Garden Table</span>
          </button>

          <a
            id="hero-explore-menu-btn"
            href="#menu"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/15 hover:bg-white/20 active:scale-97 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md transition-all text-base"
          >
            <Utensils className="h-5 w-5 text-emerald-400" />
            <span>Explore Delicious Menu</span>
          </a>
        </motion.div>

        {/* Feature Highlights bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-16 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 px-4"
        >
          {[
            { tag: 'Pure Vegetarian', detail: 'Guaranteed 100% Veg kitchen', icon: '🌱' },
            { tag: 'Starry Garden Seating', detail: 'Lush natural landscape lawns', icon: '🌳' },
            { tag: 'Affordable Gourmet', detail: 'Premium meals from ₹200-400', icon: '🍛' },
            { tag: 'Fast Express Service', detail: 'Warm traditional Rajasthani host', icon: '⚡' },
          ].map((feat, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 p-4 rounded-xl text-left backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-2xl mb-1">{feat.icon}</div>
              <h5 className="font-bold text-sm tracking-wide text-white">{feat.tag}</h5>
              <p className="text-3xs text-slate-350 mt-0.5">{feat.detail}</p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Decorative Wave Slicer boundary */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-tight z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-12 text-[#050811] fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.47,26.69,170.83,46.83,230.1,67.24,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
}
