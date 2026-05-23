"use client";

import { motion } from "framer-motion";
import {
  LoaderCircle,
  Trophy,
  Gamepad2,
  Sparkles,
} from "lucide-react";

export default function LoadingPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] text-white">
      
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
        className="absolute left-[12%] top-[20%] hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-4 backdrop-blur-xl lg:block"
      >
        <Gamepad2 className="text-cyan-400" size={30} />
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
        <Trophy className="text-purple-400" size={30} />
      </motion.div>

      {/* Main Loading Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-[95%] max-w-xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl"
      >
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

        <div className="relative z-10">
          
          {/* Loader */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10"
          >
            <LoaderCircle size={60} className="text-cyan-400" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400 backdrop-blur-xl"
          >
            <Sparkles size={16} />
            LOADING GAMING DATA
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 text-4xl font-black leading-tight md:text-5xl"
          >
            Preparing Your
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Gaming Arena
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mb-10 max-w-lg text-lg leading-8 text-gray-400"
          >
            Fetching elite players, tournaments, and live gaming updates.
            Please wait a moment...
          </motion.p>

          {/* Progress Bar */}
          <div className="mx-auto mb-5 h-3 max-w-md overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
            />
          </div>

          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-sm text-gray-500"
          >
            Syncing Real-Time E-Sports Data...
          </motion.p>

          {/* Bottom Cards */}
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            
            {[
              { title: "Players", value: "25K+" },
              { title: "Matches", value: "500+" },
              { title: "Teams", value: "120+" },
              { title: "Events", value: "80+" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-white/10 bg-[#07111f]/80 p-5 backdrop-blur-xl"
              >
                <h2 className="text-2xl font-black text-cyan-400">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}