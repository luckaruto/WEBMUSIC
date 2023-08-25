import React from "react";
import Img from "../components/Img";
import Button from "../components/Button";
import Text from "../components/Text";
import { playPause, nextSong } from "../Redux/features/playerSlice";
import { Lrc, useRecoverAutoScrollImmediately } from "react-lrc";
import { lyrics } from "../components/Lyrics";
import { useSelector, useDispatch } from "react-redux";
import Index from "./TestThu";

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

export default function UniquePlayMusic() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, currentIndex, currentSongs, isActive } =
    useSelector((state) => state.player);
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

  const [lyric, setLyric] = React.useState(false);

  React.useEffect(() => {
    initData();
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    audio.volume = volume;
  }, [isPlaying, volume, activeSong]);
  console.log(activeSong);

  return (
    <div className=" flex w-full h-screen bg-gradient-to-r from-[#000000] to-[#EC1052] items-center justify-center">
      <div className="flex flex-row w-[80%] h-[80%] gap-7 justify-center items-center">
        <div className="flex flex-col h-full w-[40%] items-center">
          <Img
            className="w-auto h-[70%] rounded-[11.85px]"
            src={activeSong?.trackMetadata?.displayImageUri}
            alt="user One"
          />
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
                  className="h-7 w-7 rounded-lg items-center"
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
                    className="h-7 w-7 rounded-lg items-center"
                    src="./images/icon_play.svg"
                    alt="user One"
                  />
                ) : (
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
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
                  className="h-7 w-7 rounded-lg items-center"
                  src="./images/icon_next.svg"
                  alt="user One"
                ></Img>
              </Button>
            </div>

            <div className="flex flex-row gap-5 absolute right-2">
              <Button className=" text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] ">
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="./images/icon_more.svg"
                  alt="user One"
                ></Img>
              </Button>
              <Button
                className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                onClick={() => {
                  setLyric(!lyric);
                }}
              >
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="./images/icon_lyric.svg"
                  alt="user One"
                ></Img>
              </Button>
              {!slash ? (
                <Button
                  className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px]  "
                  onClick={() => {
                    setSlash(true);
                    audio.volume = 0;
                  }}
                >
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
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
                    className="h-7 w-7 rounded-lg items-center"
                    src="./images/speakerslash.svg"
                    alt="user One"
                  />
                </Button>
              )}
            </div>
          </div>
        </div>
        {lyric === true && (
          <div className="w-[50%] h-[90%]  ">
            <Index
              currentDuration={currentTrackMoment}
              setCurrentDuration={setCurrentTrackMoment}
              audio={audio}
            ></Index>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 w-full h-[15%] ">
        <audio
          src={activeSong?.audio}
          controls={false}
          id="jp_audio_0"
          onTimeUpdate={(e) => {
            handleTimeupdate(e);
          }}
          onEnded={handleNextSong}
          onLoadedMetadata={handleMetadata}
        />
      </div>
    </div>
  );
}
