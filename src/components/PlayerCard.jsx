"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PlayerCard = ({ player }) => {
  // console.log(player);

  const { _id } = player;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={player?.image}
          alt={player?.name}
          className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1 text-xs bg-black/50 text-white rounded-full backdrop-blur-md">
            {player?.country}
          </span>
          <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full backdrop-blur-md">
            {player?.category}
          </span>
        </div>

        {/* Salary */}
        <div className="absolute top-3 right-3 px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full backdrop-blur-md">
          ${player?.salary}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
          {player?.name}
        </h2>

        <p className="text-gray-400 text-sm line-clamp-2">
          {player?.description}
        </p>

        {/* Team + Sports */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full">
            Team: {player?.team}
          </span>
          <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full">
            {player?.sports}
          </span>
        </div>

        {/* Button */}
        <Link href={`/palyer/${_id}`}>
          <button className="group w-full relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-300 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
            {/* Glow Effect */}
            <span className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

            {/* Animated Background */}
            <span className="absolute left-full top-0 h-full w-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-full"></span>

            {/* Button Text */}
            <span className="relative z-10 justify-center flex items-center gap-2">
              View Details
              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PlayerCard;
