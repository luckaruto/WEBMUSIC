import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";
import Loader from "./Loader";
import Error from "./Error";

import { useGetDownLoadMusicTempQuery } from "../Redux/services/downloadedsportifytemp";

const SongElement = ({ song, index, data }) => {
  const dispatch = useDispatch();
  function convertToTrackURL(trackURI) {
    const parts = trackURI.split(":");
    const trackID = parts[2];
    const trackURL = `https://open.spotify.com/track/${trackID}`;
    return trackURL;
  }

  const trackURL = convertToTrackURL(song.trackMetadata?.trackUri);

  const [dataMusic, setDataMusic] = useState({});
  const srcaudio = useGetDownLoadMusicTempQuery(trackURL);
  const [bending, setBending] = useState(false);

  const ConvertToDownload = () => {
    setBending(false);

    const modifiedData = {
      ...song,
      audio: srcaudio?.data?.PreviewUrl,
      // audio:
      //   "https://mbeta.123tokyo.xyz/get.php/6/0e/1PkSePIyfHk.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=FIS-kok922MEkQUyKkDG3A&s=1692805552&n=Seven%20%28feat.%20Latto%29%20-%20Explicit%20Ver.",
    };

    setDataMusic(modifiedData);
    console.log(srcaudio?.data?.PreviewUrl);
    setBending(true);
  };

  // const fetchData = useCallback(async () => {}, []);
  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };
  React.useEffect(() => {
    const indetiPIEr = setTimeout(() => {
      ConvertToDownload();
    }, 3000);
    return () => {
      clearTimeout(indetiPIEr);
    };
  }, [srcaudio.isFetching]);

  if (srcaudio.isFetching || !bending || Object.keys(dataMusic).length === 0)
    return <Loader title="Loading songs..." />;

  if (srcaudio.error) return <Error />;

  return (
    <li
      key={index}
      className="flex flex-row gap-3 items-center"
      onClick={() => {
        dispatch(playPause(false));
        setTimeout(() => {
          dispatch(setActiveSong({ song: dataMusic, data, i: index }));
          dispatch(playPause(true));
        }, 100);
      }}
    >
      <span>{index + 1}</span>
      <span className="song-details">
        <img
          src={song.trackMetadata?.displayImageUri}
          className="h-12 w-12 rounded-[6px]"
        />
        <div className="title-artist">
          <div className="text-xl text-white">
            {song.trackMetadata?.trackName}
          </div>
          <div className="text-sm text-[#B3B3B3]">
            {song.trackMetadata?.artists[0].name}
          </div>
        </div>
      </span>
      {/* <span>{song.album}</span>
              <span>{song.duration}</span> */}
    </li>
  );
};
export default SongElement;
