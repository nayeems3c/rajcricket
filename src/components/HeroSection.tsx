import { Button } from "./ui/button";
import { Clock, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  backgroundImage: string;
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-16">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-sm" />
      </div>

      {/* Animated cricket ball */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 rounded-full bg-[#FFD700] opacity-20 blur-xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl uppercase tracking-tight mb-6 text-white">
            Rajshahi Regional<br />
            <span className="text-[#FFD700]">Tape T-10 Cricket</span><br />
            Tournament
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-[#F5F5F5] mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where 8 Districts Battle for Glory!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-[#00833E] hover:bg-[#006b33] text-white px-8 py-6 shadow-lg shadow-[#00833E]/50 hover:shadow-xl hover:shadow-[#00833E]/60 transition-all duration-300 hover:scale-105"
          >
            Register Your Team
          </Button>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-[#FFD700]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Clock className="w-5 h-5 text-[#FFD700]" />
          <span className="text-white">Tournament Starts In: 20th November</span>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      
      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm">Scroll Down</span>
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
