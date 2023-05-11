import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { UserRoutes } from "./routes/UserRoutes";
import { AuthContext } from "./auth/context";

import { LoginPage } from "./auth/pages/LoginPage";

export const UsersApp = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <Routes>
        {isAuth ? (
          <Route path="/*" element={<UserRoutes />} />
        ) : (
          <>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/*" element={<Navigate to="/login" />}></Route>
          </>
        )}
      </Routes>
    </>
  );
};
