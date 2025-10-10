import { Play } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface VideoTeaserProps {
  thumbnailImage: string;
}

export function VideoTeaser({ thumbnailImage }: VideoTeaserProps) {
  return (
    <section className="py-20 px-4 bg-white" id="video">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-4 text-[#1A1A1A]">
            Watch the Teaser
          </h2>
          <div className="w-24 h-1 bg-[#00833E] mx-auto mb-6" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto relative group cursor-pointer rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-video">
            <ImageWithFallback
              src={thumbnailImage}
              alt="Video teaser thumbnail"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
            
            {/* Play button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-24 h-24 bg-[#00833E] rounded-full flex items-center justify-center shadow-lg shadow-[#00833E]/50 group-hover:shadow-xl group-hover:shadow-[#00833E]/70 transition-all duration-300">
                <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 text-[#00833E] fill-[#00833E] ml-1" />
                </div>
              </div>
            </motion.div>

            {/* Pulsing ring animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-24 h-24 rounded-full border-4 border-[#FFD700]"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.8, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-center mt-6 text-[#1A1A1A]/70 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Get a glimpse of the excitement, passion, and competitive spirit that defines 
          the Rajshahi Regional Tape T-10 Cricket Tournament.
        </motion.p>
      </div>
    </section>
  );
}
