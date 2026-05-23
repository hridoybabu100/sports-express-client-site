"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  ShieldCheck,
  Star,
  Flame,
  Crown,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function PlayerPurchaseOffer() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 text-white">
      
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
          x: [0, -50, 0],
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
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400 backdrop-blur-xl">
            <Flame size={16} />
            LIMITED PLAYER OFFER
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            Purchase Your
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Dream Player
            </span>
          </h1>

          <p className="text-lg leading-8 text-gray-400">
            Unlock premium gamers, dominate tournaments, and create your
            unstoppable e-sports squad with elite players.
          </p>
        </motion.div>

        {/* Main Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl lg:p-10"
        >
          
          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-2">
            
            {/* Left Side Image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative"
            >
              
              {/* Player Image */}
              <div className="relative overflow-hidden rounded-[35px] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
                  alt="player"
                  className="h-[600px] w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute left-6 top-6 flex items-center gap-2 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-yellow-400 backdrop-blur-xl"
                >
                  <Crown size={20} />
                  MVP PLAYER
                </motion.div>

                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-[#07111f]/80 p-5 backdrop-blur-2xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-black">
                        Alex Hunter
                      </h2>

                      <p className="text-gray-400">
                        Professional E-Sports Athlete
                      </p>
                    </div>

                    <div className="rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
                      <Trophy size={28} />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex items-center gap-2 text-yellow-400">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />

                    <span className="ml-2 text-sm text-gray-300">
                      5.0 Rating
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      transition={{ duration: 2 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    />
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    Performance Level 92%
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side Content */}
            <div className="flex flex-col justify-center">
              
              {/* Price */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400"
              >
                <ShieldCheck size={16} />
                VERIFIED PLAYER
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-6 text-5xl font-black leading-tight"
              >
                Unlock Elite
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Gaming Power
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-10 text-lg leading-8 text-gray-400"
              >
                Purchase professional players and dominate tournaments with
                high-performance gaming athletes. Build your unbeatable team
                now.
              </motion.p>

              {/* Features */}
              <div className="mb-10 space-y-5">
                {[
                  "Professional Tournament Experience",
                  "Top Ranked International Player",
                  "Premium Gaming Strategy",
                  "Verified E-Sports Athlete",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                  >
                    <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-400">
                      <CheckCircle2 size={20} />
                    </div>

                    <p className="text-gray-300">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Price Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="mb-10 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 backdrop-blur-2xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-gray-400">
                      Starting From
                    </p>

                    <h1 className="text-5xl font-black text-cyan-400">
                      $2,499
                    </h1>
                  </div>

                  <div className="rounded-3xl bg-cyan-500/10 p-5 text-cyan-400">
                    <Flame size={34} />
                  </div>
                </div>

                <p className="leading-7 text-gray-400">
                  Limited-time premium offer for elite gaming players and
                  tournament champions.
                </p>
              </motion.div>

              {/* Buttons */}
              <div className="flex flex-col gap-5 sm:flex-row">
                
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-8 py-5 text-lg font-semibold text-white shadow-2xl shadow-cyan-500/20"
                >
                  Purchase Now

                  <ChevronRight
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-semibold text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}