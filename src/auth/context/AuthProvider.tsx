import { FC, useReducer } from "react";
import { AuthContext, authReducer } from "./";
import { IUserLogin } from "../../interfaces/user";
import { useAuth } from "../hooks/useAuth";

// Manejar el state del reducer
export interface AuthState {
  isAuth: boolean;
  user: IUserLogin | null;
}

const AUTH_INITIAL_STATE: AuthState = {
  isAuth: false,
  user: null,
};

interface Props {
  children?: React.ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider
      value={{
        ...auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
