import "../dist/PlayingMusicPage.css";

import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import hello from "../asset/hello.mp3"; // importing the music
import { BiArrowBack } from "react-icons/bi"; // icons for next and previous track
import Button from "../components/Button";
import Img from "../components/Img";

import { Lrc, useRecoverAutoScrollImmediately } from "react-lrc";
import { lyrics } from "../components/Lyrics";

function getBackGroundColorGradientFromImage(imageUrl) {
  // TRẢ VỀ MÀU Ở VỊ TRÍ TRÊN CÙNG VÀ DƯỚI CÙNG CỦA ẢNH
  const img = new Image();
  img.src = imageUrl;
  img.crossOrigin = "Anonymous";
  return new Promise((resolve, reject) => {
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const topColorData = ctx.getImageData(0, 0, 1, 1).data;
      const bottomColorData = ctx.getImageData(0, img.height - 1, 1, 1).data;
      resolve({
        topColor: `rgb(${topColorData[0]}, ${topColorData[1]}, ${topColorData[2]})`,
        bottomColor: `rgb(${bottomColorData[0]}, ${bottomColorData[1]}, ${bottomColorData[2]})`,
      });
    };
    img.onerror = reject;
  });
}

function PlayingMusicPage() {
  const [isPlaying, setIsPlaying] = useState(false); // for handling the play and pause
  const [play, { pause, duration, sound }] = useSound(hello); // for handling the sound
  const [showLyrics, setShowLyrics] = useState(false); // for handling the lyrics
  // for mute and unmute
  const [isMuted, setIsMuted] = useState(false);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain,
  };

  useEffect(() => {
    getBackGroundColorGradientFromImage(
      "https://i1.sndcdn.com/artworks-000422809374-wjekm4-t500x500.jpg"
    )
      .then(({ topColor, bottomColor }) => {
        topColor = topColor;
        bottomColor = bottomColor;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Demo = () => {
    const { signal, recoverAutoScrollImmediately } =
      useRecoverAutoScrollImmediately();
    return (
      <>
        <Lrc
          lrc={lyrics()}
          className="lrc"
          lineRenderer={({ index, line, active }) => {
            const style = {
              color: active ? "white" : "grey",
              fontSize: "20px",
            };
            return (
              <div key={index} style={style}>
                {line.content}
              </div>
            );
          }}
          currentMillisecond={seconds * 1000}
          recoverAutoScrollSingal={signal}
          style={{
            width: "100%",
            height: "600px",
          }}
        />
      </>
    );
  };

  return (
    <>
      {/* 'linear-gradient(180deg, #73750d, #6e4936,  #37262a)' */}
      <div
        style={{
          background: "linear-gradient(180deg, #73750d, #6e4936,  #37262a)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="nav_music_area">
          <div className="nav_music_area_left">
            {/* back button */}
            <button className="nav_music_area_left_button">
              <BiArrowBack
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "30px",
                  color: "white",
                }}
              />
            </button>
          </div>
          <div className="nav_music_area_right">
            <Img
              className="h-8 w-8"
              src="./images/icon_playlist.svg"
              alt="user One"
              style={{
                marginRight: "30px",
              }}
            />
          </div>
        </div>
        <div
          className="component"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="music_playing_area">
            <img
              className="musicCover"
              src="https://i1.sndcdn.com/artworks-000422809374-wjekm4-t500x500.jpg"
              width={400}
              height={400}
              style={{
                borderRadius: "5px",
                paddingBottom: "20px",
              }}
            />
            <div
              className="time"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                className="time_range"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: "10px",
                }}
              >
                <p
                  style={{
                    marginRight: "150px",
                    color: "white",
                  }}
                >
                  {currTime.min}:
                  {currTime.sec < 10 ? `0${currTime.sec}` : currTime.sec}
                </p>
                <p
                  style={{
                    marginLeft: "190px",
                    color: "white",
                  }}
                >
                  {time.min}:{time.sec}
                </p>
              </div>
            </div>
            <div>
              {/* progress music bar */}
              <div className="progressBar">
                <input
                  className=" rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-[30%]"
                  type="range"
                  min="0"
                  max={duration / 1000}
                  default="0"
                  value={seconds}
                  onChange={(e) => {
                    sound.seek([e.target.value]);
                  }}
                  style={{
                    width: "400px",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                style={{
                  marginRight: "20px",
                  marginLeft: "110px",
                }}
              >
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="./images/icon_back.svg"
                  alt="user One"
                ></Img>
              </Button>
              {!isPlaying ? (
                <Button
                  className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                  onClick={playingButton}
                >
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
                    src="./images/icon_pause.svg"
                    alt="user One"
                  ></Img>
                </Button>
              ) : (
                <Button
                  className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                  onClick={playingButton}
                >
                  <Img
                    className="h-7 w-7 rounded-lg items-center"
                    src="./images/icon_play.svg"
                    alt="user One"
                  ></Img>
                </Button>
              )}
              <Button
                className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                style={{
                  marginLeft: "20px",
                }}
              >
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="./images/icon_next.svg"
                  alt="user One"
                ></Img>
              </Button>
              <Button
                className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                style={{
                  marginLeft: "70px",
                }}
                onClick={() => {
                  setShowLyrics(!showLyrics);
                }}
              >
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="./images/icon_lyric.svg"
                  alt="user One"
                ></Img>
              </Button>
              {!isMuted ? (
                <Button
                  className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                  onClick={() => {
                    setIsMuted(true);
                  }}
                  style={{
                    marginLeft: "20px",
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
                  className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] "
                  onClick={() => {
                    setIsMuted(false);
                  }}
                  style={{
                    marginLeft: "20px",
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
          {showLyrics ? (
            <div className="lyric_playing_area">
              <Demo />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default PlayingMusicPage;
