import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useSelector } from "react-redux";
import Text from "./Text";
import { useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";
import Img from "./Img";

const PlaylistHeader = ({ image, name }) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [imageData, setImageData] = useState("");
  const dispatch = useDispatch();
  const handlePlayButtonClick = () => {
    dispatch(playPause(!isPlaying));
  };

  // useEffect(() => {
  //   const fetchImageData = async () => {
  //     try {
  //       const imageData = await getImage(avatar); // Gọi hàm getImage để lấy dữ liệu hình ảnh từ máy chủ
  //       setImageData(imageData);
  //     } catch (error) {
  //       console.error("Err: ", error);
  //     }
  //   };

  //   fetchImageData();
  // }, [avatar]);

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <div className=" relative h-[30%] w-full flex flex-row gap-6 justify-start items-start">
      <img src={image} className="rounded-[6px] h-full" />

      <div className="flex flex-col justify-between h-full">
        <Text className="text-3xl font-abhaya-libre text-white">{name}</Text>
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
      <div className=" absolute right-0 bottom-0">
        <Img className="h-9 w-9 " src="./images/icon_setting.svg" alt="icon" />
      </div>
    </div>
  );
};

export default PlaylistHeader;
