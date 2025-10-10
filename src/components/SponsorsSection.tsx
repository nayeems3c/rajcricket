import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// Import sponsor logos
import logo1 from "../assets/3d76cd4a07b9dfacff685b08fde19931262ce844.png";
import logo2 from "../assets/37ee764b5e147db627aaf0a621b6f01118af67c2.png";
import logo3 from "../assets/ccd8d9290c08d4d724e45556c737044103e98714.png";
import logo4 from "../assets/2568c957f78ff84072d98d4de60aeca8df38da88.png";
import logo5 from "../assets/2a1c9f5647e0cd2652bf1ffb96912ed48c91b1e8.png";
import logo6 from "../assets/16c654af10d09a2bd68f720f97162540e640d579.png";
import logo7 from "../assets/063048d1a07be8d0b5ccbe671778f3f6ac386fcb.png";
import logo8 from "../assets/0ba39a0b61632e55cdad246d51c1f2e2ee394bb0.png";
import logo9 from "../assets/c771c83485d32984c776e00efb1c9c5ba8d36eb4.png";
import logo10 from "../assets/dda05db18d64bb5cdde539267cee749bfb5dc927.png";
import logo11 from "../assets/d8caf45e1e0c9302c8574e6dbd723bc1a1806828.png";
import logo12 from "../assets/863ddd9f93f407206d8c26b99ef7b00d7f4d7372.png";
import logo13 from "../assets/6fac12f1edb5876f92af02970db8f9a34e34d358.png";
import logo14 from "../assets/270e3eee8af7654ab2eaf9195ab99617c59222d7.png";
import logo15 from "../assets/e9e068918750188554956d1d188c03b18fba7939.png";
import logo16 from "../assets/a7d5a695ae2a8ccd1f346816b7c029021a0ef891.png";
import logo17 from "../assets/fa10be856beae9c9b6959851dc2994c2179e1a7b.png";
import logo18 from "../assets/97bb09746df5687bc55a4cd40c4056ec6204ecd9.png";
import logo19 from "../assets/540163c9be50d8915138f392162ec232a1b08132.png";
import logo20 from "../assets/0044c508758929d0a077afdd18c71d94f73ff05f.png";
import logo21 from "../assets/ea39ee05baf2459b364f42f2613be80a1d71cec8.png";
import logo22 from "../assets/dc39357ad5954ccae3332faa001344976cdcbca2.png";

// Using existing assets in the assets folder
const logoRow1 = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const logoRow2 = [logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16];

const logoRow3 = [logo17, logo18, logo19, logo20, logo21, logo22];

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
          >
            Become a Sponsor
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
