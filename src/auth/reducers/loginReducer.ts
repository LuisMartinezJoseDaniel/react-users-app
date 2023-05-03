import { IUserLogin } from "../../interfaces/user";

export interface LoginState {
  isAuth: boolean;
  user: IUserLogin | null;
}

type LoginActionType =
  | { type: "[Login] - Login"; payload: IUserLogin }
  | { type: "[Login] - Logout" };

export const loginReducer = (
  state: LoginState,
  action: LoginActionType
): LoginState => {
  switch (action.type) {
    case "[Login] - Login":
      return { ...state, isAuth: true, user: action.payload };

    case "[Login] - Logout":
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};
