import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./HomePage";

const Body = () => {
  const appRouter = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <HomePage />,
    // },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      {/* <Login /> */}
      {/* <Browse /> */}
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
