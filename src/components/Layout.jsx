import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import List from "./List";
import Img from "./Img";
import Button from "./Button";
import Line from "./Line";
import Text from "./Text";

import ClassCard from "./coursescard";
import Optional from "./Optional";
import PlayMusic from "./PlayMusic";
import Slider from "./Slider";
import View from "./View.jsx";

const Tool = () => {
  const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black flex flex-row font-outfit items-start mx-auto w-full">
        <Slider />

        <div className="relative h-screen w-full  ">
          <Optional></Optional>
          <PlayMusic />
        </div>
      </div>
    </>
  );
};

export default Tool;
