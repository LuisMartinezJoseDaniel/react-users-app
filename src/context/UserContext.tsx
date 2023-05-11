import { createContext } from "react";
import { IUser } from "../interfaces/user";

interface ContextProps {
  users: IUser[];
  userSelected: IUser;
  initialUser: IUser;
  visibleForm: boolean;
  backendErrors: IUser;
  handleSaveUser: (user: IUser) => void;
  handleRemoveUser: (id: number) => void;
  onSelectedUser: (id: number) => void;
  handleVisibleForm: (isVisible: boolean) => void;
  getUsers: () => Promise<void>;
}

export const UserContext = createContext({} as ContextProps);
