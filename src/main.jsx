
    // {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
    // <p class="text-sky-400">The quick brown fox...</p> */}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);