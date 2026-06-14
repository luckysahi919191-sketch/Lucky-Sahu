import React, { useState } from 'react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../data';
import { Review } from '../types';
import { Star, Quote, Sparkles, MessageSquare, Check, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Compute stats on the fly based on current state reviews
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const averageRating = (totalRating / reviews.length).toFixed(1);

  const starBreakdowns = [5, 4, 3, 2, 1].map(stars => {
    const count = reviews.filter(r => r.rating === stars).length;
    const percentage = ((count / reviews.length) * 10).toFixed(0); // scale for visualization
    return { stars, count, percentage: Number(percentage) * 10 || 0 };
  });

  const handleRatingSelect = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const addedReview: Review = {
      id: 'rev-' + Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      source: 'Direct',
    };

    setReviews(prev => [addedReview, ...prev]);
    setIsSuccess(true);

    // Reset after a short delay
    setTimeout(() => {
      setNewReview({ name: '', rating: 5, comment: '' });
      setIsSuccess(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-[#050811] to-[#04060d] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            <Quote className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span>Honest Opinions</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Loved By Generations Of Kota Families
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Read what local vegetarians and diners say about our garden dining setups, traditional cuisine, and fast hospitality service.
          </p>
        </div>

        {/* Double layout: Left Stats, Right Comments Slider Array */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Score Breakdown */}
          <div className="lg:col-span-4 bg-slate-950/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl sticky top-28">
            <h3 className="font-display font-bold text-white text-lg">Diner Score Card</h3>
            
            {/* Big digit score */}
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-black font-display text-emerald-400">{averageRating}</span>
              <span className="text-slate-400 font-medium">/ 5.0</span>
            </div>

            {/* Overarching Stars */}
            <div className="flex items-center gap-1 bg-amber-500/10 rounded-xl px-3 py-2 mt-3 text-amber-400 w-fit">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4.5 w-4.5 ${
                    i < Math.round(Number(averageRating)) ? 'fill-amber-400 text-amber-400' : 'text-slate-800'
                  }`} 
                />
              ))}
              <span className="text-slate-300 text-xs font-bold ml-1">{reviews.length} total reviews</span>
            </div>

            {/* Progress Bars */}
            <div className="mt-8 space-y-3">
              {starBreakdowns.map((bar) => (
                <div key={bar.stars} className="flex items-center gap-2 text-xs">
                  <span className="w-3 font-semibold text-slate-400">{bar.stars}</span>
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  <div className="flex-1 h-2 bg-slate-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${bar.percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-slate-400 font-medium">{bar.count} recs</span>
                </div>
              ))}
            </div>

            {/* Add Review Buttons */}
            <div className="mt-8 border-t border-white/5 pt-6">
              {!showForm ? (
                <button
                  id="toggle-write-review-btn"
                  onClick={() => setShowForm(true)}
                  className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition cursor-pointer"
                >
                  Write a Guest Review
                </button>
              ) : (
                <button
                  id="cancel-write-review-btn"
                  onClick={() => setShowForm(false)}
                  className="w-full text-center text-slate-400 hover:text-white font-bold text-xs py-3 rounded-xl transition"
                >
                  Hide form
                </button>
              )}
            </div>
          </div>

          {/* Right: Comments Slider & Form panel */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Conditional review writing form with glassmorphism */}
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mb-8"
                >
                  <div className="bg-orange-500/5 border border-orange-500/20 p-6 rounded-2xl">
                    <h4 className="font-display font-black text-white text-lg flex items-center gap-2">
                      <Sparkles className="h-4.5 w-4.5 text-orange-400" /> Share your dinner experience
                    </h4>

                    {isSuccess ? (
                      <div className="mt-6 text-center py-4 text-emerald-400 flex flex-col items-center gap-2">
                        <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center">
                          <Check className="h-6 w-6" />
                        </div>
                        <p className="font-bold">Thank you! Your feedback is appended live.</p>
                      </div>
                    ) : (
                      <form id="new-review-form" onSubmit={handleSubmitReview} className="mt-4 space-y-4">
                        
                        {/* Rating stars selector */}
                        <div>
                          <label className="block text-2xs font-semibold uppercase tracking-wider text-slate-400">
                            Your Star Rating
                          </label>
                          <div className="flex gap-1.5 mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                id={`rating-star-btn-${star}`}
                                type="button"
                                onClick={() => handleRatingSelect(star)}
                                className="p-0.5 rounded focus:outline-emerald-150 transition cursor-pointer"
                              >
                                <Star 
                                  className={`h-7 w-7 transition ${
                                    star <= newReview.rating 
                                      ? 'fill-amber-400 text-amber-400 scale-105' 
                                      : 'text-slate-800'
                                  }`} 
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Guest name */}
                        <div>
                          <label className="block text-2xs font-semibold uppercase tracking-wider text-slate-400">
                            Your Name
                          </label>
                          <input
                            id="input-review-name"
                            type="text"
                            required
                            value={newReview.name}
                            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                            placeholder="e.g. Sameer Aggarwal"
                            className="mt-1 w-full bg-slate-950 rounded-lg border border-white/5 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500"
                          />
                        </div>

                        {/* Comment text */}
                        <div>
                          <label className="block text-2xs font-semibold uppercase tracking-wider text-slate-400">
                            Detailed Review
                          </label>
                          <textarea
                            id="textarea-review-comment"
                            rows={3}
                            required
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            placeholder="What did you like? (e.g. Tasty Rajasthani Thali, quick service, quiet garden setup...)"
                            className="mt-1 w-full bg-slate-950 rounded-lg border border-white/5 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-orange-505"
                          />
                        </div>

                        <button
                          id="submit-review-btn"
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600 font-bold text-xs py-3 text-white rounded-xl shadow shadow-orange-500/20 transition cursor-pointer"
                        >
                          Publish Feedback
                        </button>
                      </form>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* List of customer cards */}
            <div id="reviews-list-container" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="glass-panel-dark p-6 rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between hover:scale-101 hover:border-white/10 transition-all duration-300"
                >
                  <div>
                    {/* Header: Avatar, Name, Rating source */}
                    <div className="flex items-center gap-3">
                      {rev.avatar ? (
                        <img
                          src={rev.avatar}
                          alt={rev.name}
                          referrerPolicy="no-referrer"
                          className="h-10 w-10 rounded-full object-cover border border-white/10"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-550">
                          <User className="h-5 w-5" />
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-bold text-xs text-slate-200">{rev.name}</h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          {/* Stars */}
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${
                                    i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-805'
                                  }`} 
                              />
                            ))}
                          </div>
                          <span className="text-4xs text-slate-400">{rev.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content text */}
                    <p className="mt-4 text-xs text-slate-350 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Badge showing source verification */}
                  <div className="mt-5 border-t border-white/5 pt-3 flex justify-between items-center text-4xs">
                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                      <Check className="h-3 w-3" /> Verified Guest
                    </span>
                    <span className="text-slate-400">
                      via {rev.source} Review
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
