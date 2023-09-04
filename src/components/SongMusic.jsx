import React from "react";

import Text from "./Text";
import { useDispatch, useSelector } from "react-redux";

import { setActiveSong, playPause } from "../Redux/features/playerSlice";
import chartData from "../Redux/services/DataSong";
import Button from "./Button";
import DropDown from "./DropDown";
import ModalDelete from "./ModalDelete";
export default function SongMusic() {
  const dispatch = useDispatch();
  const [isInputVisible, setInputVisible] = React.useState(false);
  const searchInputRef = React.useRef(null);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Focus on the input when it becomes visible
    }
  };
  const [data, setData] = React.useState(chartData);
  const [stateDelete, setStateDelete] = React.useState(false);
  const [songToDelete, setSongToDelete] = React.useState(null); // State to store the song to delete

  const HandleFalse = () => {
    setStateDelete(false);
  };

  const handleDelete = () => {
    setData(() =>
      data.filter(
        (song) =>
          song.trackMetadata?.trackName !== songToDelete.trackMetadata.trackName
      )
    );
    setStateDelete(false);
  };
  const SortData = (data) => {
    setData(data);
  };

  const Click = () => {
    chartData.map((data) => data.audio !== "");
    console.log(chartData);
  };

  return (
    <div className="h-full w-full">
      <div className="mt-1 ml-[9%] mr-[9%] flex flex-row justify-between">
        <Text className="text-3xl text-white">Songs</Text>
        <div className="flex flex-row gap-3 items-center">
          <div className="flex flex-row items-center relative ">
            <Button
              onClick={toggleInput}
              className={`absolute h-6 w-6 ${
                isInputVisible ? "left-5" : "right-0"
              }  `}
            >
              <img src="./images/find.svg"></img>
            </Button>
            {isInputVisible && (
              <input
                onChange={(e) => {
                  console.log(e.target.value === "");
                  if (e.target.value == "") {
                    setData(chartData);
                  } else {
                    setData(() =>
                      chartData.filter(
                        (song) =>
                          song.trackMetadata?.trackName.includes(
                            e.target.value
                          ) ||
                          song.trackMetadata?.artists[0].name.includes(
                            e.target.value
                          )
                      )
                    );
                  }
                }}
                ref={searchInputRef}
                type="text"
                id="search-input"
                placeholder="Filter"
                required
                className="pl-7 ml-4 border-2 py-1 border-[#bf6868] rounded-[11.85px] w-4/5 bg-[#535050] text-[#FFFFFF] "
              />
            )}
          </div>

          <DropDown SortData={SortData} chartData={data}></DropDown>
        </div>
      </div>
      <div className=" mt-[2%] ml-[5%] mr-[5%] flex flex-row items-center gap-9 justify-between bg-white rounded-md p-2 px-4 bg-opacity-[10%] text-white">
        <Text className="text-xl">Title</Text>
        <Text className="text-xl">Artist</Text>
        <Text className="text-xl mr-[10%]">Duration</Text>
      </div>
      <div className=" ml-[5%] mr-[5%] flex flex-col h-[80%] gap-5 mt-6 overflow-y-auto no-scrollbar  ">
        {data.map((song, i) => (
          <div
            className=" cursor-pointer hover:bg-[#5e5e5e] rounded-[6px] relative "
            key={i}
          >
            <div
              className="gap-3 flex flex-row relative "
              onClick={() => {
                dispatch(playPause(false));
                setTimeout(() => {
                  dispatch(setActiveSong({ song, data, i: i }));
                  dispatch(playPause(true));
                }, 100);
              }}
            >
              <img
                src={song.trackMetadata.displayImageUri}
                className="h-12 w-12 rounded-[6px]"
              />

              <div className="text-xl text-white flex items-center truncate w-[30%]">
                {song.trackMetadata?.trackName}
              </div>
              <div className="text-sm text-[#B3B3B3] items-center absolute left-[42%] right-0">
                {song.trackMetadata?.artists[0].name}
              </div>
            </div>
            <Button
              className="absolute right-1 top-0 bottom-0"
              onClick={() => {
                Click();
                setStateDelete(true);
                setSongToDelete(song);
              }}
            >
              <img src="./images/trash.svg" className="h-5 w-5"></img>
            </Button>
          </div>
        ))}
      </div>
      {stateDelete && (
        <ModalDelete
          HandleFalse={HandleFalse}
          messages={`Are you sure you want to delete this ${songToDelete.trackMetadata?.trackName} from the
               Library `}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
