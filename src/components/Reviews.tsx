import { Star, Quote, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  project: string;
  date: string;
  initials: string;
}

export default function Reviews() {
  const reviews: Testimonial[] = [
    {
      id: "rev-1",
      name: "Ramesh Kumar",
      role: "Home Owner, Delhi NCR",
      rating: 5,
      comment: "We got our main designer MS gate and balcony railings fabricated by Shri Balaji Steel. The finishing is outstanding! The SS-304 material is heavy and mirror-polished. Owner Ram Pravesh Gupta is extremely professional and delivered everything two days before our housewarming.",
      project: "Custom MS Gate & Balcony Railings",
      date: "May 2026",
      initials: "RK",
    },
    {
      id: "rev-2",
      name: "Sunil Tyagi",
      role: "Warehouse Manager, Noida",
      rating: 5,
      comment: "Absolutely top-class shed fabrication. They built a 5,000 sq ft industrial portal structure for our warehouse. The welding joints are neat, and structural strength is rigid. Their pricing was the most honest and transparent compared to other vendors.",
      project: "5,000 Sq Ft Industrial Shed",
      date: "June 2026",
      initials: "ST",
    },
    {
      id: "rev-3",
      name: "Anita Sharma",
      role: "Residential Client, Gurgaon",
      rating: 5,
      comment: "Outstanding custom window safety grills! We wanted unique CNC geometric patterns for our modern villa. Shri Balaji Steel customized the size and finish flawlessly. The steel is solid, heavy, and primed beautifully against rain and humidity.",
      project: "Designer Window Safety Grills",
      date: "April 2026",
      initials: "AS",
    },
    {
      id: "rev-4",
      name: "Vijay Singh",
      role: "Civil Contractor, New Delhi",
      rating: 5,
      comment: "As a contractor, I need sub-contractors who are punctual and skilled. I regularly assign all my staircase railing and balcony SS work to Ram Pravesh Gupta. His welders are certified experts who anchor railings perfectly into the marble treads without cracking.",
      project: "Staircase SS Railing Installations",
      date: "July 2026",
      initials: "VS",
    },
    {
      id: "rev-5",
      name: "Deepak Chawla",
      role: "Retail Store Owner",
      rating: 5,
      comment: "Excellent rolling shutters. We installed three heavy-gauge rolling shutters with automated gearboxes for our electronics showroom. The movement is smooth and completely noiseless. Great peace of mind regarding safety.",
      project: "Motorized Rolling Shutters",
      date: "March 2026",
      initials: "DC",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background glow ambient */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 dark:text-red-400 font-mono font-semibold tracking-wider text-sm uppercase">
            Customer Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved By Our Clients
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Take a look at what our residential and commercial clients say about our steel fabrication quality and customer support.
          </p>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-container">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800/60 shadow-md hover:shadow-xl dark:hover:shadow-red-950/10 hover:border-red-500/20 transition-all duration-300 relative ${
                index === 3 || index === 4 ? "md:col-span-1" : ""
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-100 dark:text-slate-800/50 pointer-events-none">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              {/* Star Ratings */}
              <div className="flex items-center space-x-1 mb-4 text-amber-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Comment Text */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-6 relative z-10 font-light">
                "{review.comment}"
              </p>

              {/* Project Tags */}
              <div className="mb-4">
                <span className="inline-flex items-center text-xs font-mono font-medium bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 px-2.5 py-1 rounded-md">
                  Project: {review.project}
                </span>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-auto">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm tracking-wide shadow-md">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-950 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {review.role} • <span className="text-slate-500 font-mono text-[10px]">{review.date}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Metric Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 px-6 py-4 rounded-2xl shadow-sm">
            <div className="flex items-center text-amber-500 space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
              Highly Rated: <strong>4.9 / 5.0 Stars</strong> based on over 180+ verified Google & offline business reviews.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
