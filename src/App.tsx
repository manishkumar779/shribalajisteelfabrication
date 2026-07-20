import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import brandLogo from "./assets/images/shri_balaji_logo_1784570362861.jpg";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true); // Default to premium dark theme
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Synchronize Dark Theme class on <html> element
  useEffect(() => {
    // Check if user previously saved a theme preference
    const savedTheme = localStorage.getItem("shri-balaji-theme");
    if (savedTheme) {
      const darkPref = savedTheme === "dark";
      setIsDark(darkPref);
      if (darkPref) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // By default, add dark mode for that premium welding-shop vibe!
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("shri-balaji-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("shri-balaji-theme", "light");
    }
  };

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 selection:bg-red-600 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-55 bg-slate-950 flex flex-col items-center justify-center p-4 text-center select-none"
          >
            <div className="relative flex flex-col items-center">
              {/* Spinning/pulsing loader circle representing metal arc welding */}
              <div className="w-24 h-24 rounded-full border-4 border-slate-800 border-t-red-600 animate-spin" />
              
              {/* Official brand logo centered inside */}
              <div className="absolute top-2 left-2 w-20 h-20 rounded-full overflow-hidden border border-slate-800 bg-black flex items-center justify-center p-1">
                <img
                  src={brandLogo}
                  alt="Shri Balaji Steel Fabrication Logo"
                  className="w-full h-full object-contain mix-blend-screen animate-pulse"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Sparkles around loader */}
              <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-500 animate-bounce" />
              <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-orange-500 animate-ping" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-2"
            >
              <h1 className="font-display font-extrabold text-2xl text-white tracking-wide leading-tight">
                Shri Balaji Steel Fabrication
              </h1>
              <p className="text-xs text-red-500 font-mono font-semibold uppercase tracking-widest">
                श्री बालाजी स्टील फैब्रिकेशन
              </p>
              <p className="text-sm text-slate-500 max-w-xs font-light">
                Igniting engineering precision & structural integrity...
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="site-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col min-h-screen"
          >
            {/* Nav Header */}
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            {/* Sections */}
            <main className="flex-grow">
              <Hero />
              <AboutUs />
              <Services />
              <WhyChooseUs />
              <Gallery />
              <Reviews />
              <Contact />
            </main>

            {/* Footers and Floating Elements */}
            <Footer />
            <FloatingActions />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
