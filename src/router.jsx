import { createHashRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Board from "./pages/Board";
import { ProjectDet } from "./pages/projectDet";
import { Analytics } from "./pages/Analytics";
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
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/board",
    element: <Board />,
  },
  {
    path: "/projects/projects 1",
    element: <ProjectDet />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
]);

export default router;
