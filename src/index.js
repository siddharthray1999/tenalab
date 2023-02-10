import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ak47 from "./Components/Sections/Ak47";
import Sniper from "./Components/Sections/Sniper";
import ThermalInsole from "./Components/Sections/ThermalInsole";
import AntiPenetation from "./Components/Sections/AntiPenetation";
import MpAssault from "./Components/Sections/MpAssault";
import Tavor from "./Components/Sections/Tavor";
import Steyr from "./Components/Sections/Steyr";
import TacticalLight from "./Components/Sections/TacticalLight";
import Helipad from "./Components/Sections/Helipad";
import FlashLight from "./Components/Sections/FlashLight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AK-47",
    element: <Ak47 />,
  },
  {
    path: "/Sniper",
    element: <Sniper />,
  },
  {
    path: "/Thermalinsole",
    element: <ThermalInsole />,
  },
  {
    path: "/Antipenetration",
    element: <AntiPenetation />,
  },
  {
    path: "/Mpassault",
    element: <MpAssault />,
  },
  {
    path: "/Tavor",
    element: <Tavor />,
  },
  {
    path: "/Steyr",
    element: <Steyr />,
  },
  {
    path: "/TacticalLight",
    element: <TacticalLight />,
  },
  {
    path: "/Helipad",
    element: <Helipad />,
  },
  {
    path: "/Flashlight",
    element: <FlashLight />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
