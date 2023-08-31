import React, { useState } from "react";
import SongsQueue from "./SongsQueue";
import PlaylistList from "./PlaylistList";

const songs = [
  {
    id: 1,
    ava: "https://i.pinimg.com/564x/ad/39/29/ad3929ab29d14dfc184c8366e4ad8755.jpg",
    title: "Song 1",
    artist: "Artist 1",
    duration: "3:30",
    release: "2022-01-01",
  },
  {
    id: 2,
    ava: "https://westernnews.media.clients.ellingtoncms.com/img/photos/2020/12/29/OneRepublic_t715.jpg?529764a1de2bdd0f74a9fb4f856b01a9d617b3e9",
    title: "Song 2",
    artist: "Artist 2",
    duration: "4:15",
    release: "2022-02-15",
  },
];

const albums = [
  {
    id: 1,
    title: "Album 1",
    ava: "https://i.pinimg.com/564x/41/f8/a3/41f8a3864ad046a66a20616d62e2d870.jpg",
    duration: "30 mins",
  },
  {
    id: 2,
    title: "Album 2",
    ava: "https://i.pinimg.com/564x/f1/e0/0f/f1e00ff209310c011254c133ab5c3feb.jpg",
    duration: "45 mins",
  },
];

const Toolsbar = () => {
  const [activeTab, setActiveTab] = useState("Play Queue"); // default active tab

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" absolute right-0 flex flex-col bg-zinc-800 w-[20%] h-full opacity-80 rounded-l-3xl text-white items-center">
      <div className=" mt-3 flex flex-row items-center gap-2 bg-zinc-700  rounded-[34.56px] h-[9%] w-[80%] justify-center">
        <button
          className={`w-[40%] h-[70%] px-1 focus:outline-none rounded-[20px] text-[100%]  ${
            activeTab === "Play Queue"
              ? "text-white bg-zinc-500 font-bold"
              : "text-zinc-400 bg-zinc-700"
          }`}
          onClick={() => handleTabSwitch("Play Queue")}
        >
          Play Queue
        </button>
        <button
          className={`w-[40%] focus:outline-none text-center rounded-full text-[100%] px-1  ${
            activeTab === "Playlist"
              ? "text-white bg-zinc-500 font-bold"
              : "text-zinc-400 bg-zinc-700"
          }`}
          onClick={() => handleTabSwitch("Playlist")}
        >
          Playlist
        </button>
      </div>
      <div className="h-[90%] w-full">
        {activeTab === "Play Queue" ? (
          <SongsQueue songs={songs} />
        ) : (
          <PlaylistList albums={albums} />
        )}
      </div>
    </div>
  );
};

export default Toolsbar;
