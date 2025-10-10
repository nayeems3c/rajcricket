import { Zap, Trophy, MapPin, Flame } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Zap,
    title: "Fast Matches",
    description: "Exciting T-10 format for quick action",
  },
  {
    icon: Trophy,
    title: "Big Trophy",
    description: "Prestigious championship awaits",
  },
  {
    icon: MapPin,
    title: "Rajshahi Region",
    description: "8 districts competing together",
  },
  {
    icon: Flame,
    title: "Tape Ball Action",
    description: "Pure street cricket energy",
  },
];

export function TournamentOverview() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden" id="about">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00833E]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-4 text-[#1A1A1A]">
            About the Tournament
          </h2>
          <div className="w-24 h-1 bg-[#00833E] mx-auto mb-6" />
          <p className="text-lg text-[#1A1A1A]/80 max-w-3xl mx-auto">
            The Rajshahi Regional Tape T-10 Cricket Tournament brings together the best tape ball cricket teams 
            from 8 districts across the Rajshahi region. Experience the raw energy and passion of Bangladesh's 
            street cricket culture in an organized, competitive format where glory and honor are on the line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-t-4 border-[#00833E] relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00833E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-[#00833E] rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-[#FFD700] transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-[#FFD700] group-hover:text-[#00833E] transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl text-center mb-2 text-[#1A1A1A]">
                  {feature.title}
                </h3>
                <p className="text-center text-[#1A1A1A]/70">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
