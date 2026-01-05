"use client";

import { motion } from "framer-motion";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Status Badge - Modern Design */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold mb-8 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
          >
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            OPEN FOR NEW PROJECTS
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 justify-center items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">

                {/* Email - Clickable Design */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hasiburmdhasan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-5 p-4 rounded-xl border border-transparent hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-blue-600 p-4 rounded-xl shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Email Me</p>
                    <p className="text-white text-lg font-bold break-all group-hover:text-blue-400 transition-colors">
                      hasiburmdhasan@gmail.com
                    </p>
                  </div>
                  <ExternalLink className="text-gray-600 group-hover:text-blue-400 transition-colors" size={18} />
                </a>

                {/* WhatsApp - Clickable Design */}
                <a
                  href="https://wa.me/8801934827226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-5 p-4 rounded-xl border border-transparent hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-green-600 p-4 rounded-xl shadow-lg shadow-green-600/20 group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Chat on WhatsApp</p>
                    <p className="text-white text-lg font-bold group-hover:text-green-400 transition-colors">
                      +8801934827226
                    </p>
                  </div>
                  <ExternalLink className="text-gray-600 group-hover:text-green-400 transition-colors" size={18} />
                </a>

                {/* Location */}
                <div className="flex items-center space-x-5 p-4">
                  <div className="bg-purple-600 p-4 rounded-xl shadow-lg shadow-purple-600/20">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Location</p>
                    <p className="text-white text-lg font-bold">Available Worldwide (Remote)</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center space-x-5 p-4">
                  <div className="bg-orange-600 p-4 rounded-xl shadow-lg shadow-orange-600/20">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Availability</p>
                    <p className="text-white text-lg font-bold">Flexible with time zones</p>
                  </div>
                </div>

              </div>
            </GlassmorphismCard>
          </motion.div>

          {/* Why Choose Me Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassmorphismCard className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-white">
                Why Choose Me?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-2">
                  <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Quick Turnaround</h4>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Fast delivery without compromising quality. I value your time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-2">
                  <div className="bg-green-600 w-3 h-3 rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(22,163,74,0.8)]"></div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Professional Quality</h4>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Cinematic edits with high-end attention to every single detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-2">
                  <div className="bg-purple-600 w-3 h-3 rounded-full mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(147,51,234,0.8)]"></div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Clear Communication</h4>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Regular updates throughout the project for a transparent process.
                    </p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <GlassmorphismCard className="p-8">
            <h3 className="text-2xl font-semibold mb-10 text-white text-center">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 underline decoration-blue-500/30 underline-offset-4">How long does a typical project take?</h4>
                  <p className="text-gray-400 leading-relaxed">Most projects are completed within 3-7 days, depending on complexity. Rush orders are welcome.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 underline decoration-green-500/30 underline-offset-4">What file formats do you work with?</h4>
                  <p className="text-gray-400 leading-relaxed">I work with all major formats (MP4, MOV, AVI, etc.) and deliver in 4K or any resolution you need.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 underline decoration-purple-500/30 underline-offset-4">Do you provide revisions?</h4>
                  <p className="text-gray-400 leading-relaxed">Yes! I offer revisions to ensure the final product matches your vision perfectly.</p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 underline decoration-orange-500/30 underline-offset-4">What's your payment process?</h4>
                  <p className="text-gray-400 leading-relaxed">Usually 50% upfront and 50% on completion. Multiple payment methods are available.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 underline decoration-pink-500/30 underline-offset-4">Can you follow brand guidelines?</h4>
                  <p className="text-gray-400 leading-relaxed">Absolutely. I can match your brand's colors, fonts, and unique style perfectly.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 underline decoration-yellow-500/30 underline-offset-4">Ongoing services?</h4>
                  <p className="text-gray-400 leading-relaxed">Yes, I offer monthly retainer packages for clients who need regular video content.</p>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </div>
  );
}