import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import usePlayNow from "../Redux/services/PlayNowData";
import Button from "./Button";

const Search = (keyword) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetTopChartsQuery();
  const [searchCategory, setSearchCategory] = useState("All")
  const { dataMusic: data, isFetching, error } = usePlayNow();

  if (isFetching || data == null) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const checkSong = (keyword, song) => {
    if(song?.trackMetadata?.trackName?.includes(keyword)) {
      return true
    }
    return false
  }

  const checkArtist = (keyword, song) => {
    const artist = song?.trackMetadata?.artists
    for(let i = 0; i < artist.length; i++) {
        if(artist[i]?.name?.includes(keyword)) {
            return true
        }
        }
    return false
  }  

  const checkRealeaseDate = (keyword, song) => {
    if(song?.trackMetadata?.releaseDate?.includes(keyword)) {
        return true
    }
    return false
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-start sm:flex-row flex-col mt-4 mb-10">
      </div>

      <div className="flex flex-row" style={{gap: '1rem'}}>
        <h2 className="font-bold text-3xl text-white text-left">Result</h2>
        <h2 className="font-bold text-3xl text-white text-left">|</h2>
        <Button onClick={() => setSearchCategory("All")} className="bg-[#2a2a80] text-white"><h2 className="font-bold text-3xl text-white text-left">All</h2></Button>
        <Button onClick={() => setSearchCategory("Artist")} className="bg-[#2a2a80] text-white"><h2 className="font-bold text-3xl text-white text-left">Artists</h2></Button>
        <Button onClick={() => setSearchCategory("Year")} className="bg-[#2a2a80] text-white"><h2 className="font-bold text-3xl text-white text-left">Year</h2></Button>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {data?.slice(0, 10).map((song, i) => {
        return (
            <>
            {searchCategory === "All" && checkSong(keyword, song) === true || checkArtist(keyword, song) === true || checkRealeaseDate(keyword, song) === true ? (
                <SongCard
                key={i}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
                />
            ) : null}

            {searchCategory === "Artist" && checkArtist(keyword, song) === true ? (
                <SongCard
                key={i}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
                />
            ) : null}

            {searchCategory === "Year" && checkRealeaseDate(keyword, song) === true ? (
                <SongCard
                key={i}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
                />
            ) : null}     

            {toString(keyword) === "[object Undefined]" ? (
                <SongCard
                key={i}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
                />
            ) : null}  
            </>
        );
        })}
      </div>
    </div>
  );
};

export default Search;
