import { useReducer, useState } from "react";
import { IUser } from "../interfaces/user";
import { UserState, usersReducer } from "../reducers/usersReducer";

const initialUsers: IUser[] = [];

const initialState: UserState = {
  users: initialUsers,
};

const initialUser = {
  username: "",
  email: "",
  password: "",
};
export const useUsers = () => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const [userSelected, setUserSelected] = useState<IUser>(initialUser);

  const handleSaveUser = (user: IUser) => {
    if (user.id) {
      dispatch({ type: "[User] - UpdateUser", payload: user });
      return;
    }

    dispatch({ type: "[User] - AddUser", payload: user });
  };

  const handleRemoveUser = (id: number) => {
    dispatch({ type: "[User] - RemoveUser", payload: id });
  };

  const onSelectedUser = (id: number) => {
    const user = state.users.find((user) => user.id === id);
    if (!user) return;

    setUserSelected({ ...user });
  };

  return {
    ...state,
    userSelected,
    initialUsers,
    initialUser,
    handleSaveUser,
    handleRemoveUser,
    onSelectedUser,
  };
};
