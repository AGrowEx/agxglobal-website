import { createBrowserRouter } from "react-router";
import PresentationView from "./components/PresentationView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PresentationView,
  },
  {
    path: "/slide/:slideNumber",
    Component: PresentationView,
  },
]);
