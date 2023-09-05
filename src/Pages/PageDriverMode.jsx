import Slider from "../components/Slider";
import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";
import {
  playPause,
  nextSong,
  setCurrentSong,
} from "../Redux/features/playerSlice";
import { useSelector, useDispatch } from "react-redux";
import Img from "../components/Img";
import Button from "../components/Button";
import Login from "../components/ModelLogin";

import SignIn from "../components/ModelSignIn";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";
import { setActiveSong } from "../Redux/features/playerSlice";

let audio = null;
const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return "00:00";
};

export default function PageDriverMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [stateLogin, setStateLogin] = useState(false);
  const navigate = useNavigate();
  const HandleFalse = () => {
    setStateLogin(false);
  };
  const [stateSignIn, setStateSignIn] = useState(false);

  const HandleFalseSignIn = () => {
    setStateSignIn(false);
  };
  const [stateDriveMode, setStateDriveMode] = useState(true);

  const dispatch = useDispatch();
  const { activeSong, isPlaying, currentIndex, currentSongs, isActive } =
    useSelector((state) => state.player);

  const [dataSongs, setDataSongs] = React.useState(currentSongs);

  const [state, setState] = React.useState({
    isRandom: false,
    isRepeat: false,
    isPlay: isPlaying,
    playList: [],
  });

  const initData = () => {
    setState({
      ...data,
      isPlay: isPlaying,
    });
  };
  const data = useSelector((states) => {
    return states.playReducer;
  });

  const initAudioPlayer = () => {
    audio = document.getElementById("jp_audio_0");
  };
  const handleMetadata = () => {
    const duration = Math.floor(audio.duration);
    setCurrentTrackDuration(formatTime(duration));
  };

  const [progressBarWidth, setProgressBarWidth] = React.useState(0);
  const [song, setsong] = React.useState();
  const [currentTrackDuration, setCurrentTrackDuration] = React.useState(0);
  const [currentTrackMoment, setCurrentTrackMoment] = React.useState(0);
  const [timeDrag, setTimeDrag] = React.useState(false);

  const [volume, setVolume] = React.useState(0.5); // Default volume level
  const [slash, setSlash] = React.useState(false);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const updatebar = (x) => {
    var progress = document.getElementById("jp-progress");
    var position = x - progress.getBoundingClientRect().left;
    var percentage = (100 * position) / progress.offsetWidth;

    if (percentage > 100) {
      percentage = 100;
    }
    if (percentage < 0) {
      percentage = 0;
    }
    let currentTimeAudio = parseInt((audio.duration * percentage) / 100);
    audio.currentTime = currentTimeAudio;
    audio.currentTime = currentTimeAudio;
    document.getElementById("jp-play-bar").style.width = percentage + "%";
  };

  const handleOnMouseDown = (e) => {
    setTimeDrag(true);
    updatebar(e.pageX);
  };
  const myref = React.useRef([]);
  const handleOnMouseUp = (e) => {
    if (timeDrag) {
      setTimeDrag(false);
      updatebar(e.pageX);
    }
  };
  //   const handleOnMouseMove = (e) => {
  //     if (timeDrag) {
  //       updatebar(e.pageX);
  //     }
  //   };

  const handleNextSong = () => {
    let index = currentIndex;
    index++;
    if (isPlaying) {
      audio.pause();
      setTimeout(() => {
        audio.play();
      }, 500);
    }
    let arr = dataSongs;
    if (index == arr.length) {
      index = arr.length - 1;
    }

    dispatch(nextSong(index));
  };
  const handlePrevSong = () => {
    let index = currentIndex;
    index--;
    if (isPlaying) {
      audio.pause();
      setTimeout(() => {
        audio.play();
      }, 500);
    }
    let arr = dataSongs;
    if (index == 0) {
      index = 0;
    }

    dispatch(nextSong(index));
  };
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const [handleloop, sethandleloop] = React.useState(false);
  const handleRandom = () => {
    const data = shuffleArray([...dataSongs]);
    setDataSongs(data);
    // if (isPlaying) {
    //   audio.pause();
    //   setTimeout(() => {
    //     audio.play();
    //   }, 500);
    // }

    return;
  };

  React.useEffect(() => {
    initAudioPlayer();
  });
  React.useEffect(() => {
    setDataSongs(currentSongs);
  }, [currentSongs]);

  const handleTimeupdate = (e) => {
    setCurrentTrackMoment(Math.floor(e.target.currentTime));
    setProgressBarWidth(
      parseInt((e.target.currentTime / e.target.duration) * 100)
    );
  };

  const [lyric, setLyric] = React.useState(false);
  const [toolsbar, setToolsbar] = React.useState(false);

  React.useEffect(() => {
    initData();
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    audio.volume = volume;
  }, [isPlaying, volume, activeSong]);

  React.useEffect(() => {}, [state, stateSignIn]);

  return (
    <div className="bg-gradient-to-r from-[#373d3e] to-[#30343c] flex flex-row font-outfit items-start mx-auto w-full h-full">
      <div className="relative w-1/5 h-screen">
        <div className="absolute opacity-[14%] h-screen w-full bg-back_slide_bar "></div>
        <div className="absolute h-screen w-full ">
          <aside className="w-full flex h-screen  border-black border-r-[1.5px] border-solid  justify-start top-[0] overflow-x-scroll no-scrollbar">
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
                    src="/images/icon_setting.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Text className="mt-2 text-white text-xl">NextSong</Text>
                <div className="ml-3 flex flex-row gap-4">
                  <Button onClick={handleRandom}>
                    <Img
                      className="w-5 h-5"
                      src="/images/Icon_random.svg"
                    ></Img>
                  </Button>
                  <Button
                    onClick={() => {
                      sethandleloop(!handleloop);
                    }}
                  >
                    <Img
                      className={` w-5 h-5${handleloop ? "fill-blue-500" : ""}`}
                      src="/images/icon_loop.svg"
                    ></Img>
                  </Button>
                </div>
              </div>

              <div className=" flex flex-col h-[100%] w-[90%] overflow-y-scroll no-scrollbar ">
                {dataSongs.map((song, index) => (
                  <div
                    key={song.id}
                    ref={(element) => {
                      myref.current[index] = element;
                    }}
                    className="flex flex-row items-center  hover:bg-zinc-700 rounded-3xl cursor-pointer h-[12%] px-2 w-[90%] gap-2 justify-between "
                    onClick={() => {
                      dispatch(playPause(false));
                      myref.current[index].scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                      setTimeout(() => {
                        dispatch(
                          setActiveSong({ song, data: dataSongs, i: index })
                        );
                        dispatch(playPause(true));
                      }, 500);
                    }}
                  >
                    <span className="flex items-center gap-2.5 h-full">
                      <img
                        src={`${song.trackMetadata.displayImageUri}`}
                        alt="Avatar"
                        className=" h-[70%] w-auto rounded-md"
                      />
                      <div className="flex flex-col truncate">
                        <div className="text-white text-[100%]">
                          {song.trackMetadata?.trackName}
                        </div>
                        <div className="text-zinc-400 text-[90%] truncate">
                          {song.trackMetadata?.artists[0].name}
                        </div>
                      </div>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="relative h-screen w-full  ">
        <div className="absolute opacity-[14%] h-screen w-full bg-color_white_page "></div>
        <div className="absolute opacity-[14%] h-screen w-full bg-color_white_page "></div>
        <div className="absolute h-[90%] w-full top-[10%] overflow-y-auto ">
          <div className="relative  flex flex-row items-center justify-center h-[90%] w-full ">
            <div className="absolute top-6 h-[70%] w-full flex flex-col items-center gap-3">
              <div className="flex flex-col gap-3 justify-center items-center w-full">
                <form className="w-[70%]">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 inset-x-0 flex items-center pl-3 pointer-events-none">
                      <Img
                        className="h-5 w-5 ml-2"
                        src="/images/icon_mic.svg"
                        alt="icon"
                      />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="pl-7 ml-4 border-1 py-1 border-[#382C2C] rounded-[11.85px] w-full bg-[#000000] bg-opacity-[10%] text-[#FFFFFF] font-abhaya-libre font-extrabold"
                      placeholder="Search"
                      required
                    ></input>
                  </div>
                </form>
              </div>
              <div className="w-[60%] flex flex-col items-center gap-4">
                <Text className="mt-6 text-5xl text-white truncate  ">
                  {activeSong.trackMetadata?.trackName}
                </Text>
                <Text className="text-2xl text-white text-opacity-[64%] ">
                  {activeSong.trackMetadata?.artists[0].name}
                </Text>
              </div>
            </div>

            <div className="flex flex-row w-[80%] h-[80%] gap-7 justify-center items-center">
              <div className="flex flex-col h-full w-[80%] items-center justify-center">
                <div className="flex flex-row mt-3 w-full items-center justify-center">
                  <div className="relative  w-[90%] h-[100%] flex flex-col items-center ">
                    <div className="flex flex-row items-start justify-start gap-x-3 h-[35px]  truncate w-[100%]  ">
                      <div className="flex flex-col items-start justify-start w-full truncate">
                        <div className=" flex flex-row justify-between items-start w-full ">
                          <Text className="text-[#FFFFFF] text-xs tracking-[0.14px] opacity-[64%]">
                            {formatTime(currentTrackMoment)}
                          </Text>
                          <Text className="text-[#FFFFFF] text-xs tracking-[0.14px] opacity-[64%] mr-2">
                            {currentTrackDuration}
                          </Text>
                        </div>
                      </div>
                    </div>

                    <div
                      id="jp-progress"
                      className="absolute bottom-0 h-[14px]  bg-[#000000] rounded-[11.85px] bg-opacity-[14%] w-[100%]"
                      onMouseDown={handleOnMouseDown}
                    >
                      <div
                        id="jp-play-bar"
                        onMouseUp={handleOnMouseUp}
                        className={`bg-[#FFFFFF99] h-[14px]  rounded-[11.85px]`}
                        style={{ width: `${parseInt(progressBarWidth)}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 mx-4 mt-3 sm:flex-col relative w-full justify-center">
                  <div className="flex flex-row gap-5">
                    <Button
                      className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                      onClick={handlePrevSong}
                    >
                      <Img
                        className="h-[70px] w-[70px] rounded-lg items-center"
                        src="./images/icon_back.svg"
                        alt="user One"
                      ></Img>
                    </Button>
                    <Button
                      className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                      onClick={() => {
                        if (state.isPlay) {
                          audio.pause();
                          dispatch(playPause(false));
                          setState({ ...state, isPlay: false });
                        } else {
                          audio.play();
                          dispatch(playPause(true));
                          setState({ ...state, isPlay: true });
                        }
                      }}
                    >
                      {state.isPlay ? (
                        <Img
                          className="h-[60px] w-[60px] rounded-lg items-center"
                          src="./images/icon_play.svg"
                          alt="user One"
                        />
                      ) : (
                        <Img
                          className="h-[60px] w-[60px] rounded-lg items-center"
                          src="./images/icon_pause.svg"
                          alt="user One"
                        />
                      )}
                    </Button>
                    <Button
                      className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                      onClick={handleNextSong}
                    >
                      <Img
                        className="h-[70px] w-[70px] rounded-lg items-center"
                        src="./images/icon_next.svg"
                        alt="user One"
                      ></Img>
                    </Button>
                  </div>

                  <div className="flex flex-row gap-5 absolute right-2">
                    {!slash ? (
                      <Button
                        className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px]  "
                        onClick={() => {
                          setSlash(true);
                          audio.volume = 0;
                        }}
                      >
                        <Img
                          className="h-[70px] w-[70px] rounded-lg items-center"
                          src="./images/icon_speaker.svg"
                          alt="user One"
                        />
                      </Button>
                    ) : (
                      <Button
                        className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px]  "
                        onClick={() => {
                          setSlash(false);
                          audio.volume = volume;
                        }}
                      >
                        <Img
                          className="h-[70px] w-[70px] rounded-lg items-center"
                          src="./images/speakerslash.svg"
                          alt="user One"
                        />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {stateLogin == true && <Login HandleFalse={HandleFalse}></Login>}
          {stateSignIn == true && <SignIn HandleFalse={HandleFalseSignIn} />}
          <div className="absolute top-0 w-full">
            <div className=" flex flex-row gap-[30px] items-center justify-center p-[18px] bg-opacity-[100%]">
              <div className="ml-4 bg-color_bar rounded-[45px] w-[80%] flex flex-row items-center justify-between gap-4 mb-2 p-1 ">
                <div className="flex flex-row items-center gap-4 mr-4">
                  <div className="m-1 ml-2 pl-4 py-1">
                    <DayNightToggle
                      onChange={() => setIsDarkMode(!isDarkMode)}
                      checked={isDarkMode}
                    />
                  </div>
                  <div
                    className={`m-1 ml-2  rounded-[45.65px] px-6 py-1 ${
                      stateDriveMode
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                        : "bg-[#1E232E]"
                    }`}
                  >
                    <Button
                      className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                      onClick={() => {
                        if (stateDriveMode) {
                          navigate(-1);
                        } else {
                          navigate("/DriverMode");
                        }
                        setStateDriveMode(!stateDriveMode);
                      }}
                    >
                      <Img
                        className="h-7 w-7 rounded-lg items-center"
                        src="/images/icon_car.svg"
                        alt="user One"
                      ></Img>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 mr-4">
                  <div className="m-1 ml-2 bg-[#1E232E] rounded-[45.65px] px-4 py-1">
                    <Button
                      className="text-white text-lg font-abhaya-libre font-extrabold  tracking-[0.18px] "
                      onClick={() => {
                        setStateLogin(true);
                      }}
                    >
                      Login
                    </Button>
                  </div>
                  <Button
                    className="text-white text-lg font-abhaya-libre font-extrabold  tracking-[0.18px] "
                    onClick={() => {
                      setStateSignIn(true);
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <audio
          src={activeSong?.audio}
          controls={false}
          id="jp_audio_0"
          onTimeUpdate={(e) => {
            handleTimeupdate(e);
          }}
          onEnded={() => {
            if (handleloop) {
              let index = currentIndex;
              if (isPlaying) {
                audio.pause();
                setTimeout(() => {
                  audio.play();
                }, 500);
              }
              let arr = dataSongs;
              if (index == arr.length) {
                index = arr.length - 1;
              }

              dispatch(nextSong(index));
            } else {
              handleNextSong();
            }
          }}
          onLoadedMetadata={handleMetadata}
        />
      </div>
    </div>
  );
}
