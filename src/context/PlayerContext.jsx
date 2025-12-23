import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { minute: 0, second: 0 },
    totalTime: { minute: 0, second: 0 },
  });

  /* ---------------- PLAY / PAUSE ---------------- */

  const play = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setPlayStatus(false);
  };

  /* ---------------- TIME + SEEK BAR SYNC ---------------- */

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      const current = audio.currentTime || 0;
      const duration = audio.duration || 0;

      setTime({
        currentTime: {
          minute: Math.floor(current / 60),
          second: Math.floor(current % 60),
        },
        totalTime: {
          minute: Math.floor(duration / 60),
          second: Math.floor(duration % 60),
        },
      });

      if (seekBar.current && duration) {
        const progress = (current / duration) * 100;
        seekBar.current.style.width = `${progress}%`;
      }
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  /* ---------------- CONTEXT VALUE ---------------- */

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
