import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../Redux/features/playerSlice';

import { useGetTopChartsQuery } from '../Redux/services/spotify';
import { useState } from 'react';

export default function Home({ song, isPlaying, activeSong, i }) {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const { data } = useGetTopChartsQuery();
  const topArtists = data?.slice(0, 200);
  const [dataMusic, setDataMusic] = useState(song);

  return (
    <div>
      <div className="w-full flex justify-between items-start sm:flex-row flex-col mt-1 mb-10">
        <h2 className="font-bold text-3xl text-white ml-5">Library</h2>
      </div>
      <div>
        <div className="grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all">
          <div className="flex  w-[300px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded ml-1">
              <img
                className="w-[5rem] h-[5rem]"
                src="https://community.spotify.com/t5/image/serverpage/image-id/104727iC92B541DB372FBC7/image-dimensions/2500?v=v2&px=-1"
              />
              <h4 className="text-[16px] font-bold ">Songs You Liked</h4>
            </div>
          </div>

          <div className="flex items-center   gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <div className="flex  w-[300px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer  ">
              {topArtists?.slice(150, 151).map((artist) => (
                <img
                  className="w-[5rem] h-[5rem] "
                  src={artist.trackMetadata?.displayImageUri}
                  alt="Name"
                />
              ))}
              {topArtists?.slice(150, 151).map((artist) => (
                <h4 className="text-[16px] font-bold pl-4 pt-7">
                  {artist.trackMetadata?.artists[0].name}
                </h4>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <div className="flex  w-[300px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
              {topArtists?.slice(151, 152).map((artist) => (
                <img
                  className="w-[5rem] h-[5rem]"
                  src={artist.trackMetadata?.displayImageUri}
                  alt="Name"
                />
              ))}
              {topArtists?.slice(151, 152).map((artist) => (
                <h4 className="text-[16px] font-bold pl-4 pt-7">
                  {artist.trackMetadata?.artists[0].name}
                </h4>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded ">
            <div className="flex  w-[300px] p-4  bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
              {topArtists?.slice(152, 153).map((artist) => (
                <img
                  className="w-[5rem] h-[5rem]"
                  src={artist.trackMetadata?.displayImageUri}
                  alt="Name"
                />
              ))}
              {topArtists?.slice(152, 153).map((artist) => (
                <h4 className="text-[16px] font-bold pl-4 pt-7">
                  {artist.trackMetadata?.artists[0].name}
                </h4>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <div className="flex  w-[300px] p-4  bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
              {topArtists?.slice(153, 154).map((artist) => (
                <img
                  className="w-[5rem] h-[5rem]"
                  src={artist.trackMetadata?.displayImageUri}
                  alt="Name"
                />
              ))}
              {topArtists?.slice(153, 154).map((artist) => (
                <h4 className="text-[16px] font-bold pl-4 pt-7">
                  {artist.trackMetadata?.artists[0].name}
                </h4>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded ">
            <div className="flex  w-[300px] p-4  bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
              {topArtists?.slice(154, 155).map((artist) => (
                <img
                  className="w-[5rem] h-[5rem]"
                  src={artist.trackMetadata?.displayImageUri}
                  alt="Name"
                />
              ))}
              {topArtists?.slice(154, 155).map((artist) => (
                <h4 className="text-[16px] font-bold pl-4 pt-7">
                  {artist.trackMetadata?.artists[0].name}
                </h4>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-white font-bold text-2xl ml-5">Albums</h2>
        <Link to="/top-artists">
          <p className="text-gray-300 text-base cursor-pointer mr-4">
            See more
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-x-6 mx-4  ">
        {topArtists?.slice(6, 11).map((artist) => (
          <div className=" w-[230px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ">
            <div className=" inset-0 justify-start items-end  bg-opacity-50 group-hover:flex ">
              <img src={artist.trackMetadata?.displayImageUri} alt="Name" />
            </div>

            <p className="grid grid-cols-5 gap-x-6 mb-8 mx-4 text-lg text-white truncate justify-between ">
              {artist.trackMetadata?.trackName}

              <br />
              {artist.trackMetadata?.artists[0].name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-end mb-4 mt-6">
        <h2 className="text-white font-bold text-2xl ml-5">Songs</h2>
        <Link to="/top-artists">
          <p className="text-gray-300 text-base cursor-pointer mr-4">
            See more
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-x-6 mb-8 mx-4">
        {topArtists?.slice(130, 135).map((artist) => (
          <div className="w-[230px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <img src={artist.trackMetadata?.displayImageUri} alt="Name" />
            <p className="grid grid-cols-5 gap-x-6 mb-8 mx-4 text-lg text-white truncate justify-between">
              {artist.trackMetadata?.trackName}

              <br />
              {artist.trackMetadata?.artists[0].name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-end mb-4 mt-6">
        <h2 className="text-white font-bold text-2xl ml-5">Top Artists</h2>
        <Link to="/top-artists">
          <p className="text-gray-300 text-base cursor-pointer mr-4">
            See more
          </p>
        </Link>
      </div>

      <div className="relative w-full h-56 group">
        <div className="grid grid-cols-5 gap-x-6 mb-8 mx-4">
          {topArtists?.slice(190, 195).map((artist) => (
            <div className="w-[230px] bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
              <img src={artist.trackMetadata?.displayImageUri} alt="Name" />
              <p className="grid grid-cols-5 gap-x-6 mb-8 mx-4 text-lg text-white truncate justify-between">
                {artist.trackMetadata?.trackName}

                <br />
                {artist.trackMetadata?.artists[0].name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
