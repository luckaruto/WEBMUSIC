import React from 'react';

const SongsQueue = ({ songs }) => {
  const handleSongClick = (song) => {
    // setSelectedSong(song);
    console.log(song);
  };
  
  return (
    <div className="bg-zinc-800 rounded-3xl text-white">
      <div className="h-[calc(100vh-25vh)] overflow-auto rounded-xl mt-10 relative"> 
        <div className="absolute left-5 text-white text-5xl">Queue</div>
        <ul className="song-list-items mt-16 px-8 overflow-auto">
          {songs.map((song, index) => (
            <li key={song.id} onClick={() => handleSongClick(song)} className="justify-between px-8 py-4 items-center gap-2.5 grid grid-cols-2 hover:bg-zinc-700 rounded-3xl cursor-pointer ">
              <span className="flex items-center gap-2.5">
                <img src={`${song.ava}`} alt="Avatar" className="w-20 h-20 rounded-xl" />
                <div className="flex flex-col">
                  <div className="text-white text-3xl">{song.title}</div>
                  <div className="text-zinc-400 text-2xl">{song.artist}</div>
                </div>
              </span>
              <span className="flex flex-col items-end">
                <div className="text-white text-3xl">{song.duration}</div>
                <div className="text-zinc-400 text-2xl">{song.release}</div>
              </span>
            </li>
          ))}
        </ul>
      </div>  
    </div>
  );
};

export default SongsQueue;
