import PlaylistHeader from "./PlaylistHeader";
import SongList from "./SongList";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader } from "../components";
import usePlayNow from "../Redux/services/PlayNowData";

import "../styles/playlist.css";

// Component Playlist
const Playlist = ({ playlistId }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { dataMusic: data, isFetching, error } = usePlayNow();

  if (isFetching || data == null) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className=" flex flex-col w-[90%] h-full gap-9 ml-6   ">
      <PlaylistHeader
        image={data[0].trackMetadata?.displayImageUri}
        name="Dcm ro di"
      />
      <div className=" w-full h-[70%] overflow-hidden">
        <SongList data={data} />
      </div>
    </div>
  );
};

export default Playlist;
