import React from "react";
import Text from "./Text";
import Img from "./Img";
import { PaperClipIcon } from "@heroicons/react/24/solid";
import { useParams, useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { lyrics } from "./Lyrics";

const FormAddMusic = (props) => {
  const params = useParams();
  const [selectedFile, setSelectedFile] = React.useState();
  const [File, setFile] = React.useState();

  const TitleInputRef = React.useRef();
  const lyrics = React.useRef();
  const ArtistInputRef = React.useRef();
  const [isFilePicked, setIsFilePicked] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(TitleInputRef.current.value);
    console.log(lyrics.current.value);
    console.log(selectedImage);
    console.log(selectedFile);

    console.log(ArtistInputRef.current.value);
    props.HandleAddMusic(
      TitleInputRef.current.value,
      ArtistInputRef.current.value,
      lyrics.current.value,
      selectedImage,
      selectedFile
    );
    props.HandleFalse();
  };

  const changeHandler = (event) => {
    const file = event.target.files[0];
    setFile(file);
    const url = URL.createObjectURL(file);
    setSelectedFile(url);
    setIsFilePicked(true);
  };
  const [selectedImage, setSelectedImage] = React.useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-start justify-start overflow-auto no-scrollbar text-white ">
        <div className=" flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
          <div className="p-8 flex flex-1 flex-col gap-[34px] items-center justify-start md:mt-0  w-full">
            <Text className="font-semibold md:text-3xl sm:text-[28px] text-[32px] text-left w-auto">
              Add song
            </Text>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                    <div>
                      <label className="block text-sm font-medium leading-6 mb-2 ">
                        Image of song
                      </label>
                      <div
                        className="relative rounded-[8%] h-[155px] w-[155px] bg-[#878787] "
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {selectedImage ? (
                          <img
                            className="rounded-[8%] h-full w-full"
                            src={selectedImage}
                            alt="Selected"
                          />
                        ) : (
                          <img
                            src="./images/music.svg"
                            className="rounded-[8%] h-full w-full"
                          />
                        )}

                        {isHovered && (
                          <label
                            htmlFor="imageInput"
                            className="absolute top-0 h-full w-full flex items-center justify-center bg-black bg-opacity-20 rounded-[8%]"
                          >
                            <input
                              id="imageInput"
                              type="file"
                              required
                              accept="image/*"
                              onChange={handleImageChange}
                              className="hidden"
                            />
                            <img
                              src="/images/camera.svg"
                              className="h-[50%] "
                            />
                          </label>
                        )}
                      </div>
                    </div>

                    <div className="mt-2 ">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 "
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            ref={TitleInputRef}
                            type="text"
                            name="username"
                            required
                            id="username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1  focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="input name of your music"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 space-y-10">
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="Artist"
                          className="block text-sm font-medium leading-6 "
                        >
                          Artist
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              ref={ArtistInputRef}
                              type="link"
                              required
                              name="Artist"
                              id="Artist"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="input Artist"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 "
                      >
                        Lyrics
                      </label>
                      <div className="mt-2">
                        <textarea
                          ref={lyrics}
                          id="about"
                          name="about"
                          rows={5}
                          className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset text-black  bg-opacity-[10%] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 ">
                        Input your lyrics and time
                      </p>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 "
                      >
                        Upload your file
                      </label>

                      <div className="text-center">
                        <div className="mt-4 flex text-sm leading-6 items-center gap-3">
                          <label htmlFor="file-upload" className="h-12 w-12">
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="hidden"
                              required
                              onChange={changeHandler}
                            />
                            <img src="/images/music.svg" className="h-full" />
                          </label>

                          {isFilePicked ? (
                            <div>
                              <audio
                                src={selectedFile}
                                type="audio/mpeg"
                                controls={true}
                              ></audio>
                            </div>
                          ) : (
                            <div>
                              <p className="text-xs leading-5 ">
                                UpLoad MP3 file
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 "
                  onClick={props.HandleFalse}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-[#c21919] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddMusic;
