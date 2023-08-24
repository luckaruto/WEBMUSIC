import React, { useState, useEffect } from "react";

import { ImageGenerator } from "./PlaylistHeader";
import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../Redux/features/playerSlice";

import { useGetTopChartsQuery } from "../Redux/services/spotify";
import { useGetDownLoadMusicTempQuery } from "../Redux/services/downloadedsportifytemp";

import SongElement from "./SongElement";
// Component SongList
const SongList = ({ data }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  // const selectedPlaylist = playlistData.find(
  //   (playlist) => playlist.id === playlistId
  // );

  // const [selectedSong, setSelectedSong] = useState('');
  // const [avatarData, setAvatarData] = useState({});

  // const handleSongClick = (song) => {
  //   // setSelectedSong(song);
  //   console.log(song);
  // };

  // useEffect(() => {
  //   const fetchAvatars = async () => {
  //     const avatars = {};
  //     for (const song of songs) {
  //       try {
  //         const imageData = await getImage(song.avatar); // Fetch the avatar image
  //         avatars[song.id] = imageData; // Store the image data in the state
  //         // console.log('Current temp avatar data:', avatars);
  //       } catch (error) {
  //         console.error("Error fetching avatar:", error);
  //       }
  //     }
  //     setAvatarData(avatars);
  //   };

  //   fetchAvatars();
  // }, [songs]);

  // console.log('Current avatar data:', avatarData);

  return (
    <div className=" bg-[#ffffff] rounded-[10px] bg-opacity-[0%] h-[100%] w-full">
      <div className="flex flex-row w-full  h-[10%] bg-[#ffffff] justify-between items-center bg-opacity-[20%] text-white px-6">
        <span># Title</span>

        <span>Album</span>
        <span>Duration</span>
      </div>
      <div className="song-list-items-container overflow-auto h-[80%] mt-3 w-full">
        <ul className="song-list-items flex flex-col justify-center gap-6">
          {data?.slice(0, 5).map((song, index) => (
            <SongElement song={song} index={index} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SongList;
