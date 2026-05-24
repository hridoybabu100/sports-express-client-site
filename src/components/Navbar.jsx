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
  User,
  Settings,
  LogOut,
  LayoutDashboard,
  ShieldCheck,
  Heart,
} from "lucide-react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Players", path: "/palyer" },
  { name: "Add-Player", path: "/add-player" },
  { name: "Profile", path: "/profile" },
  { name: "Purchase", path: "/purchase" },
];

export default function Navbar() {
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;
  // console.log(users);

  const [open, setOpen] = useState(false);

  // add this function inside Navbar component

const handleLogout = async () => {
  await authClient.signOut();
};

  // fake auth state

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-2xl">
      {/* Background Blur */}
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

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <motion.div key={index} whileHover={{ y: -3 }}>
              <Link
                href={link.path}
                className="relative text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-400"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Notification */}
          <motion.button
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-3 text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </motion.button>

          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl"
          >
            <Sparkles size={16} />
            Pro League
          </motion.div>

          {/* USER LOGGED IN */}
          {user ? (
            <div className="group relative">
              {/* Profile Button */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10"
              >
                {/* FIXED IMAGE */}
                <div className="relative h-11 w-11 overflow-hidden rounded-xl">
                  <Image
                    src={user?.image || "https://i.pravatar.cc/100"}
                    alt={user?.name || "user"}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {user?.name}
                  </h3>

                  <p className="text-xs text-gray-400">Pro Gamer</p>
                </div>
              </motion.div>

              {/* Hover Dropdown */}
              <div className="invisible absolute right-0 top-16 w-80 translate-y-3 rounded-3xl border border-white/10 bg-[#07111f]/95 p-4 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {/* User Info */}
                <div className="mb-4 flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                    <Image
                      src={user?.image || "https://i.pravatar.cc/100"}
                      alt={user?.name || "user"}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="font-bold text-white">{user?.name}</h2>

                    <p className="text-sm text-gray-400">{user?.email}</p>

                    <span className="mt-1 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                      Elite Player
                    </span>
                  </div>
                </div>

                {/* Extra Features */}
                <div className="space-y-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <div className="flex items-center gap-3">
                      <LayoutDashboard size={18} />
                      Dashboard
                    </div>

                    <ChevronRight size={16} />
                  </Link>

                  <Link
                    href="/profile"
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <div className="flex items-center gap-3">
                      <User size={18} />
                      My Profile
                    </div>

                    <ChevronRight size={16} />
                  </Link>

                  <Link
                    href="/favorite"
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <div className="flex items-center gap-3">
                      <Heart size={18} />
                      Favorites
                    </div>

                    <ChevronRight size={16} />
                  </Link>

                  <Link
                    href="/settings"
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <div className="flex items-center gap-3">
                      <Settings size={18} />
                      Settings
                    </div>

                    <ChevronRight size={16} />
                  </Link>

                  <Link
                    href="/premium"
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={18} />
                      Premium Access
                    </div>

                    <ChevronRight size={16} />
                  </Link>

                  {/* NEW FEATURES */}
                  <Link
                    href="/matches"
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <div className="flex items-center gap-3">
                      <Trophy size={18} />
                      My Matches
                    </div>

                    <ChevronRight size={16} />
                  </Link>

                  <Link
                    href="/notifications"
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <div className="flex items-center gap-3">
                      <Bell size={18} />
                      Notifications
                    </div>

                    <ChevronRight size={16} />
                  </Link>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-medium text-red-400 transition-all duration-300 hover:bg-red-500/20"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Login */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500/20"
              >
                <Link href="/login">Login</Link>
              </motion.button>

              {/* Signup */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/20"
              >
                <Link href="/singup">Sign Up</Link>

                <ChevronRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </>
          )}
        </div>

        {/* Mobile Button */}
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
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-gray-300 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  {link.name}

                  <ChevronRight size={18} />
                </Link>
              ))}

              {/* Mobile Auth */}
              {user ? (
                <button
                  onClick={() => setUser(false)}
                  className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 font-semibold text-red-400"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-4 text-center font-semibold text-cyan-400"
                  >
                    Login
                  </Link>

                  <Link
                    href="/singup"
                    className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-5 py-4 text-center font-semibold text-white"
                  >
                    Sign Up
                  </Link>
                </>
              )}

              {/* Bottom Card */}
              <div className="mt-4 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-5 backdrop-blur-xl">
                <div className="mb-3 flex items-center gap-2 text-cyan-400">
                  <Trophy size={20} />
                  <h2 className="font-bold">Upcoming Event</h2>
                </div>

                <p className="text-sm leading-7 text-gray-300">
                  Join the biggest e-sports championship and compete with top
                  gamers worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
