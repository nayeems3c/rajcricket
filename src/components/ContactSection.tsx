import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F5F5F5] relative overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#00833E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-4 text-[#1A1A1A]">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#00833E] mx-auto mb-6" />
          <p className="text-lg text-[#1A1A1A]/80">
            Get in touch with our tournament management team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Send Message Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl border border-[#00833E]/10 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 text-[#1A1A1A]">
              Send us a Message
            </h3>
            
            <form className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-[#1A1A1A]">
                  Your Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="mt-2 bg-[#F5F5F5] border-[#00833E]/20 focus:border-[#00833E]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#1A1A1A]">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-2 bg-[#F5F5F5] border-[#00833E]/20 focus:border-[#00833E]"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-[#1A1A1A]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  rows={5}
                  className="mt-2 bg-[#F5F5F5] border-[#00833E]/20 focus:border-[#00833E] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#00833E] hover:bg-[#006b33] text-white py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* WhatsApp Contact */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#00833E]/10 text-center relative z-10">
              <motion.div 
                className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <MessageCircle className="w-12 h-12 text-white" />
              </motion.div>
              
              <h3 className="text-2xl mb-3 text-[#1A1A1A]">
                Chat on WhatsApp
              </h3>
              
              <p className="text-[#1A1A1A]/70 mb-6">
                Connect with us instantly on WhatsApp for quick responses
              </p>
              
              <a
                href="https://wa.me/8801714559978"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  type="button"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message on WhatsApp
                </Button>
              </a>
              
              <p className="text-sm text-[#1A1A1A]/60 mt-4">
                +880 1714-559978
              </p>
            </div>

            {/* Quick Info */}
            <motion.div
              className="bg-gradient-to-br from-[#00833E] to-[#005a2b] rounded-2xl p-6 mt-6 text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm text-white/90 mb-3">
                <span className="text-[#FFD700]">●</span> We typically respond within 2 hours
              </p>
              <p className="text-sm text-white/90 mb-3">
                <span className="text-[#FFD700]">●</span> Available 9 AM - 6 PM (Sat-Thu)
              </p>
              <p className="text-sm text-white/90">
                <span className="text-[#FFD700]">●</span> Tournament inquiries welcome
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
