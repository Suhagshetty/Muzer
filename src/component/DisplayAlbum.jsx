import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumIndex = Number(id);
  const albumData = albumsData[albumIndex];

  if (!albumData) {
    return (
      <>
        <Navbar />
        <p className="mt-10 text-gray-400">Album not found</p>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Album Header */}
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-cover rounded-md shadow-2xl"
          src={albumData.image}
          alt={albumData.name}
        />

        <div className="flex flex-col">
          <p className="uppercase text-sm text-gray-400">Playlist</p>

          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>

          <h4 className="text-gray-400">{albumData.desc}</h4>

          <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt="Spotify"
            />
            <b className="text-white">Spotify</b>• 1,323,154 likes •{" "}
            <b className="text-white">50 songs</b> • about 2 hr 30 min
          </p>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] text-sm">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>

      <hr className="border-[#2a2a2a]" />

      {/* Songs List */}
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-4 p-2 text-[#a7a7a7] text-sm hover:bg-[#ffffff1a] cursor-pointer"
        >
          <p className="text-white flex items-center gap-4">
            <span className="text-[#a7a7a7]">{index + 1}</span>
            <img className="w-10 h-10 object-cover" src={item.image} alt="" />
            {item.name}
          </p>

          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
