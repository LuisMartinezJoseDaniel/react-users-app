import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UserPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Navbar } from "../components/layout/Navbar";

export const UserRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="users" element={<UsersPage />}></Route>
        <Route path="users/register" element={<RegisterPage />}></Route>
        <Route path="/users/:id/edit" element={<RegisterPage />}></Route>
        <Route path="/" element={<Navigate to={"/users"} />}></Route>
      </Routes>
    </>
  );
};
