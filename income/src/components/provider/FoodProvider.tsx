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

export type foodParams = {
  name: string;
  ingredients: string;
  discount: number;
  foodimg: string;
  price: number;
};

type Category = {
  foodCategory: string;
};
type FoodContextType = {
  getFood: () => Promise<void>;
  createFood: (params: foodParams) => Promise<void>;
  getCategories: () => Promise<void>;
  postCategory: (foodCategory: string) => Promise<void>;
  categories: Category[];
  foods: foodParams[];
};

export const FoodContext = createContext<FoodContextType>(
  {} as FoodContextType
);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<foodParams[]>([]);

  const createFood = async (params: foodParams) => {
    try {
      const { data } = await api.post("/foods/createFood", params);
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

  const getFood = async () => {
    try {
      const { data } = await api.get("foods/getFood", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setFoods(data);
    } catch (error) {
      console.log(error), "FFF";
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
    getFood();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        foods,
        getFood,
        categories,
        getCategories,
        postCategory,
        createFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  return useContext(FoodContext);
};
