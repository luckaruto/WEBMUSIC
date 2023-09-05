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
import Button from "./Button";
import DropDown from "./DropDown";

import { useParams, useSearchParams } from "react-router-dom";

// Component Playlist
const Playlist = ({ playlistId }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { activeSong, isPlaying, ListPlaylist, darkmode } = useSelector(
    (state) => state.player
  );
  const dispatch = useDispatch();
  const [isInputVisible, setInputVisible] = React.useState(false);
  const searchInputRef = React.useRef(null);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Focus on the input when it becomes visible
    }
  };
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
  const SortData = (data) => {
    setData(data);
  };

  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  React.useEffect(() => {
    setIsDarkMode(darkmode);
  }, [darkmode]);

  React.useEffect(() => {
    setData(ListPlaylist[parseInt(params.playlistId)]?.music);
  }, [params.playlistId, ListPlaylist.length]);

  return (
    <div className=" flex flex-col w-[90%] h-full gap-9 ml-6 relative mt-5  ">
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
      <div className="absolute right-[8%] top-4">
        <div className="flex flex-row gap-3 items-center">
          <div className="flex flex-row items-center relative ">
            <Button
              onClick={toggleInput}
              className={`absolute h-6 w-6 ${
                isInputVisible ? "left-5" : "right-0"
              }  `}
            >
              {isDarkMode ? (
                <img src="/images/find.svg"></img>
              ) : (
                <img src="/images/findwhite.svg"></img>
              )}
            </Button>
            {isInputVisible && (
              <input
                onChange={(e) => {
                  console.log(e.target.value === "");
                  if (e.target.value == "") {
                    setData(ListPlaylist[parseInt(params.playlistId)]?.music);
                  } else {
                    setData(() =>
                      ListPlaylist[parseInt(params.playlistId)]?.music.filter(
                        (song) =>
                          song.trackMetadata?.trackName.includes(
                            e.target.value
                          ) ||
                          song.trackMetadata?.artists[0].name.includes(
                            e.target.value
                          )
                      )
                    );
                  }
                }}
                ref={searchInputRef}
                type="text"
                id="search-input"
                placeholder="Filter"
                required
                className="pl-7 ml-4 border-2 py-1 border-[#bf6868] text-black placeholder:text-black bg-white font-poppins dark:placeholder:text-white rounded-[11.85px] w-4/5 dark:bg-[#535050] dark:text-[#FFFFFF] "
              />
            )}
          </div>

          <DropDown SortData={SortData} chartData={data}></DropDown>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
