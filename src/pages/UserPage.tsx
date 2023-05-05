import { FC } from "react";
import { Modal } from "../components/Modal";
import { UserForm } from "../components/UserForm";
import { UsersList } from "../components/UsersList";
import { Navbar } from "../components/layout/Navbar";

import { IUser } from "../interfaces/user";

interface Props {
  children?: React.ReactNode;
  userSelected: IUser;
  initialUser: {
    username: string;
    email: string;
    password: string;
  };
  visibleForm: boolean;
  handleSaveUser: (user: IUser) => void;
  handleRemoveUser: (id: number) => void;
  onSelectedUser: (id: number) => void;

  handleVisibleForm: (isVisible: boolean) => void;
  users: IUser[];
}

export const UsersPage: FC<Props> = ({
  handleSaveUser,
  initialUser,
  userSelected,
  users,
  handleRemoveUser,
  onSelectedUser,
  visibleForm,
  handleVisibleForm,
}) => {
  return (
    <>
      <main className="container my-4">
        <h2>Users App</h2>

        <div className="row">
          {visibleForm && (
            <Modal
              title={userSelected.id ? "Editar Usuario" : "Crear Usuarios"}
            >
              <UserForm
                handleSaveUser={handleSaveUser}
                initialUser={initialUser}
                userSelected={userSelected}
                handleVisibleForm={handleVisibleForm}
                showCloseButton
              />
            </Modal>
          )}

          <div className="col">
            {!visibleForm && (
              <button
                className="btn btn-primary my-2"
                type="button"
                onClick={() => handleVisibleForm(true)}
              >
                Nuevo Usuario
              </button>
            )}
            {users.length === 0 ? (
              <div className="alert alert-warning text-center">
                No hay usuarios
              </div>
            ) : (
              <UsersList
                users={users}
                handleRemoveUser={handleRemoveUser}
                onSelectedUser={onSelectedUser}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
};
