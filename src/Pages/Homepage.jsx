import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import List from "../components/List";
import Img from "../components/Img";
import Button from "../components/Button";
import Line from "../components/Line";
import Text from "../components/Text";

import ClassCard from "../components/coursescard";
import Optional from "../components/Optional";
import PlayMusic from "../components/PlayMusic";
import Slider from "../components/Slider";
import View from "../components/View.jsx";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Slider />

        <div className="relative h-screen w-full  ">
          <div className="absolute opacity-[14%] h-screen w-full bg-color_white_page "></div>
          <div className="absolute opacity-[14%] h-screen w-full bg-color_white_page "></div>
          <div className="absolute h-[90%] overflow-auto  w-full top-[5%] ">
            <div className="flex flex-row items-center justify-center w-full mt-10">
              <View />
            </div>
          </div>
          <Optional></Optional>
          <PlayMusic />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
