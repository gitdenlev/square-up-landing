import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <div>Services Page</div>,
  },
  {
    path: "/works",
    element: <div>Works Page</div>,
  },
  {
    path: "/process",
    element: <div>Process Page</div>,
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
  {
    path: "/careers",
    element: <div>Careers Page</div>,
  },
  {
    path: "/contact",
    element: <div>Contact Page</div>,
  },
]);

export default router;
