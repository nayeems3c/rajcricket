import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Tournament logo - you can replace this with your actual logo
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
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={`transition-all duration-300 ${
                isScrolled
                  ? "h-12 bg-white px-4 py-2 rounded-xl shadow-lg border-2 border-[#00833E]/20"
                  : "h-14 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border-2 border-white/30"
              }`}
            >
              <img
                src={tournamentLogo}
                alt="RRT10 Cricket Tournament"
                className="h-full w-auto object-contain"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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
                className="block px-6 py-3 text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#00833E]/10 hover:to-transparent hover:text-[#00833E] transition-all duration-200 border-b border-[#00833E]/10 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
