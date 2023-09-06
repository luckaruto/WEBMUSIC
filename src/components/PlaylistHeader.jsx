import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useSelector } from "react-redux";
import Text from "./Text";
import { useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";
import Img from "./Img";
import { setListPlayList } from "../Redux/features/playerSlice";
import { EditText, EditTextarea } from "react-edit-text";
import { useParams, useSearchParams } from "react-router-dom";
import { useRef } from "react";

const PlaylistHeader = (props) => {
  const params = useParams();
  const { activeSong, isPlaying, ListPlaylist } = useSelector(
    (state) => state.player
  );

  const dispatch = useDispatch();
  const handlePlayButtonClick = () => {
    dispatch(playPause(!isPlaying));
  };
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [description, setDescription] = useState("");
  const [valuetitle, setvaluetitle] = useState("");

  React.useEffect(() => {
    if (parseInt(params.playlistId) < ListPlaylist.length) {
      setSelectedImage(ListPlaylist[parseInt(params.playlistId)]?.image);
      setDescription(ListPlaylist[parseInt(params.playlistId)]?.description);
      setvaluetitle(ListPlaylist[parseInt(params.playlistId)]?.title);
    }
    console.log("2");
  }, [params.playlistId, ListPlaylist]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (parseInt(params.playlistId) < ListPlaylist.length) {
        const temp = {
          ...ListPlaylist[parseInt(params.playlistId)],
          id: `Playlist${parseInt(params.playlistId) + 1}`,
          title: valuetitle,
          description: description,
          image: selectedImage,
        };

        const newListPlaylist = [...ListPlaylist];

        newListPlaylist[parseInt(params.playlistId)] = temp;

        dispatch(setListPlayList(newListPlaylist));
      } else {
        const temp = {
          id: `Playlist${parseInt(params.playlistId) + 1}`,
          title: `Playlist${parseInt(params.playlistId) + 1}`,
          description: "",
          image: "/images/music.svg",
          music: [],
        };
        setSelectedImage("/images/music.svg");
        setDescription("");
        setvaluetitle(`Playlist${parseInt(params.playlistId)}`);
        dispatch(setListPlayList([...ListPlaylist, temp]));
        console.log("4");
      }
      console.log("1");
    }, 1000);
    return () => clearTimeout(timer);
  }, [selectedImage, valuetitle, description, params.playlistId]);

  return (
    <div className=" relative h-[30%] w-full flex flex-row gap-6 justify-start items-start">
      <div
        className="relative rounded-[8%] h-full  bg-[#878787]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {selectedImage ? (
          <img
            className="rounded-[8%] h-full"
            src={selectedImage}
            alt="Selected"
          />
        ) : (
          <img src="/images/music.svg" className="rounded-[8%] h-full" />
        )}

        {isHovered && (
          <label
            htmlFor="imageInput"
            className="absolute top-0 h-full w-full flex items-center justify-center bg-black bg-opacity-20 rounded-[8%]"
          >
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <img src="/images/camera.svg" className="h-[50%] " />
          </label>
        )}
      </div>

      <div className="flex flex-col justify-between h-full">
        <EditText
          className="text-3xl  dark:text-white text-black font-poppins font-bold"
          onChange={(e) => {
            setvaluetitle(e.target.value);
          }}
          value={valuetitle}
          defaultValue={valuetitle == "" ? "PlayList no title" : valuetitle}
        />
        <EditTextarea
          className="dark:text-white w-[70%] mb-9  text-black font-semibold "
          placeholder="Add description"
          defaultValue={description}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button
          className="flex flex-row bg-[#FF293F] text-white rounded-xl w-fit items-center px-4 py-1"
          onClick={handlePlayButtonClick}
        >
          {isPlaying ? (
            <FaPause className="play-icon" />
          ) : (
            <FaPlay className="play-icon" />
          )}
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <div
        className=" absolute right-0 bottom-0"
        onClick={() => {
          props.setPlaylistDelete(ListPlaylist[parseInt(params.playlistId)]);
        }}
      >
        <Img className="h-9 w-9 " src="/images/trash.svg" alt="icon" />
      </div>
    </div>
  );
};

export default PlaylistHeader;
