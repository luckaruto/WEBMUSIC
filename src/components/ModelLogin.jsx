import React from "react";

import ReactDOM from "react-dom";
import LogInModal from "./Login";

const Backdrop = (props) => {
  return (
    <div
      className="backdropTeacher bg-[#DEE5F3] bg-opacity-[35%]"
      onClick={props.HandleFalse}
    />
  );
};

const Login = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop HandleFalse={props.HandleFalse} />,
        document.getElementById("root_1")
      )}
      {ReactDOM.createPortal(
        <>
          <div className=" modalTeacher hover:shadow-bs1 h-[80%] flex flex-row items-center justify-center">
            <LogInModal />
          </div>
        </>,
        document.getElementById("root_2")
      )}
    </React.Fragment>
  );
};

export default Login;
