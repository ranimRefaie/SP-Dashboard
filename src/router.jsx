import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
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
]);

export default router;
