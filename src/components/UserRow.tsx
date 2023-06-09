import { FC, useContext } from "react";
import { IUser } from "../interfaces/user";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context";

interface Props {
  children?: React.ReactNode;
  user: IUser;
}

export const UserRow: FC<Props> = ({ user: { id, username, email } }) => {
  const { handleRemoveUser, onSelectedUser } = useContext(UserContext);

  const onRemoveUser = () => {
    if (!id) return;
    handleRemoveUser(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          className="btn btn-secondary btn-sm"
          type="button"
          onClick={() => {
            if (!id) return;
            onSelectedUser(id);
          }}
        >
          Update
        </button>
      </td>
      <td>
        <NavLink className="btn btn-warning" to={`/users/${id}/edit`}>
          Update 2
        </NavLink>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          type="button"
          onClick={onRemoveUser}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
