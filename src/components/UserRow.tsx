import { FC } from "react";
import { IUser } from "../interfaces/user";

interface Props {
  children?: React.ReactNode;
  user: IUser;
  handleRemoveUser: (id: number) => void;
  onSelectedUser: (id: number) => void;
}

export const UserRow: FC<Props> = ({
  user: { id, username, email },
  handleRemoveUser,
  onSelectedUser,
}) => {
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