import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

export const UsersApp = () => {
  const {
    handleSaveUser,
    initialUser,
    userSelected,
    users,
    handleRemoveUser,
    onSelectedUser,
  } = useUsers();
  return (
    <main className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm
            handleSaveUser={handleSaveUser}
            initialUser={initialUser}
            userSelected={userSelected}
          />
        </div>
        <div className="col">
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
  );
};
