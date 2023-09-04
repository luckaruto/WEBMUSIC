import PlaylistHeader from "./PlaylistHeader";
import SongList from "./SongList";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader } from "../components";
import usePlayNow from "../Redux/services/PlayNowData";

import "../styles/playlist.css";
import chartData from "../Redux/services/DataSong";


// Component Playlist
const AddPlaylist = ({ playlistId }) => {

  

  return (
    <div className=" flex flex-col w-[90%] h-full gap-9 ml-6   ">
      <PlaylistHeader image="./images/music.svg" name="Dcm ro di" />
    </div>
  );
};

export default AddPlaylist;
