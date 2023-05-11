import axios from "axios";
import { IUser } from "../interfaces/user";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const findAll = async (): Promise<IUser[]> => {
  try {
    const { data } = await axios<IUser[]>(`${BASE_URL}/users`);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const save = async ({
  username,
  email,
  password,
}: IUser): Promise<IUser | null> => {
  const { data } = await axios.post<IUser>(`${BASE_URL}/users`, {
    username,
    email,
    password,
  });

  return data;
};
export const update = async ({
  username,
  email,
  id,
}: IUser): Promise<IUser | null> => {
  if (!id) return null;

  const { data } = await axios.put<IUser>(`${BASE_URL}/users/${id}`, {
    username,
    email,
  });
  return data;
};

export const remove = async (
  id: number
): Promise<{ error: boolean; msg?: string }> => {
  if (!id) return { error: true, msg: `No existe el usuario con el id: ${id}` };
  try {
    await axios.delete<IUser>(`${BASE_URL}/users/${id}`);
    return { error: false };
  } catch (error) {
    console.log(error);
    return { error: true };
  }
};
