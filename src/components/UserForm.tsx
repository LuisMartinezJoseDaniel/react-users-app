import { FC, FormEvent, useEffect, useState } from "react";
import { IUser } from "../interfaces/user";
import { Alert } from "./Alert";

interface Props {
  children?: React.ReactNode;
  handleSaveUser: (user: IUser) => void;
  initialUser: IUser;
  userSelected?: IUser;
}

export const UserForm: FC<Props> = ({
  handleSaveUser,
  initialUser,
  userSelected,
}) => {
  const [userForm, setUserForm] = useState<IUser>(initialUser);
  const [error, setError] = useState({ message: "", hasError: false });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUser = {
      ...userForm,
      [e.target.name]: e.target.value,
    };
    setUserForm(newUser);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(userForm).includes("")) {
      setError({
        message: "Debe de completar los campos del formulario",
        hasError: true,
      });
      return;
    }

    handleSaveUser(userForm);
    setError({
      message: "",
      hasError: false,
    });

    setUserForm(initialUser);
  };

  useEffect(() => {
    if (!userSelected) return;

    setUserForm({ ...userSelected });
  }, [userSelected]);

  return (
    <form className="" onSubmit={handleSubmit}>
      {error.hasError && <Alert alert={error} />}
      <input
        value={userForm.username}
        onChange={onChange}
        type="text"
        className="form-control my-3 w-100"
        placeholder="Username"
        name="username"
      />
      <input
        value={userForm.email}
        onChange={onChange}
        type="text"
        className="form-control my-3 w-100"
        placeholder="Email"
        name="email"
      />
      {!userForm.id && (
        <input
          value={userForm.password}
          onChange={onChange}
          type="password"
          className="form-control my-3 w-100"
          placeholder="Password"
          name="password"
        />
      )}
      <button className="btn btn-primary " type="submit">
        {userForm.id ? "Update" : "Create"}
      </button>
    </form>
  );
};