"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Twitch,
  Gamepad2,
  Trophy,
  Send,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-500/20 p-3 text-cyan-400">
                <Gamepad2 size={28} />
              </div>

              <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-black text-transparent">
                E-Sports
              </h1>
            </div>

            <p className="mb-6 text-sm leading-7 text-gray-400">
              The ultimate gaming and e-sports platform for tournaments,
              competitive players, and gaming communities worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                <FaFacebook size={18} />
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-500/10 hover:text-pink-400"
              >
                <BsInstagram size={18} />
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:border-sky-500/30 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <BsTwitter size={18} />
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
              >
                <BsYoutube size={18} />
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
              >
                <BsTwitch size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-white">Quick Links</h2>

            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="/"
                className="text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                href="/players"
                className="text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Players
              </Link>

              <Link
                href="/teams"
                className="text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Teams
              </Link>

              <Link
                href="/tournaments"
                className="text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Tournaments
              </Link>

              <Link
                href="/live"
                className="text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Live Match
              </Link>
            </div>
          </div>

          {/* Gaming Categories */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-white">Top Games</h2>

            <div className="flex flex-col gap-4 text-sm">
              <p className="text-gray-400">Valorant</p>
              <p className="text-gray-400">PUBG Mobile</p>
              <p className="text-gray-400">CS GO</p>
              <p className="text-gray-400">League of Legends</p>
              <p className="text-gray-400">Free Fire</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Trophy className="text-cyan-400" size={22} />
              <h2 className="text-xl font-bold">Newsletter</h2>
            </div>

            <p className="mb-6 text-sm leading-7 text-gray-400">
              Subscribe to get tournament updates, gaming news, and exclusive
              events.
            </p>

            {/* Input */}
            <div className="flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button className="m-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 transition-all duration-300 hover:scale-105">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 E-Sports Arena. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="transition-all duration-300 hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="transition-all duration-300 hover:text-cyan-400"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/"
              className="transition-all duration-300 hover:text-cyan-400"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
