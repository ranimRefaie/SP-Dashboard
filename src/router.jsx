import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Board from "./pages/Board";
const router = createBrowserRouter([
  {
    path: "/SP-Dashboard",
    element: <SignIn />,
  },
  {
    path: "/SP-Dashboard/sign-up",
    element: <SignUp />,
  },
  {
    path: "/SP-Dashboard/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/SP-Dashboard/dashboard/projects",
    element: <Projects/>
  },
  {
    path: "/SP-Dashboard/dashboard/projects/board",
    element: <Board/>
  },
]);

export default router;
