import React, { useEffect } from "react";
import Text from "./Text";
import Img from "./Img";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const navigate = useNavigate();
  const [searchKeyword, setsearchKeyword] = React.useState("");

  useEffect(() => {
    localStorage.setItem("searchKeyword", searchKeyword);
    console.log(searchKeyword);
  }, [searchKeyword]);

  return (
    <div className="relative w-1/5 h-screen">
      <div className="absolute opacity-[14%] h-screen w-full bg-back_slide_bar "></div>
      <div className="absolute h-screen w-full">
        <aside className="w-full flex h-screen  border-black border-r-[1.5px] border-solid  justify-start overflow-auto top-[0]">
          <div className="h-full w-full flex flex-col gap-[30px] items-start justify-start p-[18px]">
            <div className="flex flex-row justify-between gap-3.5 ml-4 md:ml-[0] mt-4 w-[100%] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start mt-1">
                <Text className="text-white_text font-abhaya-libre font-extrabold text-3xl tracking-[0.18px] ">
                  Melsymph
                </Text>
                <Text className="text-[#FFFFFF] text-sm tracking-[0.14px] opacity-[64%]">
                  All Music
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 mt-1 mr-4">
                <Img
                  className="h-9 w-9"
                  src="./images/icon_setting.svg"
                  alt="icon"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-start w-full">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Img
                      className="h-5 w-5 ml-2"
                      src="./images/icon_mic.svg"
                      alt="icon"
                    />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="pl-7 ml-4 border-2 py-1 border-[#382C2C] rounded-[11.85px] w-4/5 bg-[#000000] text-[#FFFFFF] font-abhaya-libre font-extrabold"
                    placeholder="Search"
                    required
                    onClick={() => navigate("/search")}
                    onChange={(e) => {setsearchKeyword(e.target.value)}}
                  ></input>
                </div>
              </form>
              <div className="flex flex-col gap-4 justify-start w-full">
                <Text className="ml-4 md:ml-[0] font-abhaya-libre font-extrabold text-white_text text-lg tracking-[0.12px]">
                  My music
                </Text>
                <div className="flex flex-col font-outfit gap-2 items-center justify-start w-full">
                  <div
                    className="ml-5 common-pointer flex flex-col font-abhaya-libre font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/")}
                  >
                    <div className="bg-color_choice_dark rounded-[20px] w-4/5  flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-5 w-5 ml-2"
                        src="./images/icon_play_now.svg"
                        alt="icon"
                      />

                      <Text
                        className="text-white_text text-lg tracking-[0.15px]"
                        size="txtOutfitMedium18"
                      >
                        Play now
                      </Text>
                    </div>
                  </div>
                  <div
                    className="ml-5 common-pointer flex flex-col font-abhaya-libre font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/message")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="./images/icon_explore.svg"
                        alt="icon"
                      />
                      <Text
                        className="text-white_text text-lg tracking-[0.15px]"
                        size="txtUrbanistMedium18"
                      >
                        Explore
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start w-full">
                <Text
                  className="ml-4 md:ml-[0] font-abhaya-libre font-extrabold text-white_text text-lg tracking-[0.12px]"
                  size="txtUrbanistMedium12"
                >
                  Library
                </Text>
                <div className="flex flex-col font-outfit gap-2 items-center justify-start w-full">
                  <div
                    className="ml-5 common-pointer flex flex-col font-abhaya-libre font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/message")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="./images/icon_artist.svg"
                        alt="icon"
                      />
                      <Text
                        className="text-white_text text-lg tracking-[0.15px]"
                        size="txtUrbanistMedium18"
                      >
                        Artist
                      </Text>
                    </div>
                  </div>

                  <div
                    className="ml-5 common-pointer flex flex-col font-abhaya-libre font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/message")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="./images/icon_album.svg"
                        alt="icon"
                      />
                      <Text
                        className="text-white_text text-lg tracking-[0.15px]"
                        size="txtUrbanistMedium18"
                      >
                        Albums
                      </Text>
                    </div>
                  </div>
                  <div
                    className="ml-5 common-pointer flex flex-col font-abhaya-libre font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/message")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="./images/icon_song.svg"
                        alt="icon"
                      />
                      <Text
                        className="text-white_text text-lg tracking-[0.15px]"
                        size="txtUrbanistMedium18"
                      >
                        Songs
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start w-full">
                <div className="bg-color_choice_dark rounded-[20px] w-4/5 p-1">
                  <Text
                    className="ml-6 md:ml-[0] text-white_text text-2xl tracking-[0.12px]"
                    size="txtUrbanistMedium18"
                  >
                    Playlist
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div
                    className="ml-5 common-pointer flex flex-col font-abhaya-libre font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/myprofilecollection")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="./images/icon_playlist.svg"
                        alt="user One"
                      />
                      <Text
                        className="text-white_text text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        All Playlist
                      </Text>
                    </div>
                  </div>
                  <div
                    className="ml-5 common-pointer flex flex-col font-abhaya-libre font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/playlist")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8 rounded-lg"
                        src="./images/1.png"
                        alt="user One"
                      />
                      <Text
                        className="text-white_text text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Good Vibes Only
                      </Text>
                    </div>
                  </div>
                  <div
                    className="ml-5 common-pointer flex flex-col font-abhaya-libre font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/playlist")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8 rounded-lg"
                        src="./images/1.png"
                        alt="user One"
                      />
                      <Text
                        className="text-white_text text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Good Vibes Only
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
