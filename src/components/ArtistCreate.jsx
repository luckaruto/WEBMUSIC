import SongList from "./SongList";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setArtist } from "../Redux/features/playerSlice";
import "../styles/playlist.css";
import { useNavigate } from "react-router-dom";
import ModalDelete from "./ModalDelete";
import { useParams, useSearchParams } from "react-router-dom";
import HeaderArtist from "./HeaderArtist";
import ModelAdd from "./ModelAdd";

export default function ArtistCreate() {
  const navigate = useNavigate();

  const { activeSong, isPlaying, Artist } = useSelector(
    (state) => state.player
  );
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  const [stateDelete, setStateDelete] = React.useState(false);

  const [songToDelete, setSongToDelete] = React.useState(null);

  const handleDelete = () => {
    setData(() =>
      data.filter(
        (song) =>
          song.trackMetadata?.trackName !== songToDelete.trackMetadata.trackName
      )
    );

    const temp = {
      ...Artist,
      music: data.filter(
        (song) =>
          song.trackMetadata?.trackName !== songToDelete.trackMetadata.trackName
      ),
    };
    dispatch(setArtist(temp));

    setStateDelete(false);
  };
  const setSongDelete = (song) => {
    setStateDelete(true);
    setSongToDelete(song);
  };
  const HandleFalse = () => {
    setStateDelete(false);
  };

  const HandleChangeValue = (selectedImage, valuetitle, description) => {
    const temp = {
      ...Artist,
      title: valuetitle,
      description: description,
      image: selectedImage,
    };

    dispatch(setArtist(temp));
  };
  const HandleAddMusic = (title, artists, lyrics, image, audio) => {
    const music = {
      trackMetadata: {
        trackName: title,
        displayImageUri: image,
        artists: [
          {
            name: artists,
            spotifyUri: "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU",
            externalUrl: "",
          },
        ],
      },
      audio: audio,
      lyrics: lyrics,
    };
    console.log(music);
    console.log(Artist.music);
    const temp = { ...Artist };
    temp.music = [...temp.music, music];

    dispatch(setArtist(temp));
  };
  const [stateAdd, setStateAdd] = React.useState(false);

  React.useEffect(() => {
    setData(Artist?.music);
  }, [handleDelete]);
  return (
    <div className=" flex flex-col w-[90%] h-full gap-9 ml-6   ">
      <HeaderArtist
        HandleChangeValue={HandleChangeValue}
        HandleAddMusic={HandleAddMusic}
        HandleTrue={() => {
          setStateAdd(true);
        }}
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
      {stateAdd && (
        <ModelAdd
          HandleFalse={() => {
            setStateAdd(false);
          }}
          HandleAddMusic={HandleAddMusic}
        />
      )}
    </div>
  );
}
