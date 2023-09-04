import PlaylistHeader from "./PlaylistHeader";
import SongList from "./SongList";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader } from "../components";
import usePlayNow from "../Redux/services/PlayNowData";
import { setListPlayList } from "../Redux/features/playerSlice";
import "../styles/playlist.css";
import { useNavigate } from "react-router-dom";
import chartData from "../Redux/services/DataSong";
import ModalDelete from "./ModalDelete";
import { useParams, useSearchParams } from "react-router-dom";

// Component Playlist
const Playlist = ({ playlistId }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { activeSong, isPlaying, ListPlaylist } = useSelector(
    (state) => state.player
  );
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const [stateDelete, setStateDelete] = React.useState(false);

  const [songToDelete, setSongToDelete] = React.useState(null);

  const [stateDeletePlaylist, setStateDeletePlaylist] = React.useState(false);

  const [PlaylistToDelete, setPlaylistToDelete] = React.useState(null);

  const handleDelete = () => {
    setData(() =>
      data.filter(
        (song) =>
          song.trackMetadata?.trackName !== songToDelete.trackMetadata.trackName
      )
    );
    const temp = [...ListPlaylist];
    temp[parseInt(params.playlistId)] = {
      ...temp[parseInt(params.playlistId)],
      music: data.filter(
        (song) =>
          song.trackMetadata?.trackName !== songToDelete.trackMetadata.trackName
      ),
    };
    dispatch(setListPlayList(temp));

    setStateDelete(false);
  };
  const setSongDelete = (song) => {
    setStateDelete(true);
    setSongToDelete(song);
  };
  const HandleFalse = () => {
    setStateDelete(false);
  };

  const handleDeletePlaylist = () => {
    const data = ListPlaylist.filter(
      (playlist) => PlaylistToDelete.id !== playlist.id
    );
    dispatch(setListPlayList(data));
    setStateDeletePlaylist(false);
    if (parseInt(params.playlistId) > 0) {
      navigate(`/playlist/${parseInt(params.playlistId) - 1}`);
    } else if (data.length == 0) {
      navigate(`/playlist`);
    } else {
      navigate(`/playlist/${parseInt(params.playlistId)}`);
    }
  };
  const setPlaylistDelete = (Playlist) => {
    setStateDeletePlaylist(true);
    setPlaylistToDelete(Playlist);
  };
  const HandleFalsePlaylist = () => {
    setStateDeletePlaylist(false);
  };
  React.useEffect(() => {
    setData(ListPlaylist[parseInt(params.playlistId)]?.music);
    console.log(ListPlaylist[parseInt(params.playlistId)]);
  }, [params.playlistId, handleDeletePlaylist]);
  return (
    <div className=" flex flex-col w-[90%] h-full gap-9 ml-6   ">
      <PlaylistHeader
        setPlaylistDelete={setPlaylistDelete}
        handleDeletePlaylist={handleDeletePlaylist}
      />
      <div className=" w-full h-[70%] overflow-hidden">
        <SongList data={data} setSongDelete={setSongDelete} />
      </div>
      {stateDelete && (
        <ModalDelete
          HandleFalse={HandleFalse}
          messages={`Are you sure you want to delete this ${songToDelete.trackMetadata?.trackName} from the
               Playlist `}
          handleDelete={handleDelete}
        />
      )}
      {stateDeletePlaylist && (
        <ModalDelete
          HandleFalse={HandleFalsePlaylist}
          messages={`Are you sure you want to delete this ${PlaylistToDelete.title} from the
               Playlist `}
          handleDelete={handleDeletePlaylist}
        />
      )}
    </div>
  );
};

export default Playlist;
