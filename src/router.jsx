import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
const router = createBrowserRouter([
  {
    path: "/SP-Dashboard",
    element: <SignIn />,
  },
  {
    path: "/SP-Dashboard/sign-up",
    element: <SignUp />,
  },
]);

export default router;
