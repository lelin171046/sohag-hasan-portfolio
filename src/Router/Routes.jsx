// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import App from "../App";
import VideoUpload from "../Components/VideoUpload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/upload",
    element: <VideoUpload />
  }
]);

export default router;
