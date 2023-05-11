import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { AuthState } from "../context";
import { ILogin } from "../../interfaces/user";
import { authReducer } from "../context/authReducer";
import { loginUser } from "../services/authService";

const initialLogin: AuthState = JSON.parse(
  localStorage.getItem("login") ||
    JSON.stringify({
      isAuth: false,
      user: null,
    })
);

export const useAuth = () => {
  const [{ isAuth, user }, dispatch] = useReducer(authReducer, initialLogin);
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
  };

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth, navigate]);

  return {
    isAuth,
    user,
    handleLogin,
    handleLogout,
  };
};
