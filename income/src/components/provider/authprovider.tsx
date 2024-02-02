"use client";

import { api } from "../common";
import {
  PropsWithChildren,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type AuthContextType = {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/login", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/food-menu");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    setIsReady(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
