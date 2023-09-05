import React from "react";

const SongsQueue = ({ songs }) => {
  const handleSongClick = (song) => {
    // setSelectedSong(song);
    console.log(song);
  };

  return (
    <div className="ml-4 rounded-3xl text-white h-[90%]">
      <div className="flex flex-col  mt-2 h-full w-full">
        <div className=" text-white font-poppins font-semibold text-3xl w-full">
          Queue
        </div>
        <ul className=" mt-2 flex flex-col h-full w-full ">
          {songs.map((song, index) => (
            <li
              key={song.id}
              onClick={() => handleSongClick(song)}
              className="flex flex-row items-center  hover:bg-zinc-700 rounded-3xl cursor-pointer h-[12%] px-2 w-[90%] gap-2 justify-between "
            >
              <span className="flex items-center gap-2.5 h-full">
                <img
                  src={`${song.ava}`}
                  alt="Avatar"
                  className=" h-[70%] w-auto rounded-md"
                />
                <div className="flex flex-col">
                  <div className="text-white text-[100%] font-poppins font-semibold">
                    {song.title}
                  </div>
                  <div className="text-zinc-400 text-[90%] font-poppins font-semibold">
                    {song.artist}
                  </div>
                </div>
              </span>

              <div className="text-white text-full font-poppins font-semibold">
                {song.duration}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SongsQueue;
