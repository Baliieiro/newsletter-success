import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/success", element: <Success /> },
    ],
  },
]);

export default router;
