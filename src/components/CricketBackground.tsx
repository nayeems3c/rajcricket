import { motion } from "motion/react";

export function CricketBackground() {
  // Cricket ball positions and animations
  const cricketBalls = [
    { x: "10%", y: "20%", delay: 0, duration: 20 },
    { x: "80%", y: "30%", delay: 2, duration: 25 },
    { x: "15%", y: "60%", delay: 4, duration: 22 },
    { x: "85%", y: "70%", delay: 6, duration: 18 },
    { x: "50%", y: "40%", delay: 8, duration: 24 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Cricket Balls */}
      {cricketBalls.map((ball, index) => (
        <motion.div
          key={`ball-${index}`}
          className="absolute w-12 h-12 opacity-5"
          style={{ left: ball.x, top: ball.y }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: ball.duration,
            repeat: Infinity,
            delay: ball.delay,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#00833E" opacity="0.3"/>
            <path d="M30 20 Q50 50 30 80" stroke="#FFD700" strokeWidth="2" fill="none"/>
            <path d="M70 20 Q50 50 70 80" stroke="#FFD700" strokeWidth="2" fill="none"/>
          </svg>
        </motion.div>
      ))}

      {/* Animated Cricket Stumps */}
      <motion.div
        className="absolute right-10 top-1/4 w-16 h-20 opacity-5"
        animate={{
          rotateY: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="6" height="50" fill="#00833E" opacity="0.4"/>
          <rect x="27" y="20" width="6" height="50" fill="#00833E" opacity="0.4"/>
          <rect x="44" y="20" width="6" height="50" fill="#00833E" opacity="0.4"/>
          <rect x="8" y="18" width="44" height="4" fill="#FFD700" opacity="0.4"/>
          <rect x="8" y="16" width="44" height="2" fill="#FFD700" opacity="0.4"/>
        </svg>
      </motion.div>

      {/* Animated Cricket Bat */}
      <motion.div
        className="absolute left-10 bottom-1/4 w-12 h-32 opacity-5"
        animate={{
          rotate: [0, -15, 0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="0" width="10" height="30" rx="2" fill="#00833E" opacity="0.4"/>
          <rect x="5" y="28" width="30" height="70" rx="15" fill="#FFD700" opacity="0.4"/>
          <line x1="20" y1="35" x2="20" y2="90" stroke="#00833E" strokeWidth="1" opacity="0.3"/>
        </svg>
      </motion.div>

      {/* Floating Cricket Field Lines */}
      <motion.div
        className="absolute right-1/4 top-1/2 w-32 h-32 opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#00833E" strokeWidth="1" opacity="0.4"/>
          <circle cx="50" cy="50" r="30" stroke="#FFD700" strokeWidth="1" opacity="0.4"/>
          <circle cx="50" cy="50" r="15" stroke="#00833E" strokeWidth="1" opacity="0.4"/>
          <line x1="50" y1="5" x2="50" y2="95" stroke="#00833E" strokeWidth="0.5" opacity="0.3"/>
          <line x1="5" y1="50" x2="95" y2="50" stroke="#00833E" strokeWidth="0.5" opacity="0.3"/>
        </svg>
      </motion.div>

      {/* T10 Text Pattern */}
      <motion.div
        className="absolute left-1/4 top-1/3 text-6xl opacity-5"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-[#00833E]">T10</span>
      </motion.div>

      {/* Cricket Trophy Icon */}
      <motion.div
        className="absolute right-1/3 bottom-1/3 w-16 h-16 opacity-5"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8C28 8 25 11 25 15V20H39V15C39 11 36 8 32 8Z" fill="#FFD700" opacity="0.4"/>
          <ellipse cx="32" cy="35" rx="15" ry="18" fill="#FFD700" opacity="0.4"/>
          <rect x="28" y="48" width="8" height="8" fill="#00833E" opacity="0.4"/>
          <rect x="22" y="56" width="20" height="3" fill="#00833E" opacity="0.4"/>
          <path d="M20 20L17 25H47L44 20H20Z" fill="#00833E" opacity="0.3"/>
        </svg>
      </motion.div>

      {/* Animated Score Numbers */}
      <motion.div
        className="absolute left-1/2 top-1/4 text-8xl opacity-5"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-[#FFD700]">6</span>
      </motion.div>

      {/* Stadium Lights Pattern */}
      <motion.div
        className="absolute left-1/3 bottom-1/4 w-20 h-20 opacity-5"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="5" fill="#FFD700" opacity="0.6"/>
          <circle cx="40" cy="40" r="15" fill="#FFD700" opacity="0.3"/>
          <circle cx="40" cy="40" r="25" fill="#FFD700" opacity="0.15"/>
          <circle cx="40" cy="40" r="35" fill="#FFD700" opacity="0.05"/>
        </svg>
      </motion.div>

      {/* Cricket Pitch Lines */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute left-0 right-0 top-1/2 h-24 border-t-2 border-b-2 border-[#00833E]"
          animate={{
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Boundary Rope Pattern */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00833E] to-transparent opacity-10"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Wicket Keeper Gloves */}
      <motion.div
        className="absolute right-1/4 bottom-1/2 w-14 h-14 opacity-5"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="28" cy="28" rx="20" ry="24" fill="#00833E" opacity="0.4"/>
          <circle cx="28" cy="20" r="8" fill="#FFD700" opacity="0.4"/>
        </svg>
      </motion.div>
    </div>
  );
}
