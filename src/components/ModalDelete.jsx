import React from "react";
import ReactDOM from "react-dom";
import Text from "./Text";
import Button from "./Button";

const Backdrop = (props) => {
  return (
    <div
      className="backdropTeacher bg-[#DEE5F3] bg-opacity-[35%]"
      onClick={props.HandleFalse}
    />
  );
};
export default function ModalDelete(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop HandleFalse={props.HandleFalse} />,
        document.getElementById("root_1")
      )}
      {ReactDOM.createPortal(
        <>
          <div className=" modalTeacher hover:shadow-bs1 h-[50%]  flex flex-row items-center justify-center">
            <div className=" relative rounded-xl bg-black bg-opacity-[60%] h-[50%] w-[40%] text-white p-4 flex flex-col items-center">
              <Text className="text-2xl text-center">{props.messages}</Text>
              <div className=" absolute bottom-2 left-0 right-0 flex flex-row items-center justify-center gap-4 w-full">
                <Button
                  className="bg-[#3f3f3f] p-2 rounded-md w-[45%]"
                  onClick={props.HandleFalse}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-[#c34242] p-2 rounded-md w-[45%]"
                  onClick={props.handleDelete}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById("root_2")
      )}
    </React.Fragment>
  );
}
