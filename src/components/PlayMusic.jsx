import React from "react";
import Img from "./Img";
import Button from "./Button";
import Text from "./Text";

import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    isRandom: false,
    isRepeat: false,
    isPlay: false,
    playList: [],
  });

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

  React.useEffect(() => {
    initAudioPlayer();
  });

  const handleTimeupdate = (e) => {
    setCurrentTrackMoment(Math.floor(e.target.currentTime));
    setProgressBarWidth(
      parseInt((e.target.currentTime / e.target.duration) * 100)
    );
  };

  React.useEffect(() => {
    const indetiPIEr = setTimeout(async () => {
      setsong(0);
    }, 100);
    return () => {
      clearTimeout(indetiPIEr);
    };
  }, []);

  return (
    <div className="absolute bottom-0 w-full ">
      <audio
        src="https://soundcloud-result.s3.amazonaws.com/2023-08-14/1692000989082.mp3"
        controls={false}
        id="jp_audio_0"
        onTimeUpdate={(e) => {
          handleTimeupdate(e);
        }}
        onLoadedMetadata={handleMetadata}
      />

      <div className=" flex flex-row gap-[30px] items-center justify-center p-[18px] h-full ">
        <div className=" ml-4 bg-color_bar rounded-[45px] w-[80%] flex flex-row items-center justify-between gap-5 p-1 px-5 ">
          <div className="flex flex-row items-center gap-4 mx-4">
            <Button className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] ">
              <Img
                className="h-7 w-7 rounded-lg items-center"
                src="./images/icon_random.svg"
                alt="user One"
              ></Img>
            </Button>
            <Button className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] ">
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
                  setState({ ...state, isPlay: false });
                } else {
                  audio.play();
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
            <Button className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] ">
              <Img
                className="h-7 w-7 rounded-lg items-center"
                src="./images/icon_next.svg"
                alt="user One"
              ></Img>
            </Button>
            <Button className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] ">
              <Img
                className="h-7 w-7 rounded-lg items-center"
                src="./images/icon_loop.svg"
                alt="user One"
              ></Img>
            </Button>
          </div>
          <div className="flex flex-row gap-4 w-[40%]">
            <div className="relative ml-4 w-[80%] h-[100%] flex flex-col items-center ">
              <div className="absolute opacity-[14%] h-full w-full bg-[#000000] top-0 rounded-[11.85px] "></div>
              <div className=" flex flex-row items-start justify-start gap-x-3 ">
                <Img
                  className="m-0 w-[20%] rounded-[11.85px]"
                  src="./images/1.png"
                  alt="user One"
                />
                <div className="flex flex-col items-start justify-start w-full">
                  <Text className="text-white_text font-abhaya-libre font-extrabold text-3xl tracking-[0.18px] ">
                    Song 1223
                  </Text>
                  <Text className="text-[#FFFFFF] text-sm tracking-[0.14px] opacity-[64%]">
                    Song
                  </Text>

                  <div className="mt-2 flex flex-row justify-between items-start w-full mb-1">
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
            <Button className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] ">
              <Img
                className="h-7 w-7 rounded-lg items-center"
                src="./images/icon_lyric.svg"
                alt="user One"
              ></Img>
            </Button>
            <Button className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] ">
              <Img
                className="h-7 w-7 rounded-lg items-center"
                src="./images/icon_more.svg"
                alt="user One"
              ></Img>
            </Button>
            <Button className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] ">
              <Img
                className="h-7 w-7 rounded-lg items-center"
                src="./images/icon_speaker.svg"
                alt="user One"
              ></Img>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayMusic;
