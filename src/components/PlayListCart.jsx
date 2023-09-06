import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import Text from "./Text";
import { useNavigate } from "react-router-dom";

export default function PlayListCart({ playlist, index }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataMusic, setDataMusic] = useState(playlist);
  return (
    <div
      className="hover:bg-neutral-500 h-fit flex flex-col w-[250px] p-4 dark:bg-white/5 bg-[#aaa7a7]  dark:bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => {
        navigate(`/playlist/${index}`);
      }}
    >
      <div className="relative w-full h-56 group">
        <img
          alt="song_img"
          src={dataMusic.image}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="text-xl truncate dark:text-gray-300 font-poppins font-semibold mt-1">
          <Text>{dataMusic.title}</Text>
        </p>
      </div>
    </div>
  );
}
