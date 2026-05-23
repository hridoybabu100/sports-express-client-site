"use client";

import Link from "next/link";
import {
  Menu,
  X,
  Trophy,
  Gamepad2,
  Sparkles,
  Bell,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Players", path: "/players" },
  { name: "Add-Player", path: "/add-player" },
  { name: "Teams", path: "/teams" },
  { name: "Live Match", path: "/live" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-2xl">
      
      {/* Animated Background Blur */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-black tracking-wide text-white"
          >
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.1,
              }}
              className="rounded-2xl bg-cyan-500/20 p-3 text-cyan-400 shadow-lg shadow-cyan-500/20"
            >
              <Gamepad2 size={24} />
            </motion.div>

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              E-Sports
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={link.path}
                className="relative text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-400"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Side Extra Features */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden items-center gap-4 lg:flex"
        >
          
          {/* Notification */}
          <motion.button
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
            whileTap={{ scale: 0.95 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </motion.button>

          {/* Tournament Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl"
          >
            <Sparkles size={16} />
            Pro League
          </motion.div>

          {/* Login Button */}
          <motion.button
            whileHover={{
                scale: 1.05,
                y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500/20"
          >
            <Link href={'/login'}>
            Login
          </Link>
          </motion.button>

          {/* Signup Button */}
      
        
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/20 transition-all duration-300"
          >
            <Link href={'/singup'}>
            Sign Up
            </Link>

            <ChevronRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </motion.div>
      

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white backdrop-blur-xl lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
            className="border-t border-white/10 bg-[#07111f]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              
              {/* Mobile Links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-gray-300 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    {link.name}

                    <ChevronRight size={18} />
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-4 pt-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-4 font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500/20"
                >
                  Login
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-5 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20"
                >
                  Sign Up
                </motion.button>
              </div>

              {/* Bottom Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-5 backdrop-blur-xl"
              >
                <div className="mb-3 flex items-center gap-2 text-cyan-400">
                  <Trophy size={20} />
                  <h2 className="font-bold">Upcoming Event</h2>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  Join the biggest e-sports championship and compete with top
                  gamers worldwide.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}