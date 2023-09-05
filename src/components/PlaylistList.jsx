import React, { useState } from "react";

const PlaylistList = ({ albums }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleSongClick = (album) => {
    setSelectedAlbum(album);
    console.log(album);
  };

  return (
    <div className="ml-4 rounded-3xl text-white h-[90%] font-poppins font-semibold">
      <div className=" flex flex-col  mt-2 h-full w-full">
        <div className=" text-white text-3xl w-full">Playlist lists</div>

        <ul className=" mt-2 flex flex-col h-full w-full ">
          {albums.map((album, index) => (
            <li
              key={album.id}
              onClick={() => handleSongClick(album)}
              className="flex flex-row items-center  hover:bg-zinc-700 rounded-3xl cursor-pointer h-[12%] px-2 w-[90%] gap-2 justify-between "
            >
              <div className="flex items-center gap-2.5 h-full">
                <img
                  src={`${album.ava}`}
                  alt="Avatar"
                  className=" h-[70%] w-auto rounded-md"
                />
                <div className="flex flex-col">
                  <div className="text-white text-[100%]">{album.title}</div>
                </div>
              </div>
              <div className="flex flex-row text-white text-full items-center">
                <div>{album.duration}</div>
                <div
                  className={`text-red-500 text-xl ml-2 ${
                    selectedAlbum === album ? "opacity-100" : "opacity-0"
                  }`}
                >
                  ✓
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlaylistList;
