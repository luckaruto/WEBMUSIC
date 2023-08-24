import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../Redux/features/playerSlice";
// import { useGetDownLoadMusicQuery } from "../Redux/services/downloadedsportify";
import Loader from "./Loader";
import Error from "./Error";

import { useGetDownLoadMusicTempQuery } from "../Redux/services/downloadedsportifytemp";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  const dispatch = useDispatch();

  // function convertToTrackURL(trackURI) {
  //   const parts = trackURI.split(":");
  //   const trackID = parts[2];
  //   const trackURL = `https://open.spotify.com/track/${trackID}`;
  //   return trackURL;
  // }

  // const trackURL = convertToTrackURL(song.trackMetadata?.trackUri);

  const [dataMusic, setDataMusic] = useState(song);
  // const srcaudio = useGetDownLoadMusicTempQuery(trackURL);
  // const [bending, setBending] = useState(false);

  // const ConvertToDownload = () => {
  //   setBending(false);

  //   const modifiedData = {
  //     ...song,
  //     audio: srcaudio?.data?.PreviewUrl,
  //     // audio:
  //     //   "https://mbeta.123tokyo.xyz/get.php/6/0e/1PkSePIyfHk.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=FIS-kok922MEkQUyKkDG3A&s=1692805552&n=Seven%20%28feat.%20Latto%29%20-%20Explicit%20Ver.",
  //   };

  //   setDataMusic(modifiedData);

  //   setBending(true);
  // };

  // // const fetchData = useCallback(async () => {}, []);

  // React.useEffect(() => {
  //   const indetiPIEr = setTimeout(() => {
  //     ConvertToDownload();
  //   }, 500);
  //   return () => {
  //     clearTimeout(indetiPIEr);
  //   };
  // }, [srcaudio.isFetching]);

  // if (srcaudio.isFetching || !bending)
  //   return <Loader title="Loading songs..." />;

  // if (srcaudio.error) return <Error />;

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-start items-end bg-black bg-opacity-50 group-hover:flex ${
            activeSong.trackMetadata?.trackName ===
            dataMusic.trackMetadata?.trackName
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={dataMusic}
            data={data}
            i={i}
          />
        </div>
        <img
          alt="song_img"
          src={dataMusic.trackMetadata?.displayImageUri}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${dataMusic?.key}`}>
            {song.trackMetadata?.trackName}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              dataMusic.artists
                ? `/artists/${song?.artists[0].adamid}`
                : "/top-artists"
            }
          >
            {dataMusic.trackMetadata?.artists[0].name}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
