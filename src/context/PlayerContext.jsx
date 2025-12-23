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

  /* ---------- PLAY / PAUSE ---------- */

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

  /* ---------- SEEK ON CLICK ---------- */

  const seekSong = (e) => {
    const bg = seekBg.current;
    const audio = audioRef.current;
    if (!bg || !audio) return;

    const rect = bg.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    const percent = clickX / width;
    audio.currentTime = percent * audio.duration;
  };

  /* ---------- TIME + PROGRESS SYNC ---------- */

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

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        play,
        pause,
        time,
        seekSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
