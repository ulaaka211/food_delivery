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

type checkresetemailParams = {
  email: string;
};

type checkresetotbParams = {
  code: string;
};

type AuthContextType = {
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  userOtb: string;
  setUserOtb: Dispatch<SetStateAction<string>>;
  user: {};
  isLoggedIn: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  signup: (params: signupParams) => Promise<void>;
  login: (params: loginParams) => Promise<void>;
  checkresetemail: (params: checkresetemailParams) => Promise<void>;
  checkresetotb: (params: checkresetotbParams) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userOtb, setUserOtb] = useState("");
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState("");

  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/login", params);

      const { token } = data;
      console.log(data);
      localStorage.setItem("token", token);

      setIsLoggedIn(true);

      toast.success("Амжилттай нэвтэрлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      router.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } finally {
    }
  };

  const getUser = async () => {
    try {
      const { data } = await api.get("/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getUser();
    }
  }, [isLoggedIn]);

  const checkresetemail = async (params?: checkresetemailParams) => {
    try {
      const { data } = await api.post("/sendemail", params);

      toast.success("Амжилттай илгээгдлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setIndex((prev) => prev + 1);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  const checkresetotb = async (params?: checkresetotbParams) => {
    try {
      const { data } = await api.post("/sendemail", params);

      toast.success("Амжилттай илгээгдлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setIndex((prev) => prev + 1);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/signup", params);
      router.push("/");
      setOpen(true);

      toast.success("Амжилттай бүртгэгдлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
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
        userEmail,
        setUserEmail,
        userOtb,
        setUserOtb,
        isLoggedIn,
        login,
        signup,
        index,
        setIndex,
        open,
        setOpen,
        checkresetemail,
        checkresetotb,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
