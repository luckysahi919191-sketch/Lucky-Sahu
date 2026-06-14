import { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Specials', href: '#why-us', id: 'why-us' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section finder
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top tiny info bar */}
      <div className="bg-black py-1.5 px-4 text-center text-xs text-slate-300 border-b border-white/5 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span>Pure Vegetarian Delight in Kota • 11:00 AM - 11:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-amber-400 transition flex items-center gap-1 text-slate-200">
              <Phone className="h-3 w-3 text-emerald-400" /> {RESTAURANT_INFO.phone}
            </a>
            <span className="text-slate-300 flex items-center gap-1">
              <MapPin className="h-3 w-3 text-orange-500" /> Borkhera, Kota
            </span>
          </div>
        </div>
      </div>

      <header
        id="app-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-2 text-white shadow-2xl' : 'bg-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" id="brand-logo-link" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-2xl font-black tracking-tight font-display transition-colors text-emerald-400">
                  SHIVOY
                </span>
                <span className="text-2xl font-bold ml-1.5 font-display transition-colors text-orange-400">
                  Restro
                </span>
                <div className="veg-badge ml-2 scale-90">
                  <div className="veg-dot"></div>
                </div>
              </div>
              <span className={`text-4xs font-semibold tracking-widest uppercase -mt-1 transition-colors ${
                scrolled ? 'text-slate-400' : 'text-white/60'
              }`}>
                Fun 'n' Food Vegetarian
              </span>
            </div>
          </a>

          {/* Nav Items Desktop */}
          <nav className="hidden lg:flex items-center gap-1 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`nav-${link.id}`}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-lg text-sm tracking-wide transition-all duration-250 ${
                  activeSection === link.id
                    ? 'text-amber-400 font-bold bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action button Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className={`flex items-center justify-center p-2.5 rounded-xl border transition-all hover:scale-105 ${
                scrolled 
                  ? 'border-white/10 text-white hover:bg-white/5' 
                  : 'border-white/20 text-white hover:bg-white/5'
              }`}
            >
              <Phone className="h-4.5 w-4.5 text-amber-400" />
            </a>

            <button
              id="header-book-btn"
              onClick={onOpenReservation}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
            >
              <CalendarCheck className="h-4 w-4" />
              <span>Book Garden Table</span>
            </button>
          </div>

          {/* Hamburger Menu Toggle Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="header-book-btn-mobile"
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-md transition-all whitespace-nowrap"
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              <span>Reserve</span>
            </button>
            
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition ${
                scrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div id="mobile-nav-drawer" className="lg:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg shadow-2xl border-t border-white/5 px-4 py-5 space-y-3 text-white">
            <div className="flex flex-col gap-1.5 font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-emerald-500/15 text-emerald-400 font-bold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              <a
                id="mobile-drawer-call-btn"
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 py-3 rounded-xl text-white font-semibold border border-white/10 transition"
              >
                <Phone className="h-4.5 w-4.5 text-orange-400" />
                <span>Call Shivoy: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
