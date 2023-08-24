import PlaylistHeader from "./PlaylistHeader";
import SongList from "./SongList";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../Redux/services/spotify";
import "../styles/playlist.css";

// Component Playlist
const Playlist = ({ playlistId }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  // const selectedPlaylist = playlistData.find(
  //   (playlist) => playlist.id === playlistId
  // );

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className=" flex flex-col w-[90%] h-full gap-9 ml-6   ">
      <PlaylistHeader
        image={data[0].trackMetadata?.displayImageUri}
        name="Dcm ro di"
      />
      <div className=" w-full h-[70%]">
        <SongList data={data} />
      </div>
    </div>
  );
};

export default Playlist;
