import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";

import Img from "./Img";

import { useGetDownLoadMusicTempQuery } from "../Redux/services/downloadedsportifytemp";

const SongElement = ({ song, index, data, setSongDelete }) => {
  const dispatch = useDispatch();

  return (
    <li key={index} className="flex flex-row gap-3 items-center relative">
      <span className="text-white">{index + 1}</span>
      <span
        className="song-details w-[80%]"
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
          className="h-12 w-12 rounded-[6px]"
        />
        <div className="title-artist">
          <div className="text-xl text-white">
            {song.trackMetadata?.trackName}
          </div>
          <div className="text-sm text-[#B3B3B3]">
            {song.trackMetadata?.artists[0].name}
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
