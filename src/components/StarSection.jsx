"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Trophy,
  Gamepad2,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    title: "Create Account",
    description:
      "Sign up and build your professional gamer profile in seconds.",
    icon: Rocket,
  },
  {
    title: "Join Tournament",
    description:
      "Explore premium tournaments and enter global gaming battles.",
    icon: Trophy,
  },
  {
    title: "Start Playing",
    description:
      "Compete with elite gamers and dominate the e-sports arena.",
    icon: Gamepad2,
  },
];

export default function StartSection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 text-white">
      
      {/* Background Effects */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400 backdrop-blur-xl">
            <Sparkles size={16} />
            START YOUR JOURNEY
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            How To Start
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Gaming
            </span>
          </h1>

          <p className="text-lg leading-8 text-gray-400">
            Join the next generation e-sports platform and become part of the
            biggest gaming community worldwide.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
              >
                
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                </div>

                {/* Number */}
                <div className="absolute right-6 top-6 text-6xl font-black text-white/5">
                  0{index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  className="relative mb-6 inline-flex rounded-3xl bg-cyan-500/10 p-5 text-cyan-400 shadow-lg shadow-cyan-500/20"
                >
                  <Icon size={36} />
                </motion.div>

                {/* Content */}
                <h2 className="relative mb-4 text-2xl font-bold">
                  {step.title}
                </h2>

                <p className="relative mb-8 leading-8 text-gray-400">
                  {step.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="relative flex items-center gap-2 font-semibold text-cyan-400"
                >
                  Get Started

                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-cyan-500/20"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-14"
        >
          
          {/* Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
            
            {/* Left */}
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-400">
                <ShieldCheck size={16} />
                SAFE & SECURE PLATFORM
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-5xl">
                Start Your
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Pro Gaming
                </span>
                {" "}Career
              </h1>

              <p className="mb-8 text-lg leading-8 text-gray-400">
                Build your gaming profile, join tournaments, and become the next
                e-sports champion with our futuristic gaming ecosystem.
              </p>

              <div className="flex flex-col gap-5 sm:flex-row">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-cyan-500/20"
                >
                  Start Now
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  Explore More
                </motion.button>
              </div>
            </div>

            {/* Right Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-[#07111f]/80 p-6 backdrop-blur-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
                alt="gaming"
                className="h-[320px] w-full rounded-[24px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#050816]/80 p-5 backdrop-blur-2xl">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">
                      Pro Gaming League
                    </h2>

                    <p className="text-sm text-gray-400">
                      International Tournament
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
                    <Trophy size={22} />
                  </div>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 2 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                </div>

                <p className="mt-3 text-sm text-gray-400">
                  Tournament Registration 80% Complete
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}