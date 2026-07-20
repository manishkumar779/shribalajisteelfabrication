import { Users, Shield, Tag, Clock, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  const highlights = [
    {
      icon: <Users className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Experienced Workers",
      description: "Our team of seasoned fabricators and certified welders bring years of hands-on expertise to every structural design.",
    },
    {
      icon: <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Strong Materials",
      description: "We source only premium grade mild steel (MS), stainless steel (SS), and cast iron to guarantee superior strength and rust resistance.",
    },
    {
      icon: <Tag className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Affordable Pricing",
      description: "Premium steel solutions don't have to break the bank. Get competitive market-best rates without compromising material quality.",
    },
    {
      icon: <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />,
      title: "Timely Delivery",
      description: "We value your schedule. Our operations are streamlined to ensure completion and installation within the agreed deadline.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Rich descriptive copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-red-600 dark:text-red-400 font-mono font-semibold tracking-wider text-sm uppercase">
                Forging Trust Since Inception
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                About Shri Balaji Steel Fabrication
              </h2>
              <div className="h-1 w-20 bg-red-600 rounded-full" />
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Led by owner <strong className="text-slate-900 dark:text-white font-semibold">Ram Pravesh Gupta</strong>, <strong>Shri Balaji Steel Fabrication</strong> is the leading choice for top-notch <strong>Steel Fabrication in Uttam Nagar</strong> and a highly recommended <strong>Steel Fabricator in Delhi</strong>. Operating as a premier <strong>Welding Shop in Uttam Nagar</strong>, we bring robust structural design, precise welding, and excellent durability to residential, commercial, and industrial clients.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              We excel in custom <strong>Gate Fabrication</strong> (including secure <strong>MS Gate</strong> designs), premium balcony <strong>SS Railing</strong>, protective <strong>Rolling Shutter</strong> setups, warehouse <strong>Shed Fabrication</strong>, and all kinds of complex <strong>Industrial Fabrication</strong>. Our expert craftsmanship guarantees beautiful, robust, and completely safe metal installations.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-bold text-sm group"
              >
                <span>Request custom design consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Key strength cards */}
          <div className="lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-6" id="about-highlights-grid">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-xl dark:hover:shadow-red-950/10 hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
