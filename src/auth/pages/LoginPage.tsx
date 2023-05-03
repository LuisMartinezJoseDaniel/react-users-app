import { useState, FormEvent, FC } from "react";
import { Modal } from "../../components/Modal";
import Swal from "sweetalert2";
import { ILogin } from "../../interfaces/user";

const initialLoginForm: ILogin = {
  username: "",
  password: "",
};

interface Props {
  children?: React.ReactNode;
  handleLogin: (userLogin: ILogin) => void;
}

export const LoginPage: FC<Props> = ({ handleLogin }) => {
  const [loginForm, setLoginForm] = useState<ILogin>(initialLoginForm);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [target.name]: target.value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(loginForm).includes("")) {
      Swal.fire(
        "Error de validacion",
        "Todos los campos son requeridos",
        "error"
      );
      return;
    }

    handleLogin(loginForm);

    setLoginForm(initialLoginForm);
  };

  return (
    <Modal title="Login page">
      <form onSubmit={onSubmit}>
        <input
          onChange={onInputChange}
          value={loginForm.username}
          type="text"
          className="form-control my-3 w-100"
          placeholder="Username"
          name="username"
        />
        <input
          onChange={onInputChange}
          value={loginForm.password}
          type="password"
          className="form-control my-3 w-100"
          placeholder="Password"
          name="password"
        />

        <button className="btn btn-primary w-25" type="submit">
          Login
        </button>
      </form>
    </Modal>
  );
};
