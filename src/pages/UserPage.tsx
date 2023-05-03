import { FC } from "react";
import { Modal } from "../components/Modal";
import { UserForm } from "../components/UserForm";
import { UsersList } from "../components/UsersList";
import { Navbar } from "../components/layout/Navbar";
import { useUsers } from "../hooks/useUsers";

interface Props {
  children?: React.ReactNode;
}

export const UsersPage: FC<Props> = () => {
  const {
    handleSaveUser,
    initialUser,
    userSelected,
    users,
    handleRemoveUser,
    onSelectedUser,
    visibleForm,
    handleVisibleForm,
  } = useUsers();
  return (
    <>
      <Navbar />
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
