import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import React from "react";
import HomePage from "./Pages/Homepage.jsx";

import PlayMusic from "./components/PlayMusic.jsx";
import Optional from "./components/Optional.jsx";

import PlayingMusicPage from "./Pages/PlayingMusicPage.jsx";
import AllPlayListPage from "./Pages/AllPlayListPage.jsx";

import Slider from "./components/Slider.jsx";

import PlaylistPage from "./Pages/PlaylistPage.jsx";
import TopChartsComponent from "./Pages/TextPage.jsx";
import UniquePlayMusic from "./Pages/UniquePlayMusic.jsx";
import MusicPlayer from "./Pages/TestThu.jsx";

import SearchPage from "./Pages/SearchPage.jsx";

import SongPage from "./Pages/SongPage.jsx";
import AddPlaylistPage from "./Pages/AddPlayListPage.jsx";
import Footer from "./components/Footer.jsx";
import ArtistPageCreate from "./Pages/ArtistPageCreate.jsx";
import PageDriverMode from "./Pages/PageDriverMode.jsx";


function App() {
  const Layout = () => {
    return (
      <>
        <div className="dark:bg-black bg-white bg-opacity-[14%] flex flex-row font-outfit items-start mx-auto w-full h-full">
          <Slider />
          <div className="relative h-screen w-full  ">
            <div className="absolute opacity-[14%] h-screen w-full dark:bg-color_white_pag bg-white "></div>
            <div className="absolute opacity-[14%] h-screen w-full dark:bg-color_white_page bg-white "></div>
            <div className="absolute h-[90%] w-full top-[10%] overflow-y-auto no-scrollbar ">
              <div className="relative  flex flex-row items-center justify-center h-[100%] w-full ">
                <Outlet />
              </div>
              <Footer />
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

        { path: "/playlist/:playlistId", element: <PlaylistPage /> },
        { path: "/playlist", element: <AllPlayListPage /> },
        { path: "/addplaylist", element: <AddPlaylistPage /> },
        { path: "/artistcreate", element: <ArtistPageCreate /> },

        { path: "/search", element: <SearchPage /> },

        // {
        //   path: "/courses",
        //   element: <Courses />,
        // },
        { path: "/Songs", element: <SongPage /> },
        { path: "/test", element: <TopChartsComponent /> },
      ],
    },
    {
      path: "/Unique",
      element: <UniquePlayMusic />,
    },
    { path: "/DriverMode", element: <PageDriverMode /> },
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
