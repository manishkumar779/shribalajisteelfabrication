import { useState } from "react";
import { Eye, X, MessageSquare, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import gateImg from "../assets/images/steel_gate_fabrication_1784444187911.jpg";
import shedImg from "../assets/images/industrial_shed_structure_1784444204172.jpg";

interface GalleryItem {
  id: string;
  title: string;
  category: "gate" | "railing" | "shed" | "grill";
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<"all" | "gate" | "railing" | "shed" | "grill">("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "proj-1",
      title: "Premium Luxury MS & SS Gate",
      category: "gate",
      categoryLabel: "Gates & Grills",
      imageUrl: gateImg,
      description: "Modern architectural entrance gate designed in stainless steel combined with high-durability wood finish panels.",
    },
    {
      id: "proj-2",
      title: "Heavy Duty Industrial Steel Shed",
      category: "shed",
      categoryLabel: "Sheds & Structures",
      imageUrl: shedImg,
      description: "Rigid truss-and-rafter structure completed for a 12,000 sq ft industrial manufacturing plant warehouse.",
    },
    {
      id: "proj-3",
      title: "Elegant Spiral Balcony Railing",
      category: "railing",
      categoryLabel: "Railings",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      description: "Highly polished SS-304 staircase and balcony safety railing with curved ergonomic joints.",
    },
    {
      id: "proj-4",
      title: "Safety Window Ornamental Grill",
      category: "grill",
      categoryLabel: "Gates & Grills",
      imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
      description: "Classical hand-forged mild steel window security grill featuring ornamental floral details.",
    },
    {
      id: "proj-5",
      title: "Commercial Motorized Rolling Shutter",
      category: "gate",
      categoryLabel: "Gates & Grills",
      imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800",
      description: "High-security motorized heavy-gauge steel shutter installed for a modern commercial storefront.",
    },
    {
      id: "proj-6",
      title: "Prefabricated Portal Roof Frame",
      category: "shed",
      categoryLabel: "Sheds & Structures",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      description: "Engineered steel building portal frames assembled with accurate high-tensile anchor bolts.",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const getWhatsAppInquiryLink = (itemTitle: string) => {
    const encoded = encodeURIComponent(
      `Hello Shri Balaji Steel, I saw your project *${itemTitle}* in your gallery and would like to ask about custom pricing for a similar layout.`
    );
    return `https://wa.me/919718389613?text=${encoded}`;
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <span className="text-red-600 dark:text-red-400 font-mono font-semibold tracking-wider text-sm uppercase">
              Showcasing Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Projects Gallery
            </h2>
            <div className="h-1 w-20 bg-red-600 rounded-full" />
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2" id="gallery-filter-buttons">
            {[
              { id: "all", label: "All Projects" },
              { id: "gate", label: "Gates" },
              { id: "railing", label: "Railings" },
              { id: "shed", label: "Sheds" },
              { id: "grill", label: "Grills" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight uppercase cursor-pointer transition-all ${
                  activeCategory === tab.id
                    ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-slate-100 dark:bg-slate-950 rounded-2xl overflow-hidden shadow-md border border-slate-200/40 dark:border-slate-800/40 aspect-4/3 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Photo */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-95 dark:brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10" />

                {/* Permanent Title Panel (Glassmorphic look) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/25 dark:border-slate-800/30 shadow-md group-hover:translate-y-[-4px] transition-transform duration-300 z-20">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-display font-bold text-sm text-slate-950 dark:text-white truncate">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-1 mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Full Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              id="lightbox-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-955/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-55 bg-slate-950/80 hover:bg-red-600 hover:text-white p-2.5 rounded-full text-slate-300 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid md:grid-cols-2">
                  {/* Photo half */}
                  <div className="relative aspect-4/3 md:aspect-auto md:h-[450px]">
                    <img
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider">
                      {selectedItem.categoryLabel}
                    </div>
                  </div>

                  {/* Copy half */}
                  <div className="p-8 flex flex-col justify-between space-y-6 text-white">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-red-500">
                        <Flame className="w-5 h-5 animate-pulse" />
                        <span className="text-xs font-mono font-semibold tracking-widest uppercase">
                          Shri Balaji Portfolio
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-2xl tracking-tight leading-tight">
                        {selectedItem.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed font-light">
                        {selectedItem.description}
                      </p>

                      <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs font-mono">
                        <div>
                          <span className="text-slate-500 block mb-1">CRAFTSMAN</span>
                          <span className="font-semibold text-slate-200">Ram Pravesh Gupta</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block mb-1">AVAILABILITY</span>
                          <span className="font-semibold text-emerald-400">Order on Custom Request</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
                      <a
                        href={getWhatsAppInquiryLink(selectedItem.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl transition-all shadow-md text-sm w-full"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Inquire Price on WA</span>
                      </a>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold px-5 py-3 rounded-xl transition-all text-sm w-full"
                      >
                        Back to Gallery
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
