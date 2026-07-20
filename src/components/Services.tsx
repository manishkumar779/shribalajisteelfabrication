import { useState, ReactNode } from "react";
import { 
  Flame, 
  Wrench, 
  Warehouse, 
  Grid3X3, 
  Layers, 
  ShieldAlert, 
  Factory, 
  Sparkles, 
  Check, 
  Search, 
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  category: "residential" | "industrial" | "custom";
  bullets: string[];
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<"all" | "residential" | "industrial" | "custom">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const services: ServiceItem[] = [
    {
      id: "steel-fab",
      title: "Steel Fabrication Uttam Nagar",
      description: "Premium architectural and structural Steel Fabrication Uttam Nagar, custom engineered for builders and homeowners across West Delhi.",
      icon: <Wrench className="w-6 h-6" />,
      category: "industrial",
      bullets: ["Heavy structural steelwork", "Laser cutting & bending", "Rust-proof zinc priming"],
    },
    {
      id: "ms-ss-gate",
      title: "MS Gate Fabrication & Steel Gate",
      description: "Beautiful, robust custom MS Gate Fabrication featuring heavy-duty Iron Gate setups, premium Steel Gate entries, and custom slide gates built for security in West Delhi.",
      icon: <Layers className="w-6 h-6" />,
      category: "residential",
      bullets: ["Rust-proof SS finish", "Custom CNC designer patterns", "Smooth heavy-bearing rollers"],
    },
    {
      id: "iron-grill",
      title: "Iron Gate & Grill Work",
      description: "Safety window grills and sturdy boundary protection systems featuring classic Iron Gate elements forged with high-durability mild steel.",
      icon: <Grid3X3 className="w-6 h-6" />,
      category: "residential",
      bullets: ["High structural impact strength", "Modern or traditional patterns", "Weatherproof anti-rust coating"],
    },
    {
      id: "balcony-railing",
      title: "SS Railing Installations",
      description: "Modern, high-polish balcony SS Railing setups and gorgeous stair rails crafted with premium stainless steel for elegant homes in West Delhi.",
      icon: <Layers className="w-6 h-6" />,
      category: "residential",
      bullets: ["Modern minimalist styles", "Polished or hairline finish SS", "Child-safe spacing configurations"],
    },
    {
      id: "stair-railing",
      title: "Staircase Railings",
      description: "Ergonomic, ultra-stable staircase railings designed for absolute handgrip safety and architectural enhancement.",
      icon: <Layers className="w-6 h-6" />,
      category: "residential",
      bullets: ["Custom curved structures", "Wood-SS material integration", "Ultra-stable concrete anchoring"],
    },
    {
      id: "rolling-shutter",
      title: "Rolling Shutter setups",
      description: "Heavy galvanized commercial and industrial security Rolling Shutter installations, perfect for West Delhi shop owners and warehouses.",
      icon: <ShieldAlert className="w-6 h-6" />,
      category: "industrial",
      bullets: ["Heavy gauge galvanized steel", "Smooth gear box assembly", "Secure interlock systems"],
    },
    {
      id: "shed-fab",
      title: "Shed Fabrication",
      description: "Durable Shed Fabrication for terraces, industrial godowns, warehouse shelters, carports, and polycarbonate sheet assemblies.",
      icon: <Warehouse className="w-6 h-6" />,
      category: "industrial",
      bullets: ["Corrugated metal or fiber sheets", "Windproof truss structural engineering", "Heavy water drainage gutters"],
    },
    {
      id: "warehouse-structure",
      title: "Warehouse Structures",
      description: "Sturdy columnless metal storage halls, portal frames, and prefabricated structures manufactured to safety standards.",
      icon: <Warehouse className="w-6 h-6" />,
      category: "industrial",
      bullets: ["Wide columnless spans", "Prefabricated PEB assemblies", "Rigid heavy foundations"],
    },
    {
      id: "industrial-fab",
      title: "Industrial Fabrication",
      description: "Comprehensive Industrial Fabrication including machinery platforms, stair towers, customized steel tanks, and support structures in West Delhi.",
      icon: <Factory className="w-6 h-6" />,
      category: "industrial",
      bullets: ["Structural strength analysis", "High-stress arc/MIG welding", "Safety compliant walkways"],
    },
    {
      id: "welding-repair",
      title: "Welding Shop Uttam Nagar Repairs",
      description: "Emergency welding restoration at our Welding Shop Uttam Nagar for broken gates, commercial structures, hinges, and columns in West Delhi.",
      icon: <Flame className="w-6 h-6" />,
      category: "custom",
      bullets: ["MIG, TIG & ARC capabilities", "On-site structural repairs", "Reinforcement bracing"],
    },
    {
      id: "custom-steel-work",
      title: "Custom Steel Work",
      description: "Bespoke metal structures, luxury designer racks, customized fireplace guards, and artistic steel features.",
      icon: <Sparkles className="w-6 h-6" />,
      category: "custom",
      bullets: ["Tailored sketch-to-steel", "Artistic custom powder coat", "Bespoke architectural accents"],
    },
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppLink = (serviceTitle: string) => {
    const encodedText = encodeURIComponent(
      `Hello Shri Balaji Steel, I am looking at your services and I'm interested in: *${serviceTitle}*. Could you please provide a quote or more information? Thanks!`
    );
    return `https://wa.me/919718389613?text=${encodedText}`;
  };

  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <span className="text-red-600 dark:text-red-400 font-mono font-semibold tracking-wider text-sm uppercase">
              Steel Fabricator in West Delhi
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Shri Balaji Steel Fabrication & Welding Shop Uttam Nagar
            </h2>
            <div className="h-1 w-20 bg-red-600 rounded-full" />
          </div>

          {/* Search bar inside services */}
          <div className="relative max-w-xs w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-950 dark:text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-100 dark:border-slate-800 pb-5">
          {[
            { id: "all", label: "All Services" },
            { id: "residential", label: "Residential" },
            { id: "industrial", label: "Industrial & Commercial" },
            { id: "custom", label: "Custom & Repairs" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid-container">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-slate-50 dark:bg-slate-950 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50 hover:border-red-500/40 hover:shadow-xl dark:hover:shadow-red-950/5 flex flex-col justify-between transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-h-[60px]">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-slate-200/40 dark:border-slate-800/40">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-400">
                    Category: {service.category}
                  </span>
                  <a
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 group/link"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Fallback empty state */}
          {filteredServices.length === 0 && (
            <div className="col-span-full text-center py-12 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400">No services match your search queries.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-4 text-sm text-red-600 dark:text-red-400 font-semibold underline cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
