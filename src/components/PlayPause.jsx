import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={35}
      className="text-[#FF293F] bg-white rounded-full ml-2 mb-2"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-[#FF293F] bg-white rounded-full  ml-2 mb-2"
      onClick={handlePlay}
    />
  );

export default PlayPause;
