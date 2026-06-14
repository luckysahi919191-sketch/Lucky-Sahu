import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'ambiance' | 'garden'>('all');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Filter gallery items
  const filteredItems = GALLERY_ITEMS.filter(item => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    const nextIdx = (selectedIdx + 1) % filteredItems.length;
    setSelectedIdx(nextIdx);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    const prevIdx = (selectedIdx - 1 + filteredItems.length) % filteredItems.length;
    setSelectedIdx(prevIdx);
  };

  return (
    <section id="gallery" className="py-24 bg-black/40 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            <Camera className="h-3.5 w-3.5 text-emerald-400" />
            <span>Visual Tour</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Snapshot Highlights of Our Garden Resort
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Browse through authentic food dishes, open landscapes, comfortable family alignments, and ambient night views.
          </p>
        </div>

        {/* Gallery category tabs */}
        <div className="flex gap-2.5 justify-center mb-10 pb-2 overflow-x-auto scrollbar-none">
          {[
            { id: 'all', label: 'All Snaps' },
            { id: 'food', label: 'Delicious Dishes' },
            { id: 'garden', label: 'Lawn Seating' },
            { id: 'ambiance', label: 'Night Lighting' },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`gallery-tab-${tab.id}`}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-emerald-650 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-850 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / grid */}
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900 border border-white/5 aspect-4/3 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                />

                {/* Dark Hover Mask overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  
                  {/* Floating Eye zoom indicator */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 text-white">
                    <Eye className="h-4.5 w-4.5" />
                  </div>

                  <span className="text-4xs uppercase tracking-widest font-black text-amber-400">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-lg text-white mt-1 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-3xs text-slate-200 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* LIGHTBOX MODAL POPUP */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <div 
            id="gallery-lightbox"
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close button top right */}
            <button
              id="close-lightbox"
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev button */}
            <button
              id="prev-lightbox-slide"
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next button */}
            <button
              id="next-lightbox-slide"
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image display canvas with animations */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={filteredItems[selectedIdx].image}
                alt={filteredItems[selectedIdx].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain"
              />

              {/* Caption details bottom overlay inside lightbox */}
              <div className="w-full bg-slate-950 p-5 text-white border-t border-slate-800">
                <span className="text-4xs uppercase tracking-widest font-black text-orange-400">
                  {filteredItems[selectedIdx].category}
                </span>
                <h3 className="font-display font-extrabold text-xl text-white mt-1">
                  {filteredItems[selectedIdx].title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {filteredItems[selectedIdx].description}
                </p>
                <div className="mt-3 flex justify-between items-center text-4xs text-slate-500">
                  <span>Photo {selectedIdx + 1} of {filteredItems.length}</span>
                  <span>© Shivoy Garden Restro</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
