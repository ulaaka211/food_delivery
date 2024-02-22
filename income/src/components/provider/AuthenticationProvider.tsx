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

type createfoodParams = {
  name: string;
  ingredients: string;
  discount: number;
  foodimg: string;
  price: number;
};

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
type Category = {
  foodCategory: string;
};
type AuthContextType = {
  userEmail: string;

  setUserEmail: Dispatch<SetStateAction<string>>;
  userOtb: string;
  setUserOtb: Dispatch<SetStateAction<string>>;
  user: {
    name: string;
    email: string;
    address: string;
    password: string;
    profileImg: string;
    role: string;
  };
  setUser: Dispatch<
    SetStateAction<{
      name: string;
      email: string;
      address: string;
      password: string;
      profileImg: string;
      role: string;
    }>
  >;
  isAdmin: boolean;
  isLoggedIn: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  createfood: (params: createfoodParams) => Promise<void>;
  getCategories: () => Promise<void>;
  postCategory: (foodCategory: string) => Promise<void>;
  signup: (params: signupParams) => Promise<void>;
  login: (params: loginParams) => Promise<void>;
  signout: () => void;
  categories: Category[];
  checkresetemail: (params: checkresetemailParams) => Promise<void>;
  checkresetotb: (params: checkresetotbParams) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [userOtb, setUserOtb] = useState("");
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    role: "",
  });
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
      const { role } = data;
      if (role == "admin") {
        setIsAdmin(true);
      }
      // toast.success("", {
      //   position: "top-center",
      //   hideProgressBar: true,
      // });
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

  const createfood = async (params: createfoodParams) => {
    try {
      const { data } = await api.post("/foods/createfood", params);
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

  const postCategory = async (foodCategory: string) => {
    try {
      const { data } = await api.post(
        "foods/createCategory",
        { foodCategory },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
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

  const getCategories = async () => {
    try {
      const { data } = await api.get("foods/getCategory", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setCategories(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  useEffect(() => {
    getCategories();
  });

  return (
    <AuthContext.Provider
      value={{
        categories,
        getCategories,
        postCategory,
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
        createfood,
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
