import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time } =
    useContext(PlayerContext);

  // Guard: prevents crash before track loads
  if (!track) return null;

  const formatTime = (t) => {
    if (!t) return "0:00";
    const { minute, second } = t;
    return `${minute}:${second < 10 ? "0" : ""}${second}`;
  };

  return (
    <div className="h-[10%] bg-black flex items-center justify-between px-4 text-white">
      {/* LEFT */}
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-12 h-12 rounded object-cover"
          src={track.image}
          alt={track.name}
        />
        <div className="text-sm">
          <p className="font-medium truncate max-w-[160px]">{track.name}</p>
          <p className="text-gray-400 text-xs truncate max-w-[160px]">
            {track.desc}
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex flex-col items-center gap-2 m-auto">
        <div className="flex items-center gap-4">
          <img className="w-4" src={assets.prev_icon} alt="Prev" />

          {playStatus ? (
            <img
              onClick={pause}
              className="w-8 cursor-pointer"
              src={assets.pause_icon}
              alt="Pause"
            />
          ) : (
            <img
              onClick={play}
              className="w-8 cursor-pointer"
              src={assets.play_icon}
              alt="Play"
            />
          )}

          <img className="w-4" src={assets.next_icon} alt="Next" />
        </div>

        {/* PROGRESS */}
        <div className="flex items-center gap-3 text-xs w-full">
          <p>{formatTime(time.currentTime)}</p>

          <div
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full"
          >
            <div ref={seekBar} className="h-1 bg-green-600 rounded-full" />
          </div>

          <p>{formatTime(time.totalTime)}</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.volume_icon} alt="Volume" />
      </div>
    </div>
  );
};

export default Player;
