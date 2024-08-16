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
import { AxiosError } from "axios";
import {
  checkresetemailParams,
  checkresetotbParams,
  loginParams,
  signupParams,
  updateUserParams,
} from "@/types";

type AuthContextType = {
  refresh: number;
  setRefresh: Dispatch<SetStateAction<number>>;
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  userOtb: string;
  setUserOtb: Dispatch<SetStateAction<string>>;
  user: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    userImg: string;
  };
  setUser: Dispatch<
    SetStateAction<{
      _id: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      userImg: string;
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
  updateUser: (params: updateUserParams) => Promise<void>;
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
    _id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    userImg: "",
  });

  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/auth/login", params);

      const { token } = data;

      localStorage.setItem("token", token);
      setIsLoggedIn(true);
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
    }
  };

  const signout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setRefresh(refresh + 1);
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
    }
  };

  const updateUser = async (params: updateUserParams) => {
    try {
      const { data } = await api.put(`/user/updateUser/${params._id}`, params, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setRefresh(refresh + 1);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
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
    if (isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [isLoggedIn, refresh]);

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
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
