import { Button } from "./ui/button";
import { motion } from "motion/react";
import fleetLogo from "../assets/Fleet-logo.png";

const sponsors = [
  fleetLogo,
  "https://res.cloudinary.com/dugyoxtfl/image/upload/v1756563330/Green_Bangladesh_nisskg.png",
  "https://res.cloudinary.com/dugyoxtfl/image/upload/v1756554087/ssbuilders_ms8s5w.png",
  "https://res.cloudinary.com/dugyoxtfl/image/upload/v1756575517/rajfm_xo16f2.png",
];

const logoRow1 = [...sponsors, ...sponsors];
const logoRow2 = [...sponsors, ...sponsors];
const logoRow3 = [...sponsors, ...sponsors];

export function SponsorsSection() {
  return (
    <section className="py-20 px-4 bg-[#F5F5F5]" id="sponsors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-4 text-[#1A1A1A]">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-[#00833E] mx-auto mb-6" />
        </motion.div>

        <motion.div
          className="content-stretch flex gap-[40px] items-center relative w-full mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Frosted glass container - matching Figma OverlayBorderShadow */}
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[32px] shrink-0">
            {/* Background layers matching Figma */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
              <div className="absolute bg-[rgba(72,71,71,0.05)] inset-0 mix-blend-luminosity rounded-[32px]" />
              <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.5)] inset-0 mix-blend-color-burn rounded-[32px]" />
            </div>

            {/* Content container */}
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex flex-col items-center justify-center p-[30px] relative w-full">
                {/* Government section - scrolling logo carousel */}
                <div className="backdrop-blur-2xl backdrop-filter bg-[rgba(255,255,255,0.15)] h-[119px] overflow-clip relative shrink-0 w-full">
                  {/* Frame container with all three rows horizontally aligned */}
                  <div className="absolute content-stretch flex items-center left-[4px] top-0">
                    {/* Row 1 - Scrolls left */}
                    <motion.div
                      className="content-stretch flex gap-[40px] items-center relative shrink-0"
                      animate={{
                        x: [0, -1280],
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {[...logoRow1, ...logoRow1].map((logo, index) => (
                        <motion.div
                          key={index}
                          className="content-stretch flex items-center justify-center relative shrink-0 size-[120px]"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          <div className="max-h-[120px] max-w-[120px] relative shrink-0 size-[120px]">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img
                                alt="Sponsor logo"
                                className="absolute left-0 max-w-none size-full top-0"
                                src={logo}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Row 2 - Scrolls right */}
                    <motion.div
                      className="content-stretch flex gap-[40px] items-center relative shrink-0"
                      animate={{
                        x: [-1280, 0],
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {[...logoRow2, ...logoRow2].map((logo, index) => (
                        <motion.div
                          key={index}
                          className="content-stretch flex items-center justify-center relative shrink-0 size-[120px]"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          <div className="max-h-[120px] max-w-[120px] relative shrink-0 size-[120px]">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img
                                alt="Sponsor logo"
                                className="absolute left-0 max-w-none size-full top-0"
                                src={logo}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Row 3 - Scrolls left */}
                    <motion.div
                      className="content-stretch flex gap-[40px] items-center relative shrink-0"
                      animate={{
                        x: [0, -960],
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {[...logoRow3, ...logoRow3, ...logoRow3].map((logo, index) => (
                        <motion.div
                          key={index}
                          className="content-stretch flex items-center justify-center relative shrink-0 size-[120px]"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          <div className="max-h-[120px] max-w-[120px] relative shrink-0 size-[120px]">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img
                                alt="Sponsor logo"
                                className="absolute left-0 max-w-none size-full top-0"
                                src={logo}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Figma-style shadows and borders */}
            <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.5px_1px_0px_inset_rgba(255,255,255,0.3),0px_-0.5px_1px_0px_inset_rgba(255,255,255,0.25),0px_1.5px_4px_0px_inset_rgba(0,0,0,0.08),0px_1.5px_4px_0px_inset_rgba(0,0,0,0.1)]" />
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[32px]" />
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#00833E] text-[#00833E] hover:bg-[#00833E] hover:text-white px-8 py-6 transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Become a Sponsor
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
