import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UserPage";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

export const UserRoutes = () => {
  const usersHook = useUsers();
  const { handleSaveUser, initialUser, users } = usersHook;

  return (
    <Routes>
      <Route path="users" element={<UsersPage {...usersHook} />}></Route>
      <Route
        path="users/register"
        element={
          <RegisterPage
            handleSaveUser={handleSaveUser}
            initialUser={initialUser}
          />
        }
      ></Route>
      <Route
        path="/users/:id/edit"
        element={
          <RegisterPage
            handleSaveUser={handleSaveUser}
            initialUser={initialUser}
            users={users}
          />
        }
      ></Route>
      <Route path="/" element={<Navigate to={"/users"} />}></Route>
    </Routes>
  );
};
