import { FC, useContext, useEffect } from "react";
import { Modal } from "../components/Modal";
import { UserForm } from "../components/UserForm";
import { UsersList } from "../components/UsersList";

import { UserContext } from "../context";

interface Props {
  children?: React.ReactNode;
}

export const UsersPage: FC<Props> = () => {
  const { users, visibleForm, userSelected, handleVisibleForm, getUsers } =
    useContext(UserContext);

  useEffect(() => {
    getUsers();
  });

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
              <UsersList />
            )}
          </div>
        </div>
      </main>
    </>
  );
};
