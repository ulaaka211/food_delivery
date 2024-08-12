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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
import {
  checkresetemailParams,
  checkresetotbParams,
  loginParams,
  signupParams,
} from "@/types";

type AuthContextType = {
  refresh: number;
  setRefresh: Dispatch<SetStateAction<number>>;
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  userOtb: string;
  setUserOtb: Dispatch<SetStateAction<string>>;
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    userImg: string;
    role: string;
  };
  setUser: Dispatch<
    SetStateAction<{
      name: string;
      email: string;
      phone: string;
      address: string;
      password: string;
      userImg: string;
      role: string;
    }>
  >;
  isAdmin: boolean;
  isLoggedIn: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  signup: (params: signupParams) => Promise<void>;
  login: (params: loginParams) => Promise<void>;
  signout: () => void;
  checkresetemail: (params: checkresetemailParams) => Promise<void>;
  checkresetotb: (params: checkresetotbParams) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [refresh, setRefresh] = useState(1);
  const [userEmail, setUserEmail] = useState("");
  const [userOtb, setUserOtb] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    userImg: "",
    role: "",
  });

  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/auth/login", params);

      const { token } = data;

      localStorage.setItem("token", token);

      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setIsLoggedIn(true);
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

  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/auth/signup", params);
      router.push("/");
      setOpen(true);

      toast.success(data.message, {
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
      console.log(error);
    }
  };

  const signout = async () => {
    try {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setIsAdmin(false);
      router.push("/");
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const getUser = async () => {
    try {
      const { data } = await api.get("/user/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });

      setUser(data);
      const { role } = data;
      if (role == "admin") {
        setIsAdmin(true);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  const checkresetemail = async (params: checkresetemailParams) => {
    try {
      const { data } = await api.post("/email/sendEmail", params);

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

  const checkresetotb = async (params: checkresetotbParams) => {
    try {
      const { data } = await api.post("/email/resetPassword", params);

      toast.success(data.message, {
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

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getUser();
    }
  }, [isLoggedIn, refresh]);

  return (
    <AuthContext.Provider
      value={{
        refresh,
        setRefresh,
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
        setUser,
        isAdmin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
