import React from "react";
import { default as ModalProvider } from "react-modal";
import Button from "./Button";
import Img from "./Img";
import Text from "./Text";
import CheckBox from "./CheckBox";
import Input from "./Input";
import { PagerIndicator } from "./PagerIndicator";
import { Slider } from "./Slidertemp";

const SignInModal = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <div className=" sm:w-full md:w-full w-full h-fit bg-[#000000] bg-opacity-90 rounded-lg overflow-auto">
      <div className="  md:px-5 relative w-full">
        <React.Fragment>
          <div className="bg-white-A700 flex flex-col items-start justify-start mx-2.5 px-[50px] py-[20px] md:px-10 sm:px-5 rounded-[15px]">
            <div className="flex flex-col items-start justify-start p-2 w-auto md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
                    <Text
                      className="leading-[50.00px] sm:text-4xl md:text-[38px] text-[40px] text-white"
                      size="txtMetropolisBold40"
                    >
                      <>
                        Welcome to
                        <br />
                        Melsymph Online
                        <br />
                        Music for everyone
                      </>
                    </Text>
                    <Img
                      className="h-[336px] w-[332px]"
                      src="./images/LogoLogin.svg"
                      alt="57907191"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#F3F2FA]/0  via-[#E8DBC4] to-[#5A5487]/0  h-[641px] md:h-px md:w-full w-px" />
                <div className="flex flex-col font-inter gap-6 items-center justify-center w-auto">
                  <div className="flex flex-col gap-5 items-center justify-center w-auto">
                    <Button
                      className="bg-white-A700 border border-[#DEDDE4] border-solid cursor-pointer flex items-center justify-center min-w-[331px] px-[34px] py-[13px] rounded-[10px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-[23px]"
                          src="./images/img_google.svg"
                          alt="google"
                        />
                      }
                    >
                      <div className="sm:px-5 text-base text-center text-white">
                        Sign in with google
                      </div>
                    </Button>
                    <div className="flex flex-row gap-[11px] items-center justify-center w-auto">
                      <div className="bg-gray-700 h-px w-[8%]"></div>
                      <Text
                        className="text-base text-center text-white w-full"
                        size="txtInterRegular16"
                      >
                        Or sign in with your email
                      </Text>
                      <div className="bg-gray-700 h-px w-[8%]"></div>
                    </div>
                    <div className="flex flex-col gap-[30px] items-center justify-center w-auto">
                      <div className="flex flex-col gap-5 items-start justify-start w-auto">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <Text
                            className="text-base text-white w-auto"
                            size="txtInterMedium16Gray900"
                          >
                            Email
                          </Text>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Input
                              name="frame7857"
                              placeholder="user@example.com"
                              className="p-0 placeholder:text-[#DEE5F3] sm:pr-5 text-base text-[#DEE5F3] text-left w-full"
                              wrapClassName="bg-white-A700 border border-gray-300 border-solid flex pb-[13px] pl-[18px] pr-[35px] pt-4 rounded-[10px] w-full"
                              prefix={
                                <Img
                                  className="mt-auto mb-0.5 h-[18px] mr-[15px]"
                                  src="./images/img_message_24_outline.svg"
                                  alt="message / 24 / Outline"
                                />
                              }
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-base text-white w-auto"
                            size="txtInterMedium16Gray900"
                          >
                            Password
                          </Text>
                          <Input
                            name="frame7860"
                            placeholder="*************"
                            className="p-0 placeholder:text-[#DEE5F3] text-base text-[#DEE5F3] text-left w-full"
                            wrapClassName="bg-white-A700 border border-gray-300 border-solid flex px-[18px] py-3.5 rounded-[10px] w-full"
                            prefix={
                              <Img
                                className="h-[18px] mr-[15px] my-px"
                                src="./images/img_lock.svg"
                                alt="lock"
                              />
                            }
                            suffix={
                              <Img
                                className="h-[18px] ml-[35px] my-px"
                                src="./images/img_eye.svg"
                                alt="eye"
                              />
                            }
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-base text-white w-auto"
                            size="txtInterMedium16Gray900"
                          >
                            Confirm Password
                          </Text>
                          <Input
                            name="frame7860"
                            placeholder="*************"
                            className="p-0 placeholder:text-[#DEE5F3] text-base text-[#DEE5F3] text-left w-full"
                            wrapClassName="bg-white-A700 border border-gray-300 border-solid flex px-[18px] py-3.5 rounded-[10px] w-full"
                            prefix={
                              <Img
                                className="h-[18px] mr-[15px] my-px"
                                src="./images/img_lock.svg"
                                alt="lock"
                              />
                            }
                            suffix={
                              <Img
                                className="h-[18px] ml-[35px] my-px"
                                src="./images/img_eye.svg"
                                alt="eye"
                              />
                            }
                          ></Input>
                        </div>
                      </div>
                      <Button className="bg-[#81E930] cursor-pointer font-medium min-w-[368px] py-[15px] rounded-[10px] text-base text-center text-white-A700">
                        Sign In
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[58px] items-start justify-start w-auto">
                    <div className="flex flex-row items-center justify-start w-[full] sm:w-full">
                      <CheckBox
                        className="text-base text-white text-left "
                        inputClassName="mr-[5px]"
                        name="keepmesignedin"
                        id="keepmesignedin2"
                        label="I agreed to the Terms & Conditions"
                      ></CheckBox>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1 items-start justify-center w-auto">
                    <Text
                      className="text-base text-white w-auto"
                      size="txtInterMedium16Gray700"
                    >
                      Have an account?
                    </Text>
                    <Text
                      className="text-base text-[#81E930] w-auto"
                      size="txtInterMedium16Red300"
                    >
                      Login
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>

        <PagerIndicator
          className="absolute bottom-[13%] flex h-2.5 left-[23%] w-9"
          count={3}
          activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 border-red-300 border border-solid bg-white-A700 w-2.5 relative"
          activeIndex={sliderState}
          inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange-400_7f w-2 relative"
          sliderRef={sliderRef}
          selectedWrapperCss="inline-block mx-[2.50px]"
          unselectedWrapperCss="inline-block mx-[2.50px]"
        />
      </div>
    </div>
  );
};

export default SignInModal;
