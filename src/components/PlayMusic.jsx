import React from "react";
import Img from "./Img";
import Button from "./Button";
import Text from "./Text";
import {
  playPause,
  setActiveSong,
  nextSong,
  prevSong,
} from "../Redux/features/playerSlice";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const PlayMusic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    activeSong,
    isPlaying,
    currentIndex,
    currentSongs,
    darkmode,
    isActive,
  } = useSelector((state) => state.player);
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
      }, 100);
    }
    let arr = currentSongs;
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
      }, 100);
    }
    let arr = currentSongs;
    if (index == 0) {
      index = 0;
    }

    dispatch(nextSong(index));
  };
  const handleRandom = () => {
    let length = currentSongs.length;
    let randomValue = Math.floor(Math.random() * length);
    while (currentIndex == randomValue) {
      randomValue = Math.floor(Math.random() * length);
    }
    if (isPlaying && currentIndex != randomValue) {
      audio.pause();
      setTimeout(() => {
        audio.play();
      }, 100);
      dispatch(nextSong(randomValue));
    }
    return;
  };

  React.useEffect(() => {
    initAudioPlayer();
  });

  const handleTimeupdate = (e) => {
    setCurrentTrackMoment(Math.floor(e.target.currentTime));
    setProgressBarWidth(
      parseInt((e.target.currentTime / e.target.duration) * 100)
    );
  };

  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  React.useEffect(() => {
    setIsDarkMode(darkmode);
  }, [darkmode]);

  React.useEffect(() => {
    initData();
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    audio.volume = volume;
  }, [isPlaying, volume]);

  return (
    <div className="absolute bottom-0 w-full h-[15%] ">
      <audio
        src={activeSong?.audio}
        controls={false}
        id="jp_audio_0"
        type="audio/mpeg"
        onTimeUpdate={(e) => {
          handleTimeupdate(e);
        }}
        onEnded={handleNextSong}
        onLoadedMetadata={handleMetadata}
      />

      <div className=" flex flex-row gap-[30px] items-center h-full justify-center p-[18px] ">
        <div className=" lg:h-[10%] md:h-[60%] ml-4 dark:bg-color_bar bg-[#F4F4F4] rounded-[45px] w-[80%] flex flex-row items-center justify-between gap-5 p-1 px-5 ">
          <div className="flex flex-row items-center gap-4 mx-4">
            <Button
              className="dark:text-white text-black text-lg flex font-poppins font-bold tracking-[0.18px] "
              onClick={handleRandom}
            >
              {isDarkMode ? (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_random.svg"
                  alt="user One"
                ></Img>
              ) : (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_random_white.svg"
                  alt="user One"
                ></Img>
              )}
            </Button>
            <Button
              className="dark:text-white text-black text-lg flex font-poppins font-bold tracking-[0.18px] "
              onClick={handlePrevSong}
            >
              {isDarkMode ? (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_back.svg"
                  alt="user One"
                ></Img>
              ) : (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_back_white.svg"
                  alt="user One"
                ></Img>
              )}
            </Button>
            <Button
              className="dark:text-white text-black text-lg flex font-poppins font-bold tracking-[0.18px] "
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
                isDarkMode ? (
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
                    src="/images/icon_play.svg"
                    alt="user One"
                  />
                ) : (
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
                    src="/images/icon_play_white.svg"
                    alt="user One"
                  />
                )
              ) : isDarkMode ? (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_pause.svg"
                  alt="user One"
                />
              ) : (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_pause_white.svg"
                  alt="user One"
                />
              )}
            </Button>
            <Button
              className="dark:text-white text-lg flex font-poppins font-bold tracking-[0.18px] "
              onClick={handleNextSong}
            >
              {isDarkMode ? (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_next.svg"
                  alt="user One"
                ></Img>
              ) : (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_next_white.svg"
                  alt="user One"
                ></Img>
              )}
            </Button>
            <Button className="dark:text-white text-lg flex font-poppins font-bold tracking-[0.18px] ">
              {isDarkMode ? (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_loop.svg"
                  alt="user One"
                ></Img>
              ) : (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_loop_white.svg"
                  alt="user One"
                ></Img>
              )}
            </Button>
          </div>
          <div className="flex flex-row gap-4 w-[40%] h-[50%]">
            <div className="bg-[#000000] bg-opacity-[40%]   relative ml-4 w-[80%] h-[100%] flex flex-col items-center dark:bg-[#000000] dark:bg-opacity-[14%] rounded-[11.85px]  ">
              <div className="flex flex-row items-start justify-start gap-x-3 h-[80px] md:h-[30%] truncate w-[100%]  ">
                <Button
                  className="h-[90%] w-[25%] "
                  onClick={() => {
                    navigate("/Unique");
                  }}
                >
                  <Img
                    className="h-full object-cover rounded-[11.85px]"
                    src={activeSong?.trackMetadata?.displayImageUri}
                    alt="user One"
                  />
                </Button>

                <div className="flex flex-col items-start justify-start w-full truncate">
                  <Text className="dark:text-white_text font-poppins font-bold text-2xl tracking-[0.18px] truncate  md:text-xs ">
                    {activeSong?.trackMetadata?.trackName}
                  </Text>
                  <Text className="  dark:text-[#FFFFFF] text-[#FFFFFF] text-opacity-70 text-sm font-poppins font-bold tracking-[0.14px] opacity-[64%] ">
                    {activeSong?.trackMetadata?.artists[0].name}
                  </Text>

                  <div className="mt-2 flex flex-row justify-between items-start w-full mb-1">
                    <Text className="dark:text-[#FFFFFF] text-xs font-poppins text-[#FFFFFF] text-opacity-70  font-bold tracking-[0.14px] opacity-[64%]">
                      {formatTime(currentTrackMoment)}
                    </Text>
                    <Text className="dark:text-[#FFFFFF] text-xs font-poppins text-[#FFFFFF] text-opacity-70  font-bold tracking-[0.14px] opacity-[64%] mr-2">
                      {currentTrackDuration}
                    </Text>
                  </div>
                </div>
              </div>

              <div
                id="jp-progress"
                className="absolute bottom-0 h-[4px]  bg-[#000000] rounded-[11.85px] bg-opacity-[14%] w-[95%]"
                onMouseDown={handleOnMouseDown}
              >
                <div
                  id="jp-play-bar"
                  onMouseUp={handleOnMouseUp}
                  className={`bg-[#FFFFFF99] h-[3px]  rounded-[11.85px]`}
                  style={{ width: `${parseInt(progressBarWidth)}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 mx-4">
            <Button className="text-white text-lg flex font-poppins font-bold tracking-[0.18px] ">
              {isDarkMode ? (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_lyric.svg"
                  alt="user One"
                ></Img>
              ) : (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_lyric_white.svg"
                  alt="user One"
                ></Img>
              )}
            </Button>
            <Button className="text-white text-lg flex font-poppins font-bold tracking-[0.18px] ">
              {isDarkMode ? (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_more.svg"
                  alt="user One"
                ></Img>
              ) : (
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="/images/icon_more_white.svg"
                  alt="user One"
                ></Img>
              )}
            </Button>
            {!slash ? (
              <Button
                className="dark:text-white text-lg flex font-poppins font-bold tracking-[0.18px] "
                onClick={() => {
                  setSlash(true);
                  audio.volume = 0;
                }}
              >
                {isDarkMode ? (
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
                    src="/images/icon_speaker.svg"
                    alt="user One"
                  />
                ) : (
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
                    src="/images/icon_speaker_white.svg"
                    alt="user One"
                  />
                )}
              </Button>
            ) : (
              <Button
                className="text-white text-lg flex font-poppins font-bold tracking-[0.18px] "
                onClick={() => {
                  setSlash(false);
                  audio.volume = volume;
                }}
              >
                {isDarkMode ? (
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
                    src="/images/speakerslash.svg"
                    alt="user One"
                  />
                ) : (
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
                    src="/images/speakerslashwhite.svg"
                    alt="user One"
                  />
                )}
              </Button>
            )}
            <input
              className={`rounded-lg overflow-hidden appearance-none bg-gray-400  h-3 w-[30%] ${
                !isDarkMode ? "dark-mode" : ""
              }`}
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayMusic;
