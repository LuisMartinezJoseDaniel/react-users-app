import { useReducer, useState } from "react";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isAxiosError } from "axios";

import { UserState } from "../context";
import { usersReducer } from "../context/usersReducer";
import { IUser } from "../interfaces/user";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers: IUser[] = [];

const initialState: UserState = {
  users: initialUsers,
};

const initialUser = {
  username: "",
  email: "",
  password: "",
};

const initialErrors = {
  username: "",
  email: "",
  password: "",
};
export const useUsers = () => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const [userSelected, setUserSelected] = useState<IUser>(initialUser);
  const [visibleForm, setVisibleForm] = useState(false);
  const [backendErrors, setBackendErrors] = useState<IUser>(initialErrors);

  const navigate = useNavigate();

  const getUsers = async () => {
    const users = await findAll();
    dispatch({
      type: "[User] - LoadUsersFromApi",
      payload: users,
    });
  };

  const handleSaveUser = async (user: IUser) => {
    try {
      const userDb = user.id ? await update(user) : await save(user);
      if (!userDb) return;

      dispatch({
        type: user.id ? "[User] - UpdateUser" : "[User] - AddUser",
        payload: userDb,
      });

      Swal.fire(
        user.id ? "Usuario actualizado" : "Usuario creado",
        user.id
          ? "El Usuario ha sido actualizado con exito"
          : "El Usuario ha sido creado con exito",
        "success"
      );

      setUserSelected(initialUser);
      setVisibleForm(false);
      navigate("/users");
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        setBackendErrors(error.response.data);
      }
      console.error(error);
    }
  };

  const handleRemoveUser = async (id: number) => {
    Swal.fire({
      title: "Estas seguro de eliminar este usuario?",
      text: "No puedes revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórrelo!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { error } = await remove(id);
        if (error) return;
        Swal.fire(
          "Borrado!",
          "El usuario ha sido borrado con éxito.",
          "success"
        );
        dispatch({ type: "[User] - RemoveUser", payload: id });
      }
    });
  };

  const onSelectedUser = (id: number) => {
    const user = state.users.find((user) => user.id === id);
    if (!user) return;

    setUserSelected({ ...user });
    setVisibleForm(true);
  };

  const handleVisibleForm = (isVisible: boolean) => {
    setVisibleForm(isVisible);
    setUserSelected(initialUser);
    setBackendErrors(initialErrors);
  };

  return {
    ...state,
    userSelected,
    initialUsers,
    initialUser,
    visibleForm,
    backendErrors,
    handleSaveUser,
    handleRemoveUser,
    onSelectedUser,
    setVisibleForm,
    handleVisibleForm,
    getUsers,
  };
};
