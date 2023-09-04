import React, { useState, useEffect } from "react";

import { ImageGenerator } from "./PlaylistHeader";
import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";

import SongElement from "./SongElement";
import { useParams, useSearchParams } from "react-router-dom";

// Component SongList
const SongList = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  return (
    <div className=" bg-[#ffffff] rounded-[10px] bg-opacity-[0%] h-[100%] w-full">
      <div className="flex flex-row w-full  h-[10%] bg-[#ffffff] justify-between items-center bg-opacity-[20%] text-white px-6">
        <span># Title</span>

        <span>Album</span>
        <span>Duration</span>
      </div>
      <div className="song-list-items-container overflow-auto h-[80%] mt-3 w-full">
        <ul className="song-list-items flex flex-col justify-center gap-6">
          {props.data?.map((song, index) => (
            <SongElement
              key={index}
              song={song}
              index={index}
              data={props.data}
              setSongDelete={props.setSongDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SongList;
