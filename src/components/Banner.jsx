"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Gamepad2,
  Play,
  Star,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Banner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_30%)]"></div>

      {/* Animated Blur Circles */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
      />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[10%] top-[25%] hidden rounded-2xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-xl md:block"
      >
        <Trophy className="text-cyan-400" size={32} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[15%] top-[20%] hidden rounded-2xl border border-blue-500/20 bg-white/5 p-4 backdrop-blur-xl lg:block"
      >
        <Gamepad2 className="text-blue-400" size={32} />
      </motion.div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 md:px-8 lg:flex-row lg:px-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400 backdrop-blur-xl"
          >
            <Sparkles size={16} />
            NEXT GENERATION E-SPORTS PLATFORM
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 text-5xl font-black leading-tight md:text-7xl"
          >
            Dominate The
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Gaming{" "}
            </span>
            Arena
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-gray-400 lg:mx-0"
          >
            Compete in world-class tournaments, connect with elite players,
            and experience futuristic e-sports battles like never before.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-center gap-5 sm:flex-row lg:justify-start"
          >
            <button className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
              <Play
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              Start Playing
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400">
              Explore Teams
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-3xl font-black text-cyan-400">25K+</h2>
              <p className="mt-2 text-sm text-gray-400">Active Gamers</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-3xl font-black text-blue-400">150+</h2>
              <p className="mt-2 text-sm text-gray-400">Live Tournaments</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl col-span-2 md:col-span-1">
              <h2 className="text-3xl font-black text-purple-400">99%</h2>
              <p className="mt-2 text-sm text-gray-400">Pro Players</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-20 flex flex-1 items-center justify-center lg:mt-0"
        >
          
          {/* Main Card */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative w-full max-w-lg rounded-[40px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
              alt="gaming"
              className="h-[500px] w-full rounded-[30px] object-cover"
            />

            {/* Overlay Card */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#07111f]/80 p-5 backdrop-blur-2xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Cyber Championship</h2>
                  <p className="text-sm text-gray-400">
                    International E-Sports League
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
                  <ShieldCheck size={24} />
                </div>
              </div>

              <div className="flex items-center gap-2 text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}