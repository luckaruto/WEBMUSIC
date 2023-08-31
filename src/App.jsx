import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import React from "react";
import HomePage from "./Pages/Homepage.jsx";

import PlayMusic from "./components/PlayMusic.jsx";
import Optional from "./components/Optional.jsx";

import PlayingMusicPage from "./Pages/PlayingMusicPage.jsx";

import Slider from "./components/Slider.jsx";
import PlaylistPage from "./Pages/PlaylistPage.jsx";
import TopChartsComponent from "./Pages/TextPage.jsx";
import UniquePlayMusic from "./Pages/UniquePlayMusic.jsx";
import MusicPlayer from "./Pages/TestThu.jsx";
import Search from "./components/Search.jsx";

function App() {
  const Layout = () => {
    return (
      <>
        <div className="bg-black flex flex-row font-outfit items-start mx-auto w-full h-full">
          <Slider />
          <div className="relative h-screen w-full  ">
            <div className="absolute opacity-[14%] h-screen w-full bg-color_white_page "></div>
            <div className="absolute opacity-[14%] h-screen w-full bg-color_white_page "></div>
            <div className="absolute h-[90%] w-full top-[10%] ">
              <div className="relative top-[10%] flex flex-row items-center justify-center h-[90%] w-full ">
                <Outlet />
              </div>
            </div>
            <Optional></Optional>
            <PlayMusic></PlayMusic>
          </div>
        </div>
      </>
    );
  };

  //Setting Router
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },

        { path: "/playlist", element: <PlaylistPage /> },

        { path: "/search", element: <Search /> },

        // {
        //   path: "/courses",
        //   element: <Courses />,
        // },
        // { path: "/test", element: <test /> },
      ],
    },
    {
      path: "/test",
      element: <UniquePlayMusic />,
    },
    { path: "/dcm", element: <MusicPlayer /> },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },

    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
