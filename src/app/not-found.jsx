"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  Gamepad2,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4 text-white">
      
      {/* Animated Background */}
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

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-[10%] top-[20%] hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-xl lg:block"
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
        className="absolute right-[10%] top-[25%] hidden rounded-3xl border border-red-500/20 bg-white/5 p-4 backdrop-blur-xl lg:block"
      >
        <AlertTriangle className="text-red-400" size={32} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        
        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-[120px] font-black leading-none text-transparent md:text-[220px]"
        >
          404
        </motion.h1>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-14"
        >
          
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

          <div className="relative z-10">
            
            {/* Icon */}
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/20"
            >
              <AlertTriangle size={42} />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 text-4xl font-black md:text-6xl"
            >
              Page
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Not Found
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-400"
            >
              The page you are looking for might have been removed,
              renamed, or is temporarily unavailable in the gaming arena.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              
              {/* Home Button */}
              <Link href="/">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-8 py-5 text-lg font-semibold text-white shadow-2xl shadow-cyan-500/20"
                >
                  <Home size={22} />

                  Back To Home

                  <ChevronRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </Link>

              {/* Search Button */}
              <Link href="/players">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-semibold text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Search size={22} />

                  Explore Players
                </motion.button>
              </Link>
            </motion.div>

            {/* Bottom Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              
              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6 backdrop-blur-xl"
              >
                <h2 className="text-3xl font-black text-cyan-400">
                  24/7
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Support
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6 backdrop-blur-xl"
              >
                <h2 className="text-3xl font-black text-blue-400">
                  50K+
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Players
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6 backdrop-blur-xl"
              >
                <h2 className="text-3xl font-black text-purple-400">
                  300+
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Matches
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-6 backdrop-blur-xl"
              >
                <h2 className="text-3xl font-black text-pink-400">
                  #1
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  Platform
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}