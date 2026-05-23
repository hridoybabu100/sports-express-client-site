"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  ShieldCheck,
  Gamepad2,
  Users,
  Sparkles,
  Star,
  PlayCircle,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    title: "Global Tournaments",
    description:
      "Join world-class gaming battles and compete with pro players worldwide.",
    icon: Trophy,
  },
  {
    title: "Elite Security",
    description:
      "Advanced anti-cheat protection and secure gaming environment.",
    icon: ShieldCheck,
  },
  {
    title: "Gaming Community",
    description:
      "Connect with millions of gamers and build your ultimate squad.",
    icon: Users,
  },
];

export default function Feature() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 text-white">
      
      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-[8%] top-[20%] hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-xl lg:block"
      >
        <Gamepad2 className="text-cyan-400" size={32} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-[10%] top-[25%] hidden rounded-3xl border border-purple-500/20 bg-white/5 p-4 backdrop-blur-xl lg:block"
      >
        <Sparkles className="text-purple-400" size={32} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400 backdrop-blur-xl">
            <Sparkles size={16} />
            PREMIUM GAMING EXPERIENCE
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            The Future Of
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              E-Sports
            </span>
          </h1>

          <p className="text-lg leading-8 text-gray-400">
            Discover next-level gaming tournaments, immersive experiences,
            and futuristic competitions designed for champions.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

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
                
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="relative mb-6 inline-flex rounded-3xl bg-cyan-500/10 p-5 text-cyan-400 shadow-lg shadow-cyan-500/20"
                >
                  <Icon size={36} />
                </motion.div>

                {/* Content */}
                <h2 className="relative mb-4 text-2xl font-bold">
                  {feature.title}
                </h2>

                <p className="relative mb-6 leading-8 text-gray-400">
                  {feature.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="relative flex items-center gap-2 font-semibold text-cyan-400"
                >
                  Explore More

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

        {/* Bottom Big Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-14"
        >
          
          {/* Animated Background */}
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
                <Star size={16} />
                TOP GAMING EVENT
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-5xl">
                Ready To Become
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  A Champion?
                </span>
              </h1>

              <p className="mb-8 text-lg leading-8 text-gray-400">
                Enter the world’s biggest tournaments and battle against elite
                gamers in futuristic arenas.
              </p>

              <div className="flex flex-col gap-5 sm:flex-row">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold shadow-2xl shadow-cyan-500/20"
                >
                  <PlayCircle
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                  Join Tournament
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
                  Watch Live
                </motion.button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              
              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6 text-center backdrop-blur-xl"
              >
                <h2 className="text-4xl font-black text-cyan-400">
                  50K+
                </h2>

                <p className="mt-2 text-gray-400">
                  Active Players
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6 text-center backdrop-blur-xl"
              >
                <h2 className="text-4xl font-black text-blue-400">
                  300+
                </h2>

                <p className="mt-2 text-gray-400">
                  Tournaments
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6 text-center backdrop-blur-xl"
              >
                <h2 className="text-4xl font-black text-purple-400">
                  99%
                </h2>

                <p className="mt-2 text-gray-400">
                  Satisfaction
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6 text-center backdrop-blur-xl"
              >
                <h2 className="text-4xl font-black text-pink-400">
                  24/7
                </h2>

                <p className="mt-2 text-gray-400">
                  Live Support
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}