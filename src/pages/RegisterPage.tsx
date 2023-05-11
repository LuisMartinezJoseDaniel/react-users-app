import { FC, useContext, useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";

import { useParams } from "react-router-dom";
import { UserContext } from "../context";

interface Props {
  children?: React.ReactNode;
}

export const RegisterPage: FC<Props> = () => {
  const { initialUser, users } = useContext(UserContext);

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
          <UserForm userSelected={userSelected} />
        </div>
      </div>
    </div>
  );
};
