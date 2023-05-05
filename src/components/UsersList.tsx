import { FC } from "react";
import { IUser } from "../interfaces/user";
import { UserRow } from "./UserRow";

interface Props {
  children?: React.ReactNode;
  users: IUser[];
  handleRemoveUser: (id: number) => void;
  onSelectedUser: (id: number) => void;
}

export const UsersList: FC<Props> = ({
  users,
  handleRemoveUser,
  onSelectedUser,
}) => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Update</th>
          <th>Update 2</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            handleRemoveUser={handleRemoveUser}
            onSelectedUser={onSelectedUser}
          />
        ))}
      </tbody>
    </table>
  );
};
