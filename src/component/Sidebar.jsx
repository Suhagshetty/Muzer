import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full px-2 py-3 hidden lg:flex flex-col gap-3 text-white bg-black">
      {/* Top Navigation */}
      <div className="bg-[#121212] rounded-lg flex flex-col gap-2 py-3">
        <div className="flex items-center gap-4 px-6 py-2 cursor-pointer hover:text-white">
          <img className="w-6 opacity-90" src={assets.home_icon} alt="Home" />
          <p className="font-semibold text-sm">Home</p>
        </div>
        <div className="flex items-center gap-4 px-6 py-2 cursor-pointer hover:text-white">
          <img
            className="w-6 opacity-90"
            src={assets.search_icon}
            alt="Search"
          />
          <p className="font-semibold text-sm">Search</p>
        </div>
      </div>

      {/* Library */}
      <div className="bg-[#121212] rounded-lg flex-1 flex flex-col">
        {/* Library Header */}
        <div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <img
              src={assets.stack_icon}
              className="w-6 opacity-90"
              alt="Library"
            />
            <p className="font-semibold text-sm text-white/90">Your Library</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-4 cursor-pointer opacity-80 hover:opacity-100"
              src={assets.arrow_icon}
              alt="Expand"
            />
            <img
              className="w-4 cursor-pointer opacity-80 hover:opacity-100"
              src={assets.play_icon}
              alt="Play"
            />
          </div>
        </div>

        {/* Playlist Card */}
        <div className="p-4 bg-[#242424] m-2 rounded-md">
          <h1 className="font-semibold text-sm mb-1">
            Create your first playlist
          </h1>
          <p className="text-xs text-white/70">It's easy, we’ll help you</p>
          <button className="px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4 hover:scale-105 transition">
            Create playlist
          </button>
        </div>

        {/* Podcast Card */}
        <div className="p-4 bg-[#242424] m-2 rounded-md">
          <h1 className="font-semibold text-sm mb-1">
            Let’s find some podcasts to follow
          </h1>
          <p className="text-xs text-white/70">
            We’ll keep you updated on new episodes
          </p>
          <button className="px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4 hover:scale-105 transition">
            Browse podcasts
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-md">
          <h1 className="font-semibold text-sm mb-1">
            Let’s find some podcasts to follow
          </h1>
          <p className="text-xs text-white/70">
            We’ll keep you updated on new episodes
          </p>
          <button className="px-4 py-1.5 bg-white text-sm text-black rounded-full mt-4 hover:scale-105 transition">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
