import { AuthState } from ".";
import { IUserLogin } from "../../interfaces/user";

type LoginActionType =
  | { type: "[Login] - Login"; payload: IUserLogin }
  | { type: "[Login] - Logout" };

export const authReducer = (
  state: AuthState,
  action: LoginActionType
): AuthState => {
  switch (action.type) {
    case "[Login] - Login":
      return { ...state, isAuth: true, user: action.payload };

    case "[Login] - Logout":
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};
