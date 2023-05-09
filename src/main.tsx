import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { UsersApp } from "./UsersApp";
import { UserProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <UsersApp />
    </UserProvider>
  </React.StrictMode>
);
