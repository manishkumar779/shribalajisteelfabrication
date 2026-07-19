import { useState, useEffect } from "react";
import { MessageSquare, Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3 pointer-events-none" id="floating-actions-container">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/90 hover:bg-red-600 dark:bg-slate-800/90 dark:hover:bg-red-600 text-white shadow-xl hover:shadow-red-600/30 transition-all cursor-pointer pointer-events-auto border border-slate-800"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button */}
      <motion.a
        id="floating-call-btn"
        href="tel:+919718389613"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-4 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl hover:shadow-red-600/30 transition-all cursor-pointer pointer-events-auto flex items-center justify-center relative group"
        aria-label="Call Shri Balaji Steel"
      >
        <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25 group-hover:opacity-0" />
        <Phone className="w-5 h-5" />
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        id="floating-whatsapp-btn"
        href="https://wa.me/919718389613"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-emerald-600/30 transition-all cursor-pointer pointer-events-auto flex items-center justify-center relative group"
        aria-label="WhatsApp Chat"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-25 group-hover:opacity-0" />
        <MessageSquare className="w-5 h-5" />
      </motion.a>
    </div>
  );
}
