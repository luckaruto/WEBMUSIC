import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";

import Img from "./Img";
import Button from "./Button";

const Optional = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
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
            <div className="m-1 ml-2 bg-[#1E232E] rounded-[45.65px] px-6 py-1 ">
              <Button className="text-white text-lg flex font-abhaya-libre font-extrabold  tracking-[0.18px] ">
                <Img
                  className="h-7 w-7 rounded-lg items-center"
                  src="./images/icon_car.svg"
                  alt="user One"
                ></Img>
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 mr-4">
            <div className="m-1 ml-2 bg-[#1E232E] rounded-[45.65px] px-4 py-1">
              <Button className="text-white text-lg font-abhaya-libre font-extrabold  tracking-[0.18px] ">
                Login
              </Button>
            </div>
            <Button className="text-white text-lg font-abhaya-libre font-extrabold  tracking-[0.18px] ">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Optional;
