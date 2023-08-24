import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../Redux/services/spotify";
import { useGetDownLoadMusicQuery } from "../Redux/services/downloadedsportify";
import usePlayNow from "../Redux/services/PlayNowData";

const PlayNow = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetTopChartsQuery();
  const { dataMusic: data, isFetching, error } = usePlayNow();

  if (isFetching || data == null) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-start sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Play Now</h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.slice(0, 10).map((song, i) => (
          <SongCard
            key={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayNow;
