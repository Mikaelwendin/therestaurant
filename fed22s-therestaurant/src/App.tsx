import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { router } from "./Router";
import { RouterProvider } from "react-router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
