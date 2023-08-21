import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";

const PlayPause = ({ isPlaying, activeSong, song, data, i }) => {
  const dispatch = useDispatch();
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={35}
      className="text-[#FF293F] bg-white rounded-full ml-2 mb-2"
      onClick={() => {
        dispatch(playPause(false));
      }}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-[#FF293F] bg-white rounded-full  ml-2 mb-2"
      onClick={() => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      }}
    />
  );
};

export default PlayPause;
