import { FC, useReducer } from "react";
import { UserContext, usersReducer } from "./";
import { IUser } from "../interfaces/user";

// Manejar el state del reducer
export interface UserState {
  users: IUser[];
}

const User_INITIAL_STATE: UserState = {
  users: [],
};

interface Props {
  children?: React.ReactNode;
}

export const UserProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, User_INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
