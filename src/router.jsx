import { createBrowserRouter, createHashRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Board from "./pages/Board";
import { ProjectDet } from "./pages/projectDet";
const router = createHashRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/projects",
    element: <Projects />,
  },
  {
    path: "/dashboard/projects/board",
    element: <Board />,
  },
  {
    path: "/dashboard/projects 1",
    element: <ProjectDet />,
  },
]);

export default router;
