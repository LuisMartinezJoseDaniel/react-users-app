import { LoginPage } from "./auth/pages/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./auth/hooks/useAuth";
import { UserRoutes } from "./routes/UserRoutes";
import { Navbar } from "./components/layout/Navbar";

export const UsersApp = () => {
  const { isAuth, handleLogin } = useAuth();

  return (
    <Routes>
      {isAuth ? (
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <UserRoutes />
            </>
          }
        />
      ) : (
        <>
          <Route
            path="/login"
            element={<LoginPage handleLogin={handleLogin} />}
          ></Route>
          <Route path="/*" element={<Navigate to="/login" />}></Route>
        </>
      )}
    </Routes>
  );
};
