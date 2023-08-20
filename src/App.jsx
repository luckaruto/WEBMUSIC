import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import React from "react";
import HomePage from "./Pages/Homepage.jsx";

function App() {
  const Layout = () => {
    return (
      <>
        {/* <Header />
        <Outlet />
        <ScrollButton />
        <Footer /> */}
        <Outlet />
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
