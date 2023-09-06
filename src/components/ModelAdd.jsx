import React from "react";

import ReactDOM from "react-dom";
import Text from "./Text";
import Button from "./Button";
import FormAddMusic from "./FormAddMusic";

const Backdrop = (props) => {
  return (
    <div
      className="backdropTeacher bg-[#DEE5F3] bg-opacity-[35%]"
      onClick={props.HandleFalse}
    />
  );
};

export default function ModelAdd(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop HandleFalse={props.HandleFalse} />,
        document.getElementById("root_1")
      )}
      {ReactDOM.createPortal(
        <>
          <div className=" modalTeacher h-[80%]  left-0 right-0 flex items-center justify-center">
            <div className="rounded-xl bg-black bg-opacity-[60%] h-full w-[80%] text-white p-4 flex flex-col items-center">
              <FormAddMusic
                HandleAddMusic={props.HandleAddMusic}
                HandleFalse={props.HandleFalse}
              ></FormAddMusic>
            </div>
          </div>
        </>,
        document.getElementById("root_2")
      )}
    </React.Fragment>
  );
}
