import { LoginPage } from "./auth/pages/LoginPage";

import { UsersPage } from "./pages/UserPage";
import { useAuth } from "./auth/hooks/useAuth";

export const UsersApp = () => {
  const { isAuth, handleLogin } = useAuth();

  return (
    <>{isAuth ? <UsersPage /> : <LoginPage handleLogin={handleLogin} />}</>
  );
};
