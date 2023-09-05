import React from "react";
import Text from "./Text";
import Img from "./Img";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

export default function Slider() {
  const params = useParams();
  const navigate = useNavigate();
  const { activeSong, isPlaying, ListPlaylist, darkmode } = useSelector(
    (state) => state.player
  );

  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  React.useEffect(() => {
    setIsDarkMode(darkmode);
  }, [ListPlaylist, darkmode]);
  return (
    <div className="relative w-1/5 h-screen">
      <div className="absolute dark:opacity-[14%] h-screen w-full dark:bg-back_slide_bar bg-[#FAFAFA] bg-opacity-[90%] "></div>
      <div className="absolute h-screen w-full ">
        <aside className="w-full flex h-screen  dark:border-black border-white border-r-[1.5px] border-solid  justify-start top-[0] overflow-x-scroll no-scrollbar">
          <div className="h-full w-full flex flex-col gap-[30px] items-start justify-start p-[18px]">
            <div className="flex flex-row justify-between gap-3.5 ml-4 md:ml-[0] mt-4 w-[100%] md:w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start mt-1">
                <Text className="dark:text-white_text text-black font-poppins font-bold text-3xl tracking-[0.18px] ">
                  Melsymph
                </Text>
                <Text className="dark:text-[#FFFFFF] text-black  font-poppins font-bold text-opacity-[80%] text-sm tracking-[0.14px] opacity-[64%]">
                  All Music
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-start w-full">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-black sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {isDarkMode ? (
                      <Img
                        className="h-5 w-5 ml-2"
                        src="/images/icon_mic.svg"
                        alt="icon"
                      />
                    ) : (
                      <Img
                        className="h-5 w-5 ml-2"
                        src="/images/icon_mic_white.svg"
                        alt="icon"
                      />
                    )}
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="  text-black placeholder-[#282828] dark:placeholder-[#d9d9d9] bg-[#000000] bg-opacity-[0%] pl-7 ml-4 border-2 py-1 border-[#382C2C] rounded-[11.85px] w-4/5 dark:bg-[#000000] dark:text-[#FFFFFF] font-poppins font-extrabold"
                    placeholder="Search"
                    required
                  ></input>
                </div>
              </form>
              <div className="flex flex-col gap-4 justify-start w-full">
                <Text className="  ml-4 md:ml-[0] font-poppins font-bold dark:text-white_text text-lg tracking-[0.12px]">
                  My music
                </Text>
                <div className="flex flex-col font-outfit gap-2 items-center justify-start w-full">
                  <div
                    className="ml-5 common-pointer flex flex-col font-poppins font-bold items-start justify-start w-full"
                    onClick={() => navigate("/")}
                  >
                    <div className="dark:bg-color_choice_dark bg-[#000000] bg-opacity-[25%] rounded-[20px] w-4/5  flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-5 w-5 ml-2"
                        src="/images/icon_play_now.svg"
                        alt="icon"
                      />

                      <Text className="dark:text-white_text text-blak text-lg tracking-[0.15px]">
                        Play now
                      </Text>
                    </div>
                  </div>
                  <div
                    className="ml-5 common-pointer flex flex-col font-poppins font-bold items-start justify-start w-full"
                    onClick={() => navigate("/message")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="/images/icon_explore.svg"
                        alt="icon"
                      />
                      <Text className="dark:text-white_text text-lg tracking-[0.15px]">
                        Explore
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start w-full">
                <Text
                  className="ml-4 md:ml-[0] font-poppins font-extrabold dark:text-white_text text-black text-lg tracking-[0.12px]"
                  size="txtUrbanistMedium12"
                >
                  Library
                </Text>
                <div className="flex flex-col font-outfit gap-2 items-center justify-start w-full">
                  <div
                    className="ml-5 common-pointer flex flex-col font-poppins font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/message")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="/images/icon_artist.svg"
                        alt="icon"
                      />
                      <Text className="dark:text-white_text text-black text-lg tracking-[0.15px]">
                        Artist
                      </Text>
                    </div>
                  </div>

                  <div
                    className="ml-5 common-pointer flex flex-col font-poppins font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/message")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="/images/icon_album.svg"
                        alt="icon"
                      />
                      <Text className="dark:text-white_text text-black text-lg tracking-[0.15px]">
                        Albums
                      </Text>
                    </div>
                  </div>
                  <div
                    className="ml-5 common-pointer flex flex-col font-poppins font-extrabold items-start justify-start w-full"
                    onClick={() => navigate("/songs")}
                  >
                    <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                      <Img
                        className="h-8 w-8"
                        src="/images/icon_song.svg"
                        alt="icon"
                      />
                      <Text className="dark:text-white_text text-black text-lg tracking-[0.15px]">
                        Songs
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start w-full gap-6">
                <div className="dark:bg-color_choice_dark bg-[#000000] bg-opacity-[25%] rounded-[20px] w-4/5 p-1">
                  <Text
                    className="ml-6 md:ml-[0] dark:text-white_text text-black text-2xl tracking-[0.12px]"
                    size="txtUrbanistMedium18"
                  >
                    Playlist
                  </Text>
                </div>
                <div>
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div
                      className="ml-5 common-pointer flex flex-col font-poppins font-extrabold items-start justify-start w-full"
                      onClick={() => navigate("/playlist")}
                    >
                      <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                        {isDarkMode ? (
                          <Img
                            className="h-8 w-8"
                            src="/images/icon_playlist.svg"
                            alt="user One"
                          />
                        ) : (
                          <Img
                            className="h-8 w-8"
                            src="/images/icon_playlist_white.svg"
                            alt="user One"
                          />
                        )}
                        <Text className="dark:text-white_text text-black text-lg tracking-[0.18px]">
                          All Playlist
                        </Text>
                      </div>
                    </div>
                    {ListPlaylist.map((playlist, i) => (
                      <div
                        key={playlist.id}
                        className=" ml-5 common-pointer flex flex-row font-poppins font-extrabold items-start justify-start w-full"
                        onClick={() => navigate(`/playlist/${i}`)}
                      >
                        <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                          <Img
                            className="h-[50px] w-auto rounded-lg"
                            src={playlist.image}
                            alt="user One"
                          />
                          <Text
                            className="dark:text-white_text text-black text-lg tracking-[0.18px] truncate"
                            size="txtUrbanistMedium18"
                          >
                            {playlist.title}
                          </Text>
                        </div>
                      </div>
                    ))}

                    <div
                      className="ml-5 common-pointer flex flex-col font-poppins font-extrabold items-start justify-start w-full"
                      onClick={() =>
                        navigate(`/playlist/${ListPlaylist.length}`)
                      }
                    >
                      <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                        {isDarkMode ? (
                          <Img
                            className="h-8 w-8 rounded-lg"
                            src="/images/Add.svg"
                            alt="user One"
                          />
                        ) : (
                          <Img
                            className="h-8 w-8 rounded-lg"
                            src="/images/Add_white.svg"
                            alt="user One"
                          />
                        )}
                        <Text
                          className="dark:text-white_text text-lg tracking-[0.18px]"
                          size="txtUrbanistMedium18"
                        >
                          Add Playlist
                        </Text>
                      </div>
                    </div>
                    <hr className="h-[1px] w-full border-t-0 bg-[#575656] opacity-100 " />
                    <div
                      className="ml-5 common-pointer flex flex-col font-poppins font-extrabold items-start justify-start w-full"
                      onClick={() => navigate(`/artistcreate`)}
                    >
                      <div className="w-4/5 flex flex-row items-center justify-start p-1.5 gap-[18px] md:ml-[0] md:w-full">
                        <Img
                          className="h-8 w-8 rounded-lg"
                          src="/images/artisttool.svg"
                          alt="user One"
                        />
                        <Text className="dark:text-white_text text-black text-lg tracking-[0.18px]">
                          Artist Create
                        </Text>
                      </div>
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
