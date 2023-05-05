import { createBrowserRouter, Navigate } from "react-router-dom";
import { UsersPage } from "../pages/UserPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/users "} />,
  },
  {
    path: "/users",
    children: [
      {
        index: true,
        element: <UsersPage />,
      },
    ],
  },
]);

export default Router;
