import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";

import Img from "./Img";
import Button from "./Button";
import Login from "./ModelLogin";

import SignIn from "./ModelSignIn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDarkmode } from "../Redux/features/playerSlice";

const Optional = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const HandleFalse = () => {
    setState(false);
  };
  const dispatch = useDispatch();
  const [stateSignIn, setStateSignIn] = useState(false);
  const HandleFalseSignIn = () => {
    setStateSignIn(false);
  };
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    dispatch(setDarkmode(isDarkMode));
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  const [stateDriveMode, setStateDriveMode] = useState(false);
  React.useEffect(() => {}, [state, stateSignIn]);

  return (
    <div>
      {state == true && <Login HandleFalse={HandleFalse}></Login>}
      {stateSignIn == true && <SignIn HandleFalse={HandleFalseSignIn} />}
      <div className="absolute top-0 w-full">
        <div className=" flex flex-row gap-[30px] items-center justify-center p-[18px] bg-opacity-[100%]">
          <div className="ml-4 bg-[#F4F4F4] dark:bg-color_bar rounded-[45px] w-[80%] flex flex-row items-center justify-between gap-4 mb-2 p-1 ">
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
                    : "dark:bg-[#1E232E] bg-[#000000] bg-opacity-[25%]"
                }`}
              >
                <Button
                  className="text-white text-lg flex   tracking-[0.18px] "
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
              <div className="m-1 ml-2 dark:bg-[#1E232E] bg-[#000000] bg-opacity-[25%] rounded-[45.65px] px-4 py-1">
                <Button
                  className="dark:text-white text-black text-lg font-poppins font-bold tracking-[0.18px] "
                  onClick={() => {
                    setState(true);
                  }}
                >
                  Login
                </Button>
              </div>
              <Button
                className="dark:text-white text-black text-lg font-poppins font-bold  tracking-[0.18px] "
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
  );
};
export default Optional;
