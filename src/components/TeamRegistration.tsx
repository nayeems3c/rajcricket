import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { motion } from "motion/react";

const districts = [
  "Rajshahi",
  "Naogaon",
  "Natore",
  "Bogura",
  "Sirajganj",
  "Pabna",
  "Chapai",
  "Joypurhat",
];

export function TeamRegistration() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F5F5F5] relative overflow-hidden" id="register">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#00833E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-4 text-[#1A1A1A]">
            Register Your Team
          </h2>
          <div className="w-24 h-1 bg-[#00833E] mx-auto mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Registration Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-[#00833E]/10 relative z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6">
              <div>
                <Label htmlFor="teamName" className="text-[#1A1A1A]">
                  Team Name
                </Label>
                <Input
                  id="teamName"
                  placeholder="Enter your team name"
                  className="mt-2 bg-white border-[#00833E]/20 focus:border-[#00833E]"
                />
              </div>

              <div>
                <Label htmlFor="district" className="text-[#1A1A1A]">
                  District
                </Label>
                <select
                  id="district"
                  className="mt-2 w-full px-3 py-2 bg-white border border-[#00833E]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00833E] text-[#1A1A1A]"
                >
                  <option value="">Select your district</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="captain" className="text-[#1A1A1A]">
                  Captain Name
                </Label>
                <Input
                  id="captain"
                  placeholder="Enter captain's name"
                  className="mt-2 bg-white border-[#00833E]/20 focus:border-[#00833E]"
                />
              </div>

              <div>
                <Label htmlFor="contact-number" className="text-[#1A1A1A]">
                  Contact Number
                </Label>
                <Input
                  id="contact-number"
                  type="tel"
                  placeholder="+880 XXX XXX XXXX"
                  className="mt-2 bg-white border-[#00833E]/20 focus:border-[#00833E]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#1A1A1A]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="team@example.com"
                  className="mt-2 bg-white border-[#00833E]/20 focus:border-[#00833E]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#00833E] hover:bg-[#006b33] text-white py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Registration
              </Button>
            </form>
          </motion.div>

          {/* Districts Grid */}
          <div>
            <h3 className="text-2xl mb-6 text-[#1A1A1A] text-center lg:text-left">
              Participating Districts
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {districts.map((district, index) => (
                <motion.div
                  key={district}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-[#00833E] group cursor-pointer relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ borderColor: "#FFD700", scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00833E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-3 relative z-10">
                    <motion.div 
                      className="w-10 h-10 bg-[#00833E] rounded-full flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-white group-hover:text-[#00833E]">
                        {index + 1}
                      </span>
                    </motion.div>
                    <span className="text-[#1A1A1A]">{district}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
