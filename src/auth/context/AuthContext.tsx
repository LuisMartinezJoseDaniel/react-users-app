import { createContext } from "react";
import { ILogin, IUserLogin } from "../../interfaces/user";

interface ContextProps {
  isAuth: boolean;
  user: IUserLogin | null;
  handleLogin: (userLogin: ILogin) => void;
  handleLogout: () => void;
}

export const AuthContext = createContext({} as ContextProps);
