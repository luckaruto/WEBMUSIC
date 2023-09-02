import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import usePlayNow from "../Redux/services/PlayNowData";
import Button from "./Button";
import chartData from "../Redux/services/dataSong";

const Search = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetTopChartsQuery();
  const [searchCategory, setSearchCategory] = useState("All")
  const [data, setData] = useState(chartData)
  // const { dataMusic: data, isFetching, error } = usePlayNow();

  // if (isFetching || data == null) return <Loader title="Loading songs..." />;

  // if (error) return <Error />;

  let keyword = localStorage.getItem("searchKeyword")
  console.log(keyword)
  console.log(typeof keyword)

  // keyword = "tlinh"

  // console.log(keyword)

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
        else 
            break
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
    <div className="flex flex-col h-full">
      <div className="flex flex-row" style={{gap: '1rem', marginLeft: '20px'}}>
        <h2 className="font-bold text-3xl text-white text-left">Result</h2>
        <h2 className="font-bold text-3xl text-white text-left">|</h2>
        <Button onClick={() => setSearchCategory("All")} className="text-white bg-transparent"><h2 className="font-bold text-3xl text-white text-left" style={{color: searchCategory === "All" ? "#ec1052" : "white"}}>All</h2></Button>
        <Button onClick={() => setSearchCategory("Artist")} className="text-white bg-transparent"><h2 className="font-bold text-3xl text-white text-left" style={{color: searchCategory === "Artist" ? "#ec1052" : "white"}}>Artists</h2></Button>
        <Button onClick={() => setSearchCategory("Year")} className="text-white bg-transparent"><h2 className="font-bold text-3xl text-white text-left" style={{color: searchCategory === "Year" ? "#ec1052" : "white"}}>Year</h2></Button>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8 h-[100%] overflow-auto" >
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

            {/* {toString(keyword) === "[object Undefined]" ? (
                <SongCard
                key={i}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
                />
            ) : null}   */}
            </>
        );
        })}
      </div>
    </div>
  );
};

export default Search;
