import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";
import Loader from "./Loader";
import Error from "./Error";
import { useGetDownLoadMusicTempMp3Query } from "../Redux/services/getMp3music";

const PlayPause = ({ isPlaying, activeSong, song, data, i }) => {
  // console.log(song?.YoutubeUrl?.split("=")[1]);
  // const srcaudio = useGetDownLoadMusicTempMp3Query(
  //   song?.YoutubeUrl?.split("=")[1]
  // );
  const dispatch = useDispatch();
  // const dataset = { ...song, audio: srcaudio?.data?.link };

  // if (srcaudio.isFetching) return <Loader title="Loading songs..." />;

  // if (srcaudio.error) return <Error />;

  return isPlaying &&
    activeSong?.trackMetadata?.trackName === song?.trackMetadata?.trackName ? (
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
        dispatch(playPause(false));
        setTimeout(() => {
          dispatch(playPause(true));
        }, 500);
      }}
    />
  );
};

export default PlayPause;
