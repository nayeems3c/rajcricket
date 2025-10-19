import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const tournamentLogo = "/assets/rrt10-logo.svg";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Register", href: "#register" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,131,62,0.12)] border-b border-white/30"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm"
      }`}
      style={{
        backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "blur(8px)",
        WebkitBackdropFilter: isScrolled
          ? "blur(24px) saturate(180%)"
          : "blur(8px)",
        background: isScrolled
          ? "rgba(255, 255, 255, 0.15)"
          : "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 100%)",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center justify-between h-12">
          <motion.a
            href="#"
            className="flex items-center h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="transition-all duration-300 flex items-center px-2">
              <img
                src={tournamentLogo}
                alt="RRT10 Cricket Tournament"
                className="h-22 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                style={{ 
                  imageRendering: "-webkit-optimize-contrast",
                  filter: "contrast(1.2) brightness(1.15) saturate(1.15) drop-shadow(0 0 2px rgba(255,255,255,0.5))",
                  height: "5.5rem",
                }}
              />
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={`relative transition-all duration-300 ${
                  isScrolled
                    ? "text-white hover:text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                style={{
                  textShadow: isScrolled
                    ? "0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.9)"
                    : "0 2px 4px rgba(0, 0, 0, 0.8)",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 ${
                    isScrolled ? "bg-[#00833E]" : "bg-[#FFD700]"
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            <motion.a
              href="/assets/tournament-rules.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00833E] hover:bg-[#006b33] text-white px-8 py-2 rounded-md shadow-lg shadow-[#00833E]/50 hover:shadow-xl hover:shadow-[#00833E]/60 transition-all duration-300 font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rulebook
            </motion.a>
          </div>

          <motion.button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-white bg-[#00833E]/10 hover:bg-[#00833E]/20"
                : "text-white bg-white/10 backdrop-blur-md hover:bg-white/20"
            }`}
            style={{
              filter: isScrolled
                ? "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))"
                : "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))",
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-2 bg-white rounded-xl shadow-2xl border-2 border-[#00833E]/20 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block px-6 py-3 text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#00833E]/10 hover:to-transparent hover:text-[#00833E] transition-all duration-200 border-b border-[#00833E]/10"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
            
            <motion.a
              href="/assets/tournament-rules.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block m-3 px-8 py-3 rounded-md bg-[#00833E] hover:bg-[#006b33] text-white shadow-lg shadow-[#00833E]/50 hover:shadow-xl hover:shadow-[#00833E]/60 transition-all duration-300 font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              Rulebook
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
