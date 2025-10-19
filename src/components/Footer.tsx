import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#004D26] to-[#003519] text-white py-12 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#00833E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-6">
            <motion.a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-all duration-300 group"
              aria-label="Facebook"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Facebook className="w-6 h-6 text-white group-hover:text-[#004D26]" />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-all duration-300 group"
              aria-label="Instagram"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Instagram className="w-6 h-6 text-white group-hover:text-[#004D26]" />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-all duration-300 group"
              aria-label="YouTube"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Youtube className="w-6 h-6 text-white group-hover:text-[#004D26]" />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-center text-white/80">
            © 2025 Rajshahi Regional Tape T-10 Cricket Tournament
          </p>

          {/* Powered by and Developed by on same line */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 sm:gap-8 w-full text-white/60 text-sm px-4">
            <p className="text-center sm:text-left">
              Powered by rajshahicricket.com
            </p>
            <p className="text-center sm:text-right">
              Developed by{" "}
              <a
                href="https://shakirahmed.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Shakir Ahmed
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
