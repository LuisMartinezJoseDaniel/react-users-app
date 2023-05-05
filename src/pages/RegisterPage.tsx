import { FC, useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";
import { IUser } from "../interfaces/user";
import { useParams } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  handleSaveUser: (user: IUser) => void;
  initialUser: IUser;
  users?: IUser[];
}

export const RegisterPage: FC<Props> = ({
  handleSaveUser,
  initialUser,
  users,
}) => {
  const [userSelected, setUserSelected] = useState(initialUser);
  const { id } = useParams();

  useEffect(() => {
    if (!users || !id) return;

    const user = users.find((u) => u.id === +id);

    if (!user) return;

    setUserSelected(user);
  }, [id, users]);

  return (
    <div className="container my-4">
      <h4>{userSelected.id ? "Editar usuario" : "Registrar usuario"}</h4>
      <div className="row">
        <div className="col">
          <UserForm
            handleSaveUser={handleSaveUser}
            userSelected={userSelected}
            initialUser={initialUser}
          />
        </div>
      </div>
    </div>
  );
};
