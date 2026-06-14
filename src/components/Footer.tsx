import { RESTAURANT_INFO } from '../data';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03050a] text-white pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      
      {/* Decorative gradient glowing balls */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10 pb-16">
          
          {/* Logo & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight font-display text-emerald-400">SHIVOY</span>
              <span className="text-2xl font-bold font-display text-orange-400">Restro</span>
              <div className="veg-badge ml-2 scale-90 border-emerald-500">
                <div className="veg-dot bg-emerald-500"></div>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We are Kota's favorite open garden pure vegetarian restaurant. Serving mouthwatering Delux & Rajasthani Thali, tandoori appetizers, pizza layers, Chinese foods, and thick milkshakes near Borkhera.
            </p>

            {/* Social media handles */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-white/5 hover:bg-emerald-600 hover:text-white text-slate-400 transition-all duration-200"
                aria-label="Follow Shivoy Restro on Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-white/5 hover:bg-orange-500 hover:text-white text-slate-400 transition-all duration-200"
                aria-label="Follow Shivoy Restro on Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links block */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest text-emerald-300 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-xs">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">Home Landing</a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">Our Garden Legacy</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-emerald-400 transition-colors">Special Veg Menu</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">Resort Gallery snaps</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact & Location Maps</a>
              </li>
            </ul>
          </div>

          {/* Direct Address block */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-display font-bold text-sm tracking-widest text-orange-400 uppercase">
              The Venue
            </h4>

            <div className="space-y-4 text-slate-400 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  80 Feet Link Road, Near Steel Bridge, Borkhera, Gordhanpura, Kota, Rajasthan 324001
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-emerald-400 transition">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Daily Timing</p>
                  <p className="text-slate-400 mt-0.5">11:00 AM to 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-slate-500 text-3xs gap-4 text-center">
          <div>
            <p>© {currentYear} Shivoy Fun 'n' Food Restaurant. All rights reserved.</p>
            <p className="mt-0.5">Borkhera Near Steel Bridge, Kota, Rajasthan.</p>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            <span>for Vegetarian Food Lovers in Kota</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
