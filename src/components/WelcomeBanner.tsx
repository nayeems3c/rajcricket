import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export function WelcomeBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const STORAGE_KEY = "rrt10_welcome_banner_shown";

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem(STORAGE_KEY);
    
    if (!hasSeenBanner) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9998 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
            }}
          >
            <div
              style={{
                position: 'relative',
                pointerEvents: 'auto',
                width: '100%',
                maxWidth: 600,
                maxHeight: '80vh',
                background: 'transparent',
                borderRadius: 12,
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                overflow: 'hidden',
              }}
            >
              <motion.button
                onClick={handleClose}
                className="absolute -top-3 -right-3 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-2xl transition-all duration-200 hover:scale-110 ring-2 ring-white"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src="/assets/images/banner.jpeg"
                  alt="RRT10 Cricket Tournament 2025 - Champion 100000 BDT, Runners Up 50000 BDT"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    maxHeight: '80vh',
                    userSelect: 'none',
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='600' height='400' fill='%2300833E'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='22' fill='white'%3ERRT10 Cricket Tournament%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
