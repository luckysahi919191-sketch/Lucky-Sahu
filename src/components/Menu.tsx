import { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data';
import { Search, Flame, Sparkles, MessageCircle, ShoppingBag, Plus, Minus, Check, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../types';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Cart state for the mini order generator
  const [cart, setCart] = useState<{ [id: string]: number }>({});

  const categories = [
    { id: 'all', name: '📷 All Items' },
    { id: 'thali', name: '🍛 Heritage Thalis' },
    { id: 'starter', name: '🍢 Tandoor Starters' },
    { id: 'fastfood', name: '🍕 Pizza & Burgers' },
    { id: 'chinese', name: '🥢 Indo-Chinese' },
    { id: 'beverage', name: '🥤 Royal Shakes' },
    { id: 'dessert', name: '🍨 Ice Creams & Sweets' },
    { id: 'extra', name: '➕ Heritage Extras' },
  ];

  // Filter logic
  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    if (!cart[id]) return;
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] === 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }
      return updated;
    });
  };

  const getCartTotal = (): number => {
    return (Object.entries(cart) as [string, number][]).reduce((total, [id, qty]) => {
      const item = MENU_ITEMS.find(m => m.id === id);
      return total + (item ? item.price * qty : 0);
    }, 0);
  };

  const getCartCount = (): number => {
    return (Object.values(cart) as number[]).reduce((sum, qty) => sum + qty, 0);
  };

  // Pre-fills a beautifully formatted WhatsApp message with selected items
  const handleSendOrder = () => {
    if (Object.keys(cart).length === 0) return;

    let itemsText = '';
    let total = 0;

    (Object.entries(cart) as [string, number][]).forEach(([id, qty]) => {
      const item = MENU_ITEMS.find(m => m.id === id);
      if (item) {
        const itemTotal = item.price * qty;
        itemsText += `• *${item.name}* [x${qty}] - ₹${itemTotal}\n`;
        total += itemTotal;
      }
    });

    const template = `Hello *Shivoy Fun 'n' Food Restaurant*!
I am browsing your beautiful menu and would like to place an order / inquire about dining:

*My Selected Dishes:*
${itemsText}
*Estimated Bill Total:* ₹${total}

Please guide us on the current availability for dining or takeaway arrangement. Thank you!`;

    window.open(`${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(template)}`, '_blank');
  };

  const handleInquireIndividual = (item: MenuItem) => {
    const template = `Hello *Shivoy Fun 'n' Food Restaurant*!
I am interested in ordering/inquiring about *${item.name}* (Price: ₹${item.price}). Is this currently ready for dining?`;
    window.open(`${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(template)}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-[#04060d] to-[#050811] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-orange-500/15 text-orange-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Sparkles className="h-3.5 w-3.5 text-orange-400 fill-orange-400" />
            <span>Shivoy Gastronomy</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Indulge In Our Freshly Cooked Pure Veg Specialties
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            A delightful fusion of heritage Mewar spices, traditional thalis, artisanal tandoori, loaded pizza, classic noodles, and creamy shakes.
          </p>
        </div>

        {/* Search and Category filters segment */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-white/5 pb-8 mb-12">
          
          {/* Categories Tab buttons */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-button-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-650 text-white shadow-md shadow-emerald-700/25'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-205'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Search dishes (e.g. Thali, Paneer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 text-white text-xs pl-10 pr-4 py-3.5 rounded-full focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 border border-white/5 transition-all"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div id="menu-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const qtyInCart = cart[item.id] || 0;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="glass-panel-dark rounded-2xl overflow-hidden border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  
                  {/* Top image and floating badges */}
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    
                    {/* Dark gradient shadow inside image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                    {/* Left floating pure veg badge */}
                    <div className="absolute top-3.5 left-3.5 z-10 bg-slate-950/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1 text-4xs font-bold text-emerald-400 border border-white/5">
                      <div className="veg-badge scale-75">
                        <div className="veg-dot" />
                      </div>
                      <span>PURE VEG</span>
                    </div>

                    {/* Right floating tag: Popular or Chef Special */}
                    <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-1 items-end">
                      {item.isChefSpecial && (
                        <span className="bg-orange-500 text-white text-4xs font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 select-none">
                          <Sparkles className="h-2.5 w-2.5 fill-white" />
                          <span>CHEF'S SPECIAL</span>
                        </span>
                      )}
                      {item.isPopular && (
                        <span className="bg-emerald-600 text-white text-4xs font-extrabold px-2.5 py-1 rounded-full shadow-md select-none">
                          🔥 POPULAR MUST-TRY
                        </span>
                      )}
                    </div>

                    {/* Price stamp floating over image on bottom right */}
                    <div className="absolute bottom-3 right-3 z-10 bg-slate-900/90 backdrop-blur-md text-amber-400 font-display font-extrabold px-3 py-1.5 rounded-lg text-sm tracking-wide border border-white/5">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Body textual content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-display font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
                          {item.name}
                        </h4>
                        
                        {/* Spiciness indicator with flame counts */}
                        {item.spiciness !== undefined && item.spiciness > 0 && (
                          <div className="flex items-center gap-0.5" title={`${item.spiciness} Spicy Level`}>
                            {[...Array(item.spiciness)].map((_, spiIdx) => (
                              <Flame key={spiIdx} className="h-3.5 w-3.5 text-orange-500 fill-orange-500" />
                            ))}
                          </div>
                        )}
                      </div>

                      <p className="mt-2 text-slate-400 text-xs leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer interactions within the card info */}
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between gap-2.5">
                      {/* Interactive Shopping Cart Add/Subtract controls */}
                      <div className="flex items-center bg-slate-900 border border-white/5 rounded-xl p-1">
                        {qtyInCart > 0 ? (
                          <>
                            <button
                              id={`minus-${item.id}`}
                              onClick={() => removeFromCart(item.id)}
                              className="p-1.5 text-slate-400 hover:text-orange-400 hover:bg-slate-850 rounded-lg transition"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-3 text-xs font-bold text-white min-w-[20px] text-center">
                              {qtyInCart}
                            </span>
                            <button
                              id={`plus-${item.id}`}
                              onClick={() => addToCart(item.id)}
                              className="p-1.5 text-emerald-400 hover:text-emerald-300 hover:bg-slate-850 rounded-lg transition"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </>
                        ) : (
                          <button
                            id={`add-${item.id}`}
                            onClick={() => addToCart(item.id)}
                            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-slate-300 hover:text-emerald-400 transition-all rounded-lg hover:bg-white/5"
                          >
                            <Plus className="h-3.5 w-3.5 text-emerald-450" /> Add to Order list
                          </button>
                        )}
                      </div>

                      {/* WhatsApp individual quick inquiry */}
                      <button
                        id={`inquire-whatsapp-${item.id}`}
                        onClick={() => handleInquireIndividual(item)}
                        className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl transition-all group/btn cursor-pointer"
                        title="Inquire availability on WhatsApp"
                      >
                        <MessageCircle className="h-4.5 w-4.5 group-hover/btn:scale-105" />
                      </button>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-slate-950/45 rounded-2xl border border-dashed border-white/10">
              <p className="text-sm font-semibold text-slate-400">No dishes matched your searching query.</p>
              <button
                id="reset-filter-btn"
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-emerald-400 hover:underline cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Floating / Sticky bottom active Menu-Cart order bar */}
        {getCartCount() > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl bg-emerald-950 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 border border-white/20 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="relative bg-orange-500 rounded-xl p-2.5 text-white">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1.5 -right-1.5 bg-white text-emerald-950 text-4xs font-black rounded-full h-5 w-5 flex items-center justify-center border border-emerald-950">
                  {getCartCount()}
                </span>
              </div>
              <div>
                <p className="text-3xs font-semibold uppercase tracking-wider text-emerald-300">Selected Selection</p>
                <p className="text-sm font-bold text-white leading-tight">Total est. ₹{getCartTotal()}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="clear-cart-btn"
                onClick={() => setCart({})}
                className="text-xs font-semibold text-white/50 hover:text-white px-3 py-2 transition"
              >
                Clear
              </button>

              <button
                id="send-whatsapp-order-btn"
                onClick={handleSendOrder}
                className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition shadow-lg shadow-green-600/20 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Submit Order list on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
