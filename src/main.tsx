import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { UsersApp } from "./UsersApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersApp />
    </BrowserRouter>
  </React.StrictMode>
);
