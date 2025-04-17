// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./components/App/App";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
