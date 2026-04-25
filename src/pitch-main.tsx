import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import PresentationView from "../teaming_ppt/app/components/PresentationView";
import "./index.css";

const router = createHashRouter([
  { path: "/", element: <PresentationView /> },
  { path: "/slide/:slideNumber", element: <PresentationView /> },
]);

createRoot(document.getElementById("pitch-root")!).render(
  <RouterProvider router={router} />
);
