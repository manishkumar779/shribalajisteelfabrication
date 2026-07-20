import { ReactNode } from "react";
import { Award, ShieldCheck, DollarSign, Clock, PenTool, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface BenefitCard {
  icon: ReactNode;
  title: string;
  description: string;
  metric: string;
}

export default function WhyChooseUs() {
  const benefits: BenefitCard[] = [
    {
      icon: <Award className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Experienced Craftsmen",
      description: "Our workforce consists of highly trained metalworkers under the direction of Ram Pravesh Gupta. Precision in every weld is our standard at our premier Welding Shop Uttam Nagar.",
      metric: "15+ Years Exp",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Premium Quality Materials",
      description: "We use top-grade mild steel and stainless steel with thick gauges. Anti-rust priming, MS Gate Fabrication, and custom SS Railing are built to perfection.",
      metric: "Grade A Steel",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Affordable Prices",
      description: "Honest quotes, upfront prices, and zero hidden charges. We optimize layouts and cutting plans to give you the absolute best pricing.",
      metric: "No Hidden Costs",
    },
    {
      icon: <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "On-Time Delivery",
      description: "Our shop operates around structured timelines in West Delhi. We manufacture fast, perform safety inspections, and install strictly on schedule.",
      metric: "100% On-Time",
    },
    {
      icon: <PenTool className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Custom Design Solutions",
      description: "Do you have a custom photo, sketch, or Pinterest reference? We customize dimensions, CNC patterns, and finishes to fit your vision perfectly.",
      metric: "Tailor Made",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Customer Satisfaction",
      description: "Our relationship doesn't end at delivery. We guarantee structural durability and offer dedicated support for repairs and modifications.",
      metric: "5-Star Service",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 dark:text-red-400 font-mono font-semibold tracking-wider text-sm uppercase">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Shri Balaji Steel Fabrication?
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            We don't just join metal; we forge durable, high-quality architectural assets that elevate security, aesthetics, and property valuation.
          </p>
        </div>

        {/* Features / Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="benefits-grid-container">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-2xl hover:border-red-500/30 dark:hover:shadow-red-950/5 relative overflow-hidden group transition-all duration-300"
            >
              {/* Inner glowing accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full blur-xl group-hover:bg-red-500/10 transition-colors" />

              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                  {benefit.icon}
                </div>
                {/* Metric Badge */}
                <span className="text-xs font-mono font-semibold text-red-600 dark:text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full">
                  {benefit.metric}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative side accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-red-600 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Mini Trust Panel at bottom */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-xl">
              Have a custom steel project in mind?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl font-light">
              Send us your references, dimensions, or blueprints on WhatsApp and get a free estimated fabrication price breakdown in less than 24 hours.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center space-x-3 bg-red-600/20 border border-red-500/40 px-4 py-3 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-red-500" />
            <span className="text-sm font-semibold tracking-tight">Free On-Site Site Measurement</span>
          </div>
        </div>

      </div>
    </section>
  );
}
