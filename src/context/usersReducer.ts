import { UserState } from ".";
import { IUser } from "../interfaces/user";

type UserActionType =
  | { type: "[User] - AddUser"; payload: IUser }
  | { type: "[User] - UpdateUser"; payload: IUser }
  | { type: "[User] - LoadUsersFromApi"; payload: IUser[] }
  | {
      type: "[User] - RemoveUser";
      payload: number;
    };

export const usersReducer = (
  state: UserState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case "[User] - AddUser":
      return {
        ...state,
        users: [...state.users, { ...action.payload }],
      };
    case "[User] - RemoveUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "[User] - UpdateUser":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return { ...action.payload, password: user.password };
          }
          return user;
        }),
      };
    case "[User] - LoadUsersFromApi":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
