import { motion } from 'motion/react';
import { Leaf, Wallet, Users, Trees, Zap, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "100% Pure Vegetarian",
      description: "We represent full safety of faith. Absolutely vegetarian dishes cooked with premium cold-press oils and pristine hygiene checkups.",
      icon: <Leaf className="h-6 w-6 text-emerald-400" />,
      color: "bg-emerald-500/10 text-emerald-300",
      badge: "Pure Veg"
    },
    {
      title: "Affordable Price Range",
      description: "Gourmet, luxury dining is accessible to all. Indulge in hefty royal thalis and premium fast foods averaging only ₹200–400 per guest.",
      icon: <Wallet className="h-6 w-6 text-orange-400" />,
      color: "bg-orange-500/10 text-orange-300",
      badge: "High Value"
    },
    {
      title: "Peaceful Family Atmosphere",
      description: "Structured specifically to provide wide tables, child safety, a play lawn, and serene sounds away from main highway traffic noise.",
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      color: "bg-emerald-500/10 text-emerald-300",
      badge: "Family Approved"
    },
    {
      title: "Atmospheric Garden Dining",
      description: "Eat under open star-skies accompanied by stunning fairy lights, fresh garden air, and lush green grass landscapes.",
      icon: <Trees className="h-6 w-6 text-orange-400" />,
      color: "bg-orange-500/10 text-orange-300",
      badge: "Best Ambiance"
    },
    {
      title: "Express Hot Fast Service",
      description: "We respect your hunger. Expert kitchen line layout and quick service ensure your breads and appetizers arrive sizzling hot.",
      icon: <Zap className="h-6 w-6 text-emerald-400" />,
      color: "bg-emerald-500/10 text-emerald-300",
      badge: "Quick Cook"
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-[#050811] to-[#04060d] relative overflow-hidden border-b border-white/5">
      
      {/* Decorative leafy elements */}
      <div className="absolute top-10 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Caption */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            <Star className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
            <span>Why Shivoy Stands Apart</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-3 tracking-tight">
            Perfecting Food & Ambiance For True Memories
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Discover why hundreds of families in Borkhera and Kota pick Shivoy Fun 'n' Food as their beloved retreat.
          </p>
        </div>

        {/* Dynamic Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-panel-dark rounded-2xl p-6 shadow-sm border border-white/5 hover:border-white/10 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className={`p-3 rounded-xl ${point.color} group-hover:scale-110 transition-transform duration-300`}>
                    {point.icon}
                  </div>
                  <span className="text-4xs font-bold tracking-wider uppercase bg-slate-900 text-slate-400 px-2.5 py-1 rounded-full group-hover:bg-amber-500/20 group-hover:text-amber-300 transition-colors">
                    {point.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-emerald-400 transition-colors">
                  {point.title}
                </h3>
                
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Little bottom design indicator bar */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-emerald-400 to-orange-400 rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}

          {/* Special Booking Invitation Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl p-6 bg-gradient-to-br from-emerald-800 to-emerald-950 text-white flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="veg-badge bg-white scale-110 self-start">
                <div className="veg-dot"></div>
              </div>
              <h3 className="font-display font-extrabold text-xl text-white mt-4 tracking-tight">
                Plan a Milestone family birthday or anniversary?
              </h3>
              <p className="mt-3 text-xs text-emerald-200 leading-relaxed md:max-w-xs">
                We organize complete decorative setups, balloon arches, and custom group menus for parties up to 100 people in our VIP garden sections.
              </p>
            </div>

            <a 
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-900 bg-amber-400 hover:bg-amber-300 py-2.5 px-4 rounded-xl transition-all self-start shadow-md shadow-amber-400/20"
            >
              <span>Organize Event Inquiries</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
