import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

import router from "./routes";
import "./styles/index.css";

// Ignore the error about `createRoot` not being defined.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);