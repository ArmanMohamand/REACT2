import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/login";
import User from "./components/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/> <Home /> </>
    },
    {
      path: "/about",
      element:<> <Navbar/> <About /> </>
    },

    {
      path: "/login",
      element: <> <Navbar /> <Login /> </>
    },
    {
      path: "/user/:username",
      element: <> <Navbar/> <User /> </>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
