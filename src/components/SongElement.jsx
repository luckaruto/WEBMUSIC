import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";

import Img from "./Img";

const SongElement = ({ song, index, data, setSongDelete }) => {
  const dispatch = useDispatch();

  return (
    <li
      key={index}
      className="cursor-pointer dark:hover:bg-[#737373] hover:bg-[#afaeae] rounded-md flex flex-row gap-3 items-center relative"
    >
      <span className="dark:text-white text-black font-poppins font-bold">
        {index + 1}
      </span>
      <span
        className="song-details w-[90%]"
        onClick={() => {
          dispatch(playPause(false));

          setTimeout(() => {
            dispatch(setActiveSong({ song, data, i: index }));
            dispatch(playPause(true));
          }, 100);
        }}
      >
        <img
          src={song.trackMetadata?.displayImageUri}
          className=" h-12 w-12 rounded-[6px]"
        />
        <div className="flex flex-row items-center relative w-full">
          <div className=" dark:text-white text-black font-poppins font-bold text-xl w-[40%]">
            {song.trackMetadata?.trackName}
          </div>
          <div className="absolute text-sm dark:text-[#B3B3B3] font-poppins  text-[#959595] left-[42%]">
            {song.trackMetadata?.artists[0].name}
          </div>
          <div className="absolute right-0 text-sm dark:text-[#B3B3B3] font-poppins  text-[#959595]  ">
            0000
          </div>
        </div>
      </span>
      <div
        className="absolute right-2 h-6 w-6"
        onClick={() => setSongDelete(song)}
      >
        <Img src="/images/minus.svg" />
      </div>
    </li>
  );
};
export default SongElement;
