import { Flame, Phone, Mail, MapPin, Facebook, MessageSquare, ShieldAlert } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact Us", href: "#contact" },
  ];

  const specialties = [
    "MS & SS designer gates",
    "Balcony & staircase railings",
    "Iron safety window grills",
    "Heavy industrial trusses",
    "Warehouse portal frames",
    "Emergency welding repairs",
  ];

  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-slate-900 pb-12 mb-12">
          
          {/* Column 1: Brand details (Ovals/Grid) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 text-white p-2 rounded-lg">
                <Flame className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-tight">
                  Shri Balaji Steel Fabrication
                </span>
                <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">
                  श्री बालाजी स्टील फैब्रिकेशन
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 font-light max-w-sm">
              We are premium metal fabricators and structural engineering welders. Delivering superior quality gates, iron window safety grills, warehouse structures, and stair railings customized exactly to your dimensions.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>A18, street no. 6, Madhu vihar, Uttam Nagar, New Delhi - 110059</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-red-500" />
                <span>+91 9718389613</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-red-500" />
                <a href="mailto:shreebalajisteelfabrication4@gmail.com" className="hover:text-red-400 transition-colors">
                  shreebalajisteelfabrication4@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Quick Directory
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) target.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Specialties
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {specialties.map((spec) => (
                <li key={spec} className="flex items-center space-x-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span className="truncate">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0 font-light">
          <div className="space-y-1 text-center md:text-left">
            <p>
              &copy; {currentYear} <strong>Shri Balaji Steel Fabrication</strong>. All Rights Reserved.
            </p>
            <p>
              Managed and Owned by: <strong className="text-slate-400">Ram Pravesh Gupta</strong> • Contact: +91 9718389613
            </p>
          </div>

          {/* Social Icons & Certification tags */}
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 hover:bg-red-600 hover:text-white transition-colors"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919718389613"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-900 hover:bg-emerald-600 hover:text-white transition-colors"
              aria-label="WhatsApp Hotline"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <div className="flex items-center space-x-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">IS:800 Quality Standard</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
