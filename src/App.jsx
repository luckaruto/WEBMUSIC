import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import React from "react";
import HomePage from "./Pages/Homepage.jsx";

import Slider from "./components/Slider.jsx";
import PlayMusic from "./components/PlayMusic.jsx";
import Optional from "./components/Optional.jsx";
import { Sidebar } from "react-pro-sidebar";
import PlayingMusicPage from "./Pages/PlayingMusicPage.jsx";

function App() {
  const Layout = () => {
    return (
      <>
        {/* <Outlet />
        <Sidebar />
        <Optional />
        <PlayMusic /> */}
      </>
    );
  };

  //Setting Router
  const route = createBrowserRouter([
    {
      path: "/",
      // element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        // { path: "/", element: <PlayingMusicPage />}
        // {
        //   path: "/courses",
        //   element: <Courses />,
        // },
        // { path: "/test", element: <test /> },
      ],
    },
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
