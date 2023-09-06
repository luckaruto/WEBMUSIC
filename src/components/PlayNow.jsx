import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../Redux/services/spotify";
import { useGetDownLoadMusicQuery } from "../Redux/services/downloadedsportify";
import usePlayNow from "../Redux/services/PlayNowData";
import chartData from "../Redux/services/DataSong";
import Footer from "./Footer";

const PlayNow = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, ListPlaylist } = useSelector(
    (state) => state.player
  );

  // const { dataMusic: data, isFetching, error } = usePlayNow();

  // if (isFetching || data == null) return <Loader title="Loading songs..." />;

  // if (error) return <Error />;
  // console.log(data);

  return (
    <div className="flex flex-col h-full w-full overflow-y-scroll hide-scrollbar gap-4">
      <div className="w-full flex justify-between items-start sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl dark:text-white text-left">
          Play Now
        </h2>
      </div>
      <div className="flex flex-col  ">
        <h3 className="font-bold font-poppins text-2xl dark:text-white text-left mb-4">
          Top to day {`>`}
        </h3>
        <div className="flex flex-row sm:justify-start justify-center gap-8">
          {chartData.slice(0, 5)?.map((song, i) => (
            <SongCard
              key={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={chartData}
              i={i}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col ">
        <h3 className="font-bold font-poppins text-2xl dark:text-white text-left mb-4">
          Top to Pops news {`>`}
        </h3>
        <div className="flex flex-row sm:justify-start justify-center gap-8">
          {chartData.slice(10, 15)?.map((song, i) => (
            <SongCard
              key={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={chartData}
              i={i}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col ">
        <h3 className="font-bold font-poppins text-2xl dark:text-white text-left mb-4">
          Top to Pops VietNam {`>`}
        </h3>
        <div className="flex flex-row sm:justify-start justify-center gap-8">
          {ListPlaylist[1].music.slice(0, 5)?.map((song, i) => (
            <SongCard
              key={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={ListPlaylist}
              i={i}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col ">
        <h3 className="font-bold font-poppins text-2xl dark:text-white text-left mb-4">
          Hot podcasts {`>`}
        </h3>
        <div className="flex flex-row sm:justify-start justify-center gap-8">
          {chartData.slice(100, 103)?.map((song, i) => (
            <SongCard
              key={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={ListPlaylist}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayNow;
