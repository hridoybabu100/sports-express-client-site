"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  MapPin,
  DollarSign,
  ShieldCheck,
  Star,
} from "lucide-react";

const ProfileUI = () => {
  const player = {
    name: "Cristiano Ronaldo",
    role: "Professional Football Player",
    country: "Portugal",
    team: "Al Nassr",
    salary: "$220M",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#07111f] to-[#0d1b34] flex items-center justify-center px-4 py-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,255,255,0.12)] w-full max-w-5xl"
      >
        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="grid md:grid-cols-2 gap-10 p-6 md:p-10">
          {/* Left Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative">
              <Image
                src={player.image}
                alt={player.name}
                width={400}
                height={500}
                className="rounded-3xl object-cover h-[420px] w-full md:w-[360px] border border-cyan-400/20"
              />

              <div className="absolute top-4 right-4 bg-cyan-500/20 border border-cyan-400/30 px-4 py-2 rounded-full backdrop-blur-xl text-sm font-semibold flex items-center gap-2">
                <ShieldCheck size={16} />
                Verified
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-1 text-cyan-300 text-sm font-medium">
                Elite Athlete
              </span>

              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                {player.name}
              </h1>

              <p className="text-gray-300 text-lg">
                {player.role}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-cyan-300 mb-2">
                    <MapPin size={18} />
                    Country
                  </div>
                  <h3 className="font-semibold text-lg">
                    {player.country}
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-yellow-300 mb-2">
                    <Trophy size={18} />
                    Team
                  </div>
                  <h3 className="font-semibold text-lg">
                    {player.team}
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-green-300 mb-2">
                    <DollarSign size={18} />
                    Salary
                  </div>
                  <h3 className="font-semibold text-lg">
                    {player.salary}
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-pink-300 mb-2">
                    <Star size={18} />
                    Rating
                  </div>
                  <h3 className="font-semibold text-lg">
                    {player.rating}
                  </h3>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
                  Follow Player
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/10">
                  View Stats
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileUI;