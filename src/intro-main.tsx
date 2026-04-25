import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import IntroPresentation from "./intro-deck/IntroPresentation";
import "./index.css";

const router = createHashRouter([
  { path: "/", element: <IntroPresentation /> },
  { path: "/slide/:slideNumber", element: <IntroPresentation /> },
]);

createRoot(document.getElementById("intro-root")!).render(
  <RouterProvider router={router} />
);
