import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayListCart from "../components/PlayListCart";
import chartData from "../Redux/services/DataSong";

export default function AllPlayListPage() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, ListPlaylist } = useSelector(
    (state) => state.player
  );
  return (
    <div className=" absolute h-full top-0 left-7 flex flex-col w-[95%]  items-center">
      <h2 className="font-bold font-poppins text-3xl dark:text-white text-left">
        All Playlist
      </h2>

      <div className="ml-4 flex flex-wrap sm:justify-start justify-start  gap-8 h-[86%] w-full overflow-y-scroll no-scrollbar">
        {ListPlaylist?.map((Playlist, i) => (
          <PlayListCart key={i} playlist={Playlist} index={i} />
        ))}
      </div>
    </div>
  );
}
