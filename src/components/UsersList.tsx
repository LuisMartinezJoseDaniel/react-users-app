import { FC, useContext } from "react";

import { UserRow } from "./UserRow";
import { UserContext } from "../context";

interface Props {
  children?: React.ReactNode;
}

export const UsersList: FC<Props> = () => {
  const { users } = useContext(UserContext);

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
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};
