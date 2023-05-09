import { createContext } from "react";
import { IUser } from "../interfaces/user";

interface ContextProps {
  users: IUser[];
}

export const UserContext = createContext({} as ContextProps);
