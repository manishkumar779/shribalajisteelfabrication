import React, { useState } from "react";
import { Phone, MessageSquare, MapPin, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Steel Fabrication",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    "Steel Fabrication",
    "MS & SS Gate",
    "Iron Grill",
    "Balcony Railing",
    "Stair Railing",
    "Rolling Shutter",
    "Shed Fabrication",
    "Warehouse Structure",
    "Industrial Fabrication",
    "Welding Repair",
    "Custom Steel Work"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!formData.name || !formData.phone) {
      alert("Please enter your Name and Phone Number");
      return;
    }

    // Build WhatsApp Message Link for instant submission!
    const textMsg = `Hello Shri Balaji Steel, I would like to request a fabrication quote.\n\n` +
                    `*Name:* ${formData.name}\n` +
                    `*Phone:* ${formData.phone}\n` +
                    `*Interested Service:* ${formData.service}\n` +
                    `*Details:* ${formData.message || "None provided"}`;
                    
    const waUrl = `https://wa.me/919718389613?text=${encodeURIComponent(textMsg)}`;
    
    setIsSubmitted(true);
    
    // Open in a new tab after 1 second
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", service: "Steel Fabrication", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 dark:text-red-400 font-mono font-semibold tracking-wider text-sm uppercase">
            Visit Our Welding Shop in Uttam Nagar
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Shri Balaji Steel Fabrication Contact Details
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Ready to start? Contact owner Ram Pravesh Gupta for professional <strong>Steel Fabrication in Uttam Nagar</strong>. Whether it is <strong>Gate Fabrication</strong>, <strong>MS Gate</strong> construction, balcony <strong>SS Railing</strong> setups, security <strong>Rolling Shutter</strong> manufacturing, or heavy-duty <strong>Shed Fabrication</strong>, visit our local workshop for expert consultations and free estimates.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Direct Contact Details & Form */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-slate-50 dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-md">
              <h3 className="font-display font-bold text-xl text-slate-950 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                Send Fast Quote Request
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-red-500 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                    Phone Number / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g., +91 9876543210"
                    className="w-full bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-red-500 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                    Select Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-red-500 dark:text-white"
                  >
                    {servicesList.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block mb-1">
                    Dimensions or Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide measurements, steel grade SS/MS, design reference link..."
                    className="w-full bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-red-500 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-red-600/25 transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 animate-bounce" />
                      <span>Opening WhatsApp Chat...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit & Chat on WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Maps and Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Owner Contact Information Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between">
                <div>
                  <Phone className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="text-xs text-slate-400 font-mono tracking-wider uppercase mb-1">
                    Call Direct
                  </h4>
                  <p className="font-bold text-lg text-slate-950 dark:text-white">
                    +91 9718389613
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Speak directly with Ram Pravesh Gupta.
                  </p>
                </div>
                <a
                  href="tel:+919718389613"
                  className="mt-4 inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2 rounded-lg transition-colors"
                >
                  Call Now
                </a>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between">
                <div>
                  <MessageSquare className="w-8 h-8 text-emerald-600 mb-3" />
                  <h4 className="text-xs text-slate-400 font-mono tracking-wider uppercase mb-1">
                    WhatsApp Chat
                  </h4>
                  <p className="font-bold text-lg text-slate-950 dark:text-white">
                    +91 9718389613
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Send images or sketches of gates/railings.
                  </p>
                </div>
                <a
                  href="https://wa.me/919718389613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 rounded-lg transition-colors"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>

            {/* Shop timing and details block */}
            <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-3">
              <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-300">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono tracking-wider uppercase text-slate-400">Workshop Address</h4>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                    A18, street no. 6, Madhu vihar, Uttam Nagar, New Delhi - 110059, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono tracking-wider uppercase text-slate-400">Workshop Timings</h4>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                    Monday - Sunday: 08:00 AM - 09:00 PM <span className="text-red-500 font-normal text-xs ml-2">(Open All 7 Days)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono tracking-wider uppercase text-slate-400">Email Address</h4>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                    <a href="mailto:shreebalajisteelfabrication4@gmail.com" className="hover:text-red-500 transition-colors">
                      shreebalajisteelfabrication4@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8: Google Map Embed */}
            <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl overflow-hidden shadow-md h-[240px] relative group" id="google-maps-container">
              {/* Actual Google Maps iframe configured with Uttam Nagar coordinates */}
              <iframe
                title="Shri Balaji Steel Fabrication Google Map Location"
                src="https://maps.google.com/maps?q=A18,%20street%20no.%206%20,%20Madhu%20vihar,%20Uttam%20Nagar,%20new%20delhi-110059&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter dark:invert-[90%] dark:hue-rotate-[180deg] dark:contrast-[85%] grayscale-[15%] opacity-90 group-hover:opacity-100 transition-opacity"
              ></iframe>

              <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 shadow-md pointer-events-none">
                <span className="text-[10px] font-mono text-white flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Workshop Area (Uttam Nagar)</span>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
