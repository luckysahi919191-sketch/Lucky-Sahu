import { Info, ShieldCheck, HeartPulse, Sparkles, MapPin } from 'lucide-react';
import { RESTAURANT_IMAGES, RESTAURANT_INFO } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Luxury Image Array */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 aspect-4/3 max-w-md md:max-w-xl mx-auto">
              <img
                src={RESTAURANT_IMAGES.gardenDining}
                alt="Shivoy Garden Atmosphere"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
            
            {/* Absolute overlapping badge card */}
            <div className="absolute -bottom-6 right-2 sm:-right-6 z-20 glass-panel-dark p-5 rounded-2xl max-w-xs shadow-xl border border-white/10 flex items-start gap-4">
              <div className="bg-emerald-500/15 p-2.5 rounded-xl text-emerald-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h5 className="font-display font-bold text-slate-100 text-sm">100% Pure Vegetarian</h5>
                <p className="text-3xs text-slate-400 mt-1">
                  Absolute hygienic preparation with certified fresh organic produce.
                </p>
              </div>
            </div>

            {/* Another styling asset: small circle floating card */}
            <div className="absolute -top-6 -left-4 z-20 bg-orange-500 text-white rounded-full h-24 w-24 flex flex-col items-center justify-center p-3 text-center shadow-lg transform -rotate-12">
              <span className="font-display font-extrabold text-lg leading-none">₹200-400</span>
              <span className="text-4xs uppercase font-semibold tracking-wider mt-0.5">Per PersonAvg</span>
            </div>
          </div>

          {/* Right Column: Editorial story */}
          <div className="lg:col-span-6 flex flex-col">
            
            <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-wider text-xs uppercase mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <span>Our Legacy & Story</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              A Peaceful Garden Haven For Culinary & Family Delights
            </h2>

            <p className="mt-6 text-slate-350 text-base leading-relaxed">
              Located beautifully on the <strong>80 Feet Link Road near the Steel Bridge in Borkhera, Kota</strong>, 
              Shivoy Fun 'n' Food Restaurant is a cornerstone for vegetarian connoisseurs. We provide 
              a lush, sprawling green environment where families can unwind, celebrate life's milestones, and appreciate traditional values in modern open garden setups.
            </p>

            <p className="mt-4 text-slate-350 text-base leading-relaxed">
              Every detail is tailored to your comfort. From the smoky charcoal flavor of hot clay-baked Paneer Tikka 
              to the deep-rooted grand varieties in our royal Rajasthani and Deluxe Thalis, our menus reflect Kota's beautiful hospitality with values of high quality and affordable pricing.
            </p>

            {/* Essential features tick items */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Pure Vegetarian Kitchen", text: "Zero compromise, purely handpicked grains & fresh cottage cheeses.", icon: <ShieldCheck className="h-5 w-5 text-emerald-400" /> },
                { title: "Open Air Nature Seating", text: "Stunning outdoor lawn arrangement with soft background melodies.", icon: <Sparkles className="h-5 w-5 text-orange-400" /> },
                { title: "Kids & Family Pleasantness", text: "Quiet safety zones, separate child-friendly dishes, spacious layouts.", icon: <HeartPulse className="h-5 w-5 text-emerald-400" /> },
                { title: "Borkhera Location Spot", text: "Extremely easy approachability near Steel Bridge with large parking.", icon: <MapPin className="h-5 w-5 text-orange-400" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-205">{item.title}</h4>
                    <p className="text-3xs text-slate-400 mt-0.5 leading-snug">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Traditional Quote block */}
            <div className="mt-8 border-l-4 border-orange-500 pl-4 py-2.5 italic text-slate-350 text-sm bg-orange-500/5 rounded-r-xl pr-3">
              "We serve meals that are not just prepared but are handcrafted following sacred traditions of hygiene and deep Rajasthani warm hospitality. Come home to nature."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
