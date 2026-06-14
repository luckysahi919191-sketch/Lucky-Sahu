import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Users, MessageSquare, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 4,
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const timeSlots = [
    '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    
    // Simulate API reservation request
    setTimeout(() => {
      const code = 'SHV-' + Math.floor(1000 + Math.random() * 9000);
      setBookingCode(code);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const shareOnWhatsApp = () => {
    const text = `Hello Shivoy Restaurant!
I would like to confirm my table reservation:
*Name*: ${formData.name}
*Phone*: ${formData.phone}
*Booking Code*: ${bookingCode}
*Guests*: ${formData.guests} persons
*Date*: ${formData.date}
*Time*: ${formData.time}
${formData.specialRequests ? `*Special Request*: ${formData.specialRequests}` : ''}

Please confirm if this is available. Thank you!`;
    
    window.open(`${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      date: new Date().toISOString().split('T')[0],
      time: '19:00',
      guests: 4,
      specialRequests: ''
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="reservation-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            id="reservation-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Header banner */}
            <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-orange-500 p-6 text-white">
              <button
                id="close-reservation-btn"
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full bg-black/20 p-1.5 text-white transition-colors hover:bg-black/40"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="font-display text-2xl font-bold">Secure a Garden Table</h3>
              <p className="mt-1 text-sm text-emerald-100">
                Experience open-air vegetarian luxury under the canopy of Kota's stars.
              </p>
            </div>

            <div className="p-6">
              {!isSuccess ? (
                <form id="reservation-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label id="label-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Full Name *
                    </label>
                    <input
                      id="input-res-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label id="label-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Phone Number *
                    </label>
                    <input
                      id="input-res-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 94141 86117"
                      className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  {/* Date and Time selectors in a grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label id="label-date" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-emerald-600" /> Date
                      </label>
                      <input
                        id="input-res-date"
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>

                    <div>
                      <label id="label-time" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-orange-500" /> Time Slot
                      </label>
                      <select
                        id="select-res-time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Guests selector */}
                  <div>
                    <label id="label-guests" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-emerald-600" /> Number of Guests
                    </label>
                    <div className="mt-1.2 flex items-center gap-2">
                      {[2, 4, 6, 8, 10].map((num) => (
                        <button
                          key={num}
                          id={`btn-guests-${num}`}
                          type="button"
                          onClick={() => setFormData({ ...formData, guests: num })}
                          className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${
                            formData.guests === num
                              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                              : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {num === 10 ? '10+' : num}
                        </button>
                      ))}
                      <input
                        id="input-res-guests-custom"
                        type="number"
                        min="1"
                        max="50"
                        value={formData.guests}
                        placeholder="Custom"
                        onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                        className="w-16 rounded-lg border border-slate-200 px-2 py-2 text-center text-sm focus:border-emerald-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label id="label-requests" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-600" /> Special Instructions (Optional)
                    </label>
                    <textarea
                      id="textarea-res-requests"
                      rows={2}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="e.g. Near the iron bridge side, birthday setup, kid high chair required..."
                      className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  {/* Important note */}
                  <div className="rounded-lg bg-orange-50 p-3 text-xs text-orange-850">
                    <span className="font-bold">Note:</span> Tables are held for up to 15 minutes past your booking time. No pre-payment is needed!
                  </div>

                  {/* Action button */}
                  <button
                    id="submit-reservation-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-200 active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Confirming with Reservation Desk...' : 'Verify & Reserve Instant Table'}
                  </button>
                </form>
              ) : (
                <div id="reservation-success-pane" className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600"
                  >
                    <CheckCircle className="h-10 w-10" />
                  </motion.div>

                  <h4 className="mt-4 font-display text-2xl font-bold text-slate-800">Table Reserved Successfully!</h4>
                  <p className="mt-2 text-sm text-slate-500 px-4">
                    Your table at Shivoy Restaurant is provisionally booked. Show this ticket upon arrival.
                  </p>

                  {/* Booking card summary */}
                  <div className="mx-2 mt-6 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/50 p-5 text-left">
                    <div className="flex justify-between items-center border-b border-dashed border-emerald-200 pb-3">
                      <div>
                        <p className="text-2xs font-semibold uppercase tracking-widest text-emerald-700">Reservation Ticket</p>
                        <p className="font-mono text-lg font-bold text-slate-800">{bookingCode}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xs font-semibold uppercase tracking-widest text-slate-400">Status</p>
                        <span className="rounded bg-emerald-100 px-2 py-0.5 text-3xs font-bold uppercase text-emerald-800">Confirmed</span>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1.5 text-xs text-slate-700">
                      <div><strong className="text-slate-500">Guest Name:</strong> {formData.name}</div>
                      <div><strong className="text-slate-500">Contact No:</strong> {formData.phone}</div>
                      <div className="grid grid-cols-2 pt-1 gap-2 border-t border-slate-100/60 mt-1">
                        <div><strong className="text-slate-500">Date:</strong> {formData.date}</div>
                        <div><strong className="text-slate-500">Time:</strong> {formData.time}</div>
                      </div>
                      <div><strong className="text-slate-500">Seat Type:</strong> Open Garden Location</div>
                      <div><strong className="text-slate-500">Total Guests:</strong> {formData.guests} Persons</div>
                      {formData.specialRequests && (
                        <div className="text-3xs italic text-slate-500">Note: "{formData.specialRequests}"</div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-2 px-2">
                    <button
                      id="whatsapp-share-btn"
                      onClick={shareOnWhatsApp}
                      className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white shadow-md hover:bg-green-700 transition"
                    >
                      <span>Share Booking on WhatsApp</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      id="reset-res-btn"
                      onClick={handleReset}
                      className="mt-2 text-sm font-semibold text-slate-500 hover:text-emerald-700 transition"
                    >
                      Close Window & View Menu
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
