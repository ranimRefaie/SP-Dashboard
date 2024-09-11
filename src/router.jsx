import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OverView from "./pages/OverView";
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
    path: "/SP-Dashboard/overview",
    element: <OverView />,
  },
]);

export default router;
