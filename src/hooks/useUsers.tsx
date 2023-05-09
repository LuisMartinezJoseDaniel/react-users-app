import { useReducer, useState } from "react";
import { IUser } from "../interfaces/user";
import { usersReducer } from "../context/usersReducer";
import Swal from "sweetalert2";
import { UserState } from "../context";

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
  const [visibleForm, setVisibleForm] = useState(false);

  const handleSaveUser = (user: IUser) => {
    dispatch({
      type: user.id ? "[User] - UpdateUser" : "[User] - AddUser",
      payload: user,
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
  };

  const handleRemoveUser = (id: number) => {
    Swal.fire({
      title: "Estas seguro de eliminar este usuario?",
      text: "No puedes revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
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
  };

  return {
    ...state,
    userSelected,
    initialUsers,
    initialUser,
    visibleForm,
    handleSaveUser,
    handleRemoveUser,
    onSelectedUser,
    setVisibleForm,
    handleVisibleForm,
  };
};
