import { useReducer } from "react";
import Swal from "sweetalert2";
import { ILogin } from "../../interfaces/user";
import { LoginState, loginReducer } from "../reducers/loginReducer";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin: LoginState = JSON.parse(
  localStorage.getItem("login") ||
    JSON.stringify({
      isAuth: false,
      user: null,
    })
);

export const useAuth = () => {
  const [{ isAuth, user }, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();

  const handleLogin = (userLogin: ILogin) => {
    const isLogged = loginUser(userLogin);

    // TODO: Backend de Login
    if (!isLogged) {
      Swal.fire("Error de Login", "Credenciales invalidas", "error");
      return;
    }
    // TODO: CAMBIAR POR BACKEND
    const user = { username: "admin" };
    dispatch({
      type: "[Login] - Login",
      payload: user,
    });

    navigate("/users");

    localStorage.setItem(
      "login",
      JSON.stringify({
        isAuth: true,
        user,
      })
    );
  };

  const handleLogout = () => {
    dispatch({
      type: "[Login] - Logout",
    });
    localStorage.removeItem("login");
    navigate("/login");
  };
  return {
    isAuth,
    user,
    handleLogin,
    handleLogout,
  };
};
