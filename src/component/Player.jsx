import React from "react";
import { assets, songsData } from "../assets/assets";

const Player = () => {
  const song = songsData[0];

  return (
    <div className="h-[10%] bg-black flex items-center justify-between px-4 text-white">
      {/* LEFT: Song Info */}
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-12 h-12 rounded object-cover"
          src={song.image}
          alt={song.name}
        />
        <div className="text-sm">
          <p className="font-medium truncate max-w-[160px]">{song.name}</p>
          <p className="text-gray-400 text-xs truncate max-w-[160px]">
            {song.desc.slice(0, 12)}
          </p>
        </div>
      </div>

      {/* CENTER: Controls */}
      <div className="flex flex-col items-center gap-2 m-auto">
        <div className="flex items-center gap-4">
          <img
            className="w-4 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.shuffle_icon}
            alt="Shuffle"
          />
          <img
            className="w-4 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.prev_icon}
            alt="Previous"
          />
          <img
            className="w-8 cursor-pointer opacity-90 hover:opacity-100"
            src={assets.play_icon}
            alt="Play"
          />
          <img
            className="w-4 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.next_icon}
            alt="Next"
          />
          <img
            className="w-4 cursor-pointer opacity-80 hover:opacity-100"
            src={assets.loop_icon}
            alt="Loop"
          />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3 text-xs w-full">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <div className="h-1 w-[30%] bg-green-600 rounded-full" />
          </div>
          <p>3:20</p>
        </div>
      </div>

      {/* RIGHT: Extra Controls */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img
          className="w-4 cursor-pointer"
          src={assets.mic_icon}
          alt="Lyrics"
        />
        <img
          className="w-4 cursor-pointer"
          src={assets.queue_icon}
          alt="Queue"
        />
        <img
          className="w-4 cursor-pointer"
          src={assets.speaker_icon}
          alt="Device"
        />
        <img
          className="w-4 cursor-pointer"
          src={assets.volume_icon}
          alt="Volume"
        />
        <div className="w-20 bg-slate-50 h-1 rounded-full" />
        <img
          className="w-4 cursor-pointer"
          src={assets.mini_player_icon}
          alt="Mini Player"
        />
        <img
          className="w-4 cursor-pointer"
          src={assets.zoom_icon}
          alt="Fullscreen"
        />
      </div>
    </div>
  );
};

export default Player;
