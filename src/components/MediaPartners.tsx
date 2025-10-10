import { motion } from "motion/react";

// CricGeo logo - you can replace this with your actual logo
const cricGeoLogo = "/assets/cricgeo-logo.svg";

const mediaPartners = [
  { name: "Media Partner 1", logo: "M1" },
  { name: "Media Partner 2", logo: "M2" },
  { name: "Media Partner 3", logo: "M3" },
  { name: "Media Partner 4", logo: "M4" },
  { name: "Media Partner 5", logo: "M5" },
  { name: "Media Partner 6", logo: "M6" },
];

export function MediaPartners() {
  return (
    <section className="py-20 px-4 bg-white" id="media">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-4 text-[#1A1A1A]">
            Media Partner
          </h2>
          <div className="w-24 h-1 bg-[#00833E] mx-auto mb-6" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00833E] to-[#005a2b] p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Logo and branding */}
              <motion.div
                className="text-center md:text-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* cricGeo Logo */}
                <div className="inline-block bg-white rounded-xl p-4 shadow-lg mb-6">
                  <img
                    src={cricGeoLogo}
                    alt="cricGeo - Live Cricket Streaming"
                    className="h-20 md:h-24 w-auto object-contain mx-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "block";
                      console.log("cricGeo logo loaded from:", cricGeoLogo);
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-white text-lg leading-relaxed mb-6">
                  Your premier destination for live local cricket streaming.
                  cricGeo brings you all the action from the grassroots to
                  regional tournaments across Bangladesh.
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center gap-3 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-[#00833E]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>HD Live Streaming</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-[#00833E]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Expert Commentary</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-[#00833E]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Match Highlights & Replays</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right side - Cricket image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjAxMDkwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Cricket streaming"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  {/* Overlay badge */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span className="uppercase tracking-wider">Live</span>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl text-[#FFD700]">50+</div>
                    <div className="text-xs text-white/80">Matches</div>
                  </motion.div>
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl text-[#FFD700]">8</div>
                    <div className="text-xs text-white/80">Districts</div>
                  </motion.div>
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl text-[#FFD700]">24/7</div>
                    <div className="text-xs text-white/80">Coverage</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-white/90 text-sm mb-4">
                Watch all Rajshahi Regional Tape T-10 Cricket Tournament matches
                live on cricGeo
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="#"
                  className="bg-[#FFD700] hover:bg-[#ffd000] text-[#00833E] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Watch Live Now
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
