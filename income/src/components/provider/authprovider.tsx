"use client";

import { api } from "../common";
import {
  PropsWithChildren,
  useContext,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";

type signupParams = {
  email: string;
  password: string;
  name: string;
  address: string;
};

type loginParams = {
  email: string;
  password: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  signup: (params: signupParams) => void;
  login: (params: loginParams) => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/login", params);

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      router.push("/");
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

  const signup = async (params: signupParams) => {
    alert("asdkfjk");
    try {
      const { data } = await api.post("/signup", params);
      router.push("/");
      toast.success("Амжилттай бүртгэгдлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        signup,
        index,
        setIndex,
        open,
        setOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
