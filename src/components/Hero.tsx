import { Phone, MessageSquare, ShieldCheck, Award, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";
import heroBg from "../assets/images/welding_hero_banner_1784444168915.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950"
    >
      {/* Background Image with Dark & Molten Red Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Premium Welding and Steel Fabrication Background"
          className="w-full h-full object-cover scale-105 filter brightness-45 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Advanced industrial ambient lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        {/* Molten iron-red ambient glow in bottom-left */}
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-red-600/25 blur-[120px] spark-glow" />
      </div>

      {/* Decorative Spark Grid */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        {/* Animated ambient spark elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-orange-500 animate-ping duration-1000 opacity-60" />
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping duration-1500 opacity-40" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-red-500 animate-ping duration-2000 opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-red-600/15 border border-red-500/30 px-3 py-1.5 rounded-full"
            >
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-red-400 tracking-wider uppercase">
                Premium Industrial Steelwork
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight"
            >
              Shri Balaji <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600">
                Steel Fabrication
              </span>
              <span className="block text-2xl sm:text-3xl font-display font-semibold text-slate-300 mt-2">
                श्री बालाजी स्टील फैब्रिकेशन
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
            >
              Professional Steel Fabrication & Welding Services. We craft premium quality gates, grills, industrial structures, and customized steel designs built to last a lifetime.
            </motion.p>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 py-3 border-y border-slate-800 max-w-xl"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Strong Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">Expert Welders</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">100% Quality</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
              id="hero-cta-buttons"
            >
              <a
                href="tel:+919718389613"
                className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-102 hover:shadow-red-600/40 text-base"
              >
                <Phone className="w-5 h-5" />
                <span>Call +91 9718389613</span>
              </a>

              <a
                href="https://wa.me/919718389613"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:scale-102 hover:shadow-emerald-600/40 text-base"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Quote</span>
              </a>
            </motion.div>
          </div>

          {/* Side Card displaying Owner & Fast Service Pitch */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-2xl relative"
            >
              {/* Molten core effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
              
              <h3 className="font-display font-bold text-xl text-white border-b border-slate-800 pb-4 mb-4">
                Express Inquiry Panel
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                    Business Owner
                  </label>
                  <p className="text-lg font-bold text-white">Ram Pravesh Gupta</p>
                </div>

                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                    Specializations
                  </label>
                  <p className="text-sm text-slate-300">
                    Gates, Railings, Rolling Shutters, Warehouse Sheds & Industrial Metal fabrication.
                  </p>
                </div>

                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                    Current Operation Status
                  </label>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-sm text-emerald-400 font-semibold">Active & Accepting Orders</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <p className="text-xs text-slate-400 italic text-center">
                    "Experienced workers, strong materials, affordable pricing, and timely delivery guaranteed!"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
