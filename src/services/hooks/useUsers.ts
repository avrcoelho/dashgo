import { useQuery } from "react-query";

import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get("users");

  return data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
};

export const useUsers = () => {
  return useQuery("users", getUsers, {
    staleTime: 5000,
  });
};
