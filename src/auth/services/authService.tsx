import { ILogin } from "../../interfaces/user";

export const loginUser = (userLogin: ILogin) => {
  return userLogin.username === "admin" && userLogin.password === "admin";
};
