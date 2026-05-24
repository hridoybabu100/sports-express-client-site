"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trophy,
  MapPin,
  BadgeDollarSign,
  ShieldCheck,
  Star,
  ChevronRight,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const PurchaseCard = ({ player }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.5,
      }}
      className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-[#07111f]/80 p-5 backdrop-blur-2xl"
    >
      {/* Animated Glow */}
      <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/30"></div>

      <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl transition-all duration-500 group-hover:bg-purple-500/30"></div>

      {/* Top Badge */}
      <div className="absolute right-5 top-5 z-20 flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-400 backdrop-blur-xl">
        <ShieldCheck size={15} />
        Verified
      </div>

      {/* Image */}
      <div className="relative h-[320px] overflow-hidden rounded-[28px]">
        <Image
          src={player?.userImage}
          alt={player?.playerName}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>

        {/* Name */}
        <div className="absolute bottom-6 left-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-xs text-cyan-300 backdrop-blur-xl">
            <Sparkles size={14} />
            Elite Player
          </div>

          <h1 className="text-4xl font-black text-white">
            {player?.playerName}
          </h1>

          <p className="mt-2 text-gray-300">
            {player?.Sports}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        
        {/* Description */}
        <p className="line-clamp-3 text-sm leading-7 text-gray-400">
          {player?.Description}
        </p>

        {/* Info */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10">
            <div className="mb-2 flex items-center gap-2 text-cyan-400">
              <Trophy size={18} />
              Team
            </div>

            <h2 className="font-bold text-white">
              {player?.Team}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-500/10">
            <div className="mb-2 flex items-center gap-2 text-pink-400">
              <MapPin size={18} />
              Country
            </div>

            <h2 className="font-bold text-white">
              {player?.Country}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/10">
            <div className="mb-2 flex items-center gap-2 text-green-400">
              <BadgeDollarSign size={18} />
              Salary
            </div>

            <h2 className="font-bold text-white">
              ${player?.salary}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-yellow-500/30 hover:bg-yellow-500/10">
            <div className="mb-2 flex items-center gap-2 text-yellow-400">
              <Star size={18} />
              Category
            </div>

            <h2 className="font-bold text-white">
              {player?.Catagory}
            </h2>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 flex items-center justify-between">
          
          {/* User */}
          <div>
            <p className="text-sm text-gray-400">
              Added By
            </p>

            <h3 className="font-bold text-white">
              {player?.userName}
            </h3>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group/button relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-6 py-3 font-bold text-white shadow-2xl shadow-cyan-500/20"
          >
            {/* Shine */}
            <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover/button:left-[120%]"></div>

            <div className="relative flex items-center gap-3">
              <ShoppingCart size={18} />

              <span>Purchase</span>

              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PurchaseCard;