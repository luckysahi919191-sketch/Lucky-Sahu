import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Check, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Dining Inquiry',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset success banner after 3 seconds
      setTimeout(() => setIsSuccess(false), 4000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Dining Inquiry',
        comment: ''
      });
    }, 1200);
  };

  const handleWhatsAppContact = () => {
    const text = `Hello Shivoy Restaurant!
My Name is ${formData.name || 'a Guest'}.
${formData.phone ? `My Contact No: ${formData.phone}` : ''}
*Inquiry Subject*: ${formData.subject}
*Message details*: ${formData.comment || 'I would like to inquire about reservation space / catering menus.'}`;
    
    window.open(`${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#04060d] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-orange-500/15 text-orange-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <MapPin className="h-3.5 w-3.5 text-orange-400" />
            <span>Find Us & Connect</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            We Are Waiting To Host Your Family
          </h2>
          <p className="mt-4 text-sm text-slate-350">
            Easy parking, stunning landscapes, and immediate walk-in options are available. Reach out for party menus or reservations.
          </p>
        </div>

        {/* Dual layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates details & Interactive Map Embed */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="glass-panel-dark p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-between h-full hover:border-white/10 transition-all duration-300">
              
              <div>
                <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                  Restaurant Location & Contact
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Located near the beautiful landmark Steel Bridge of Borkhera in Gordhanpura, Kota.
                </p>

                {/* Info strip stack */}
                <div className="mt-8 space-y-6">
                  
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-emerald-500/10 p-3 h-11 w-11 rounded-xl text-emerald-400 flex items-center justify-center border border-emerald-500/10">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-2xs font-semibold uppercase tracking-wider text-slate-400">Our Address</p>
                      <p className="text-slate-300 text-xs font-medium mt-0.5 leading-relaxed">
                        80 Feet Link Road, Near Steel Bridge, Borkhera, Gordhanpura, Kota, Rajasthan 324001
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-orange-500/10 p-3 h-11 w-11 rounded-xl text-orange-400 flex items-center justify-center border border-orange-500/10">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-2xs font-semibold uppercase tracking-wider text-slate-400">Call/Hotline</p>
                      <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-emerald-400 hover:underline hover:text-emerald-300 text-xs font-bold mt-0.5 block">
                        {RESTAURANT_INFO.phone}
                      </a>
                      <p className="text-4xs text-slate-400 mt-0.5">Call anytime between 11:00 AM to 11:00 PM</p>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 bg-emerald-500/10 p-3 h-11 w-11 rounded-xl text-emerald-400 flex items-center justify-center border border-emerald-500/10">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-2xs font-semibold uppercase tracking-wider text-slate-400">Kitchen Timings</p>
                      <p className="text-slate-300 text-xs font-bold mt-0.5">
                        11:00 AM to 11:00 PM
                      </p>
                      <p className="text-4xs text-slate-400 mt-0.5">Open every day including Sunday holidays</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Instant WhatsApp floating block */}
              <div className="mt-8 border-t border-white/5 pt-6">
                <div className="rounded-xl bg-[#0d1614] p-4 border border-emerald-500/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-650 rounded-full h-9 w-9 flex items-center justify-center text-white">
                      <MessageSquare className="h-4.5 w-4.5 fill-white" />
                    </div>
                    <div>
                      <p className="text-2xs font-bold text-emerald-400">Quick WhatsApp Help</p>
                      <p className="text-4xs text-emerald-500">Response within 5 minutes</p>
                    </div>
                  </div>
                  <a
                    id="whats-btn-link"
                    href={RESTAURANT_INFO.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-3xs font-bold px-3.5 py-2 rounded-lg shadow-sm transition"
                  >
                    Chat Now
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Embedded Map & Form Combo */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            {/* Interactive Embedded Google Map with rounded border */}
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl h-64 lg:h-72 w-full relative">
              <iframe
                title="Shivoy Restaurant Borkhera Kota Google Maps Locator"
                src={RESTAURANT_INFO.gmapsEmbed}
                className="absolute inset-0 w-full h-full border-0 brightness-90 contrast-105"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick Contact Form */}
            <div className="glass-panel-dark p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-300">
              <h4 className="font-display font-extrabold text-lg text-white mb-4 flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-orange-400" /> Send an Instant Message
              </h4>

              {isSuccess ? (
                <div id="contact-success-pane" className="text-center py-8 text-emerald-400 flex flex-col items-center gap-3">
                  <div className="h-12 w-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center">
                    <Check className="h-7 w-7" />
                  </div>
                  <h5 className="font-bold font-display text-lg">Message Registered!</h5>
                  <p className="text-xs text-slate-350 max-w-sm">
                    Thank you, our Borkhera dining manager will touch base shortly.
                  </p>
                  
                  {/* WhatsApp button alternative helper */}
                  <button 
                    onClick={handleWhatsAppContact}
                    className="mt-2 flex items-center gap-1.5 bg-emerald-650 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition cursor-pointer"
                  >
                    <span>Click to Forward directly to WhatsApp</span>
                  </button>
                </div>
              ) : (
                <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-2xs font-semibold uppercase tracking-wider text-slate-400">
                        Your Full Name *
                      </label>
                      <input
                        id="input-contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sameer"
                        className="mt-1 w-full bg-slate-950 rounded-lg border border-white/5 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-505 focus:bg-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-2xs font-semibold uppercase tracking-wider text-slate-400">
                        Phone Number *
                      </label>
                      <input
                        id="input-contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 94141 86117"
                        className="mt-1 w-full bg-slate-950 rounded-lg border border-white/5 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-505 focus:bg-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-2xs font-semibold uppercase tracking-wider text-slate-400">
                        Email Address (Optional)
                      </label>
                      <input
                        id="input-contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@gmail.com"
                        className="mt-1 w-full bg-slate-950 rounded-lg border border-white/5 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-505 focus:bg-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-2xs font-semibold uppercase tracking-wider text-slate-400">
                        Inquiry Topic
                      </label>
                      <select
                        id="select-contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="mt-1 w-full bg-slate-950 rounded-lg border border-white/5 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-505 focus:bg-slate-900"
                      >
                        <option value="Dining Inquiry">General Dining Table</option>
                        <option value="Birthday Party Hosting">Birthday Party Hosting</option>
                        <option value="Catering Service">Outdoor Catering Quote</option>
                        <option value="Feedback / Complain">Feedback & Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-2xs font-semibold uppercase tracking-wider text-slate-400">
                      Message details
                    </label>
                    <textarea
                      id="textarea-contact-comment"
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="e.g. I want to inquire about a reservation for 15 people this Sunday evening..."
                      className="mt-1 w-full bg-slate-950 rounded-lg border border-white/5 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-505 focus:bg-slate-900"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      id="submit-contact-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl transition shadow active:scale-98 disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>{isSubmitting ? 'Submitting...' : 'Send Message'}</span>
                    </button>

                    <button
                      id="whats-direct-btn"
                      type="button"
                      onClick={handleWhatsAppContact}
                      className="flex-1 flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 font-bold text-xs py-3 rounded-xl transition shadow active:scale-98 cursor-pointer"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Forward to WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
