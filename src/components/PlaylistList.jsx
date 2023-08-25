import React, { useState } from 'react';

const PlaylistList = ({ albums }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleSongClick = (album) => {
    setSelectedAlbum(album);
    console.log(album);
  };
  
  return (
    <div className="bg-zinc-800 rounded-3xl text-white">
      <div className="h-[calc(100vh-25vh)] overflow-auto rounded-xl mt-10 relative"> 
        <div className="absolute left-5 text-white text-5xl">Playlist lists</div>
        <ul className="song-list-items mt-16 px-8 overflow-auto">
          {albums.map((album, index) => (
            <li key={album.id} onClick={() => handleSongClick(album)} className="justify-between px-8 py-4 items-center gap-2.5 grid grid-cols-2 hover:bg-zinc-700 rounded-3xl cursor-pointer ">
              <span className="flex items-center gap-2.5">
                <img src={`${album.ava}`} alt="Avatar" className="w-20 h-20 rounded-xl" />
                <div className="flex flex-col">
                  <div className="text-white text-3xl">{album.title}</div>
                </div>
              </span>
              <span className="flex justify-end items-end text-white text-3xl">
                <div>{album.duration}</div>
                 <div className={`text-red-500 text-5xl ml-2 ${selectedAlbum === album ? 'opacity-100' : 'opacity-0'}`}>✓</div>
              </span>
            </li>
          ))}
        </ul>
      </div>  
    </div>
  );
};

export default PlaylistList;
