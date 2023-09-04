import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useSelector } from "react-redux";
import Text from "./Text";
import { useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";
import Img from "./Img";

import { EditText, EditTextarea } from "react-edit-text";

export default function HeaderArtist(props) {
  const { activeSong, isPlaying, Artist } = useSelector(
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
    setSelectedImage(Artist.image);
    setDescription(Artist.description);
    setvaluetitle(Artist.title);
  }, []);

  React.useEffect(() => {
    props.HandleChangeValue(selectedImage, valuetitle, description);
  }, [selectedImage, valuetitle, description]);

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
          <img src="./images/music.svg" className="rounded-[8%] h-full" />
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
          className="text-3xl font-abhaya-libre text-white"
          onChange={(e) => {
            setvaluetitle(e.target.value);
            console.log(e.target.value);
          }}
          value={valuetitle}
          defaultValue={valuetitle == "" ? "PlayList no title" : valuetitle}
        />
        <EditTextarea
          className="text-white w-[70%] mb-9  "
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
      <div className=" absolute right-0 bottom-0" onClick={props.HandleTrue}>
        <Img className="h-9 w-9 " src="/images/addSong.svg" alt="icon" />
      </div>
    </div>
  );
}
