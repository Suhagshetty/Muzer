import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full px-2 py-3 flex-col gap-3 text-white hidden lg:flex bg-black">
      {/* Top nav */}
      <div className="bg-[#121212] h-[15%] rounded-lg flex flex-col justify-center gap-2">
        <div className="flex items-center gap-4 px-6 py-1 cursor-pointer hover:text-white/90">
          <img className="w-6 opacity-90" src={assets.home_icon} alt="" />
          <p className="font-semibold text-sm">Home</p>
        </div>
        <div className="flex items-center gap-4 px-6 py-1 cursor-pointer hover:text-white/90">
          <img className="w-6 opacity-90" src={assets.search_icon} alt="" />
          <p className="font-semibold text-sm">Search</p>
        </div>
      </div>

      {/* Library */}
      <div className="bg-[#121212] h-[85%] rounded-lg">
        <div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} className="w-7 opacity-90" alt="" />
            <p className="font-semibold text-sm text-white/90">Your Library</p>
          </div>
          <div className="flex items-center gap-5">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.play_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start pl-1">
          <h1>Create your first playlist</h1>
          <p className="font-light">Its easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
      </div>
      <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start pl-1">
        <h1>Let's find some podcasts to follow</h1>
        <p className="font-light">we'll keep you updated on new episodes</p>
        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
          Browse podcasts
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
