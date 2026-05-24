import Image from "next/image";
import {
  Trophy,
  Star,
  MapPin,
  Calendar,
  Activity,
  ArrowLeft,
} from "lucide-react";
import {Button} from "@heroui/react";

import Link from "next/link";
import { EditButton } from "@/components/EditButton";
import { DeleteButton } from "@/components/DeleteButton";

const Detailspage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/sports/${id}`, {
    cache: "no-store",
  });

  const player = await res.json();

  return (
    <div className="min-h-screen overflow-hidden bg-linear-to-br from-[#050816] via-[#071426] to-[#0b1f3a] text-white">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-12">
        {/* Back Button */}
        <Link href="/players">
          <button className="group mb-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300">
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Players
          </button>
        </Link>

        {/* Main Card */}
        <div className="grid items-center gap-10 rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl lg:grid-cols-2 lg:p-10">
          {/* Image Section */}
          <div className="group relative overflow-hidden rounded-[35px]">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

            <Image
              src={player?.image}
              alt={player?.name}
              width={700}
              height={700}
              className="h-112 w-full rounded-[35px] object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* Floating Badge */}
            <div className="absolute left-5 top-5 z-20 rounded-2xl border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
              <p className="text-sm font-semibold text-cyan-300">
                ⭐ Featured Player
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Name */}
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                {player?.name}
              </h1>

              <p className="mt-3 text-lg text-cyan-300">
                Professional Sports Player
              </p>
            </div>

            {/* Description */}
            <p className="leading-relaxed text-gray-300">
              {player?.description ||
                "An elite sports player with exceptional talent, dedication, and strong performance in competitive matches."}
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0d1b2d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-500/20 p-2">
                    <Trophy className="text-cyan-400" size={20} />
                  </div>

                  <h2 className="font-semibold">Achievements</h2>
                </div>

                <p className="text-sm text-gray-400">
                  Multiple championship appearances and strong performance.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0d1b2d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/30">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-xl bg-pink-500/20 p-2">
                    <Star className="text-pink-400" size={20} />
                  </div>

                  <h2 className="font-semibold">Rating</h2>
                </div>

                <p className="text-sm text-gray-400">
                  4.9 Player rating based on user reviews and performance.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0d1b2d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-xl bg-green-500/20 p-2">
                    <MapPin className="text-green-400" size={20} />
                  </div>

                  <h2 className="font-semibold">Location</h2>
                </div>

                <p className="text-sm text-gray-400">
                  {player?.country || "International Player"}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0d1b2d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-xl bg-yellow-500/20 p-2">
                    <Calendar className="text-yellow-400" size={20} />
                  </div>

                  <h2 className="font-semibold">Experience</h2>
                </div>

                <p className="text-sm text-gray-400">
                  5+ years professional sports experience.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex flex-wrap items-center gap-4 pt-6">
                {/* Go Back Button */}
                <Link href={'/'}>
                  <Button className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    {/* Shine Effect */}
                    <span className="absolute left-[-100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[100%]"></span>

                    <span className="relative z-10 flex items-center gap-2">
                      {/* Arrow Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Go Back
                    </span>
                  </Button>
                </Link>
                {/* Edit Button */}
             <EditButton></EditButton>

                {/* Delete Button */}
              <DeleteButton></DeleteButton>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Extra Section */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
            <h2 className="text-3xl font-black text-cyan-400">150+</h2>
            <p className="mt-2 text-gray-400">Matches Played</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
            <h2 className="text-3xl font-black text-pink-400">50+</h2>
            <p className="mt-2 text-gray-400">Awards Won</p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
            <h2 className="text-3xl font-black text-green-400">10K+</h2>
            <p className="mt-2 text-gray-400">Fan Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
