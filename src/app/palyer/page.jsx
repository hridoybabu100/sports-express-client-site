import PlayerCard from "@/components/PlayerCard";
import { Search, Trophy, Users, Star } from "lucide-react";

const PlayerPage = async () => {
  const res = await fetch("http://localhost:5000/sports", {
    cache: "no-store",
  });

  const players = await res.json();

  return (
    <div className="min-h-screen bg-linear-to-br from-[#050816] via-[#071426] to-[#0b1f3a] text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 md:px-10 lg:px-20">
        
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Explore <span className="text-cyan-400">Top Players</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-300 md:text-base">
              Discover talented athletes, esports legends, and rising stars
              from different sports around the world.
            </p>
          </div>

          {/* Search + Button */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            
            <div className="flex w-full max-w-xl items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
              <Search className="mr-3 text-gray-400" size={20} />

              <input
                type="text"
                placeholder="Search player..."
                className="w-full bg-transparent outline-none placeholder:text-gray-400"
              />
            </div>

            <button className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
              Explore Now
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-500/20 p-3">
                  <Users className="text-cyan-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">{players.length}+</h2>
                  <p className="text-sm text-gray-400">Total Players</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-yellow-500/20 p-3">
                  <Trophy className="text-yellow-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">25+</h2>
                  <p className="text-sm text-gray-400">Championships</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-pink-500/20 p-3">
                  <Star className="text-pink-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">4.9</h2>
                  <p className="text-sm text-gray-400">Player Rating</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-green-500/20 p-3">
                  <Users className="text-green-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">10K+</h2>
                  <p className="text-sm text-gray-400">Fans Connected</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="px-4 pb-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">All Players</h2>
              <p className="mt-2 text-gray-400">
                Browse all available sports players.
              </p>
            </div>

            <button className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20">
              View More
            </button>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {players.map((player) => (
              <div
                key={player._id}
                className="transition-all duration-300 hover:-translate-y-2"
              >
                <PlayerCard player={player} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Feature Section */}
      <section className="px-4 pb-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-2">
          
          <div>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Why Users Love Our Sports Platform
            </h2>

            <p className="mt-5 text-gray-300">
              Experience smooth performance, modern design, real-time player
              updates, and premium sports content in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105">
                Join Community
              </button>

              <button className="rounded-2xl border border-white/20 px-6 py-3 transition hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            
            <div className="rounded-3xl border border-white/10 bg-[#0d1b2d] p-6">
              <h3 className="text-2xl font-bold text-cyan-400">24/7</h3>
              <p className="mt-2 text-sm text-gray-400">
                Live Sports Updates
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1b2d] p-6">
              <h3 className="text-2xl font-bold text-pink-400">100+</h3>
              <p className="mt-2 text-sm text-gray-400">
                Professional Players
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1b2d] p-6">
              <h3 className="text-2xl font-bold text-green-400">99%</h3>
              <p className="mt-2 text-sm text-gray-400">
                User Satisfaction
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0d1b2d] p-6">
              <h3 className="text-2xl font-bold text-yellow-400">Fast</h3>
              <p className="mt-2 text-sm text-gray-400">
                Responsive Experience
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerPage;