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

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
import { useAuth } from "./AuthenticationProvider";
import {
  Category,
  Order,
  cartItem,
  foodParams,
  updateCategoryParams,
  updateFoodParams,
} from "@/types";

type FoodContextType = {
  getFood: () => Promise<void>;
  createFood: (params: foodParams) => Promise<void>;
  getCategories: () => Promise<void>;
  postCategory: (foodCategory: string) => Promise<void>;
  updateFood: (params: updateFoodParams) => Promise<void>;
  deleteFood: (_id: string) => Promise<void>;
  updateCategory: (params: updateCategoryParams) => Promise<void>;
  deleteCategory: (_id: string) => Promise<void>;
  categories: Category[];
  foods: foodParams[];
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  foodCount: number;
  setFoodCount: Dispatch<SetStateAction<number>>;
  basket: cartItem[];
  setBasket: Dispatch<SetStateAction<cartItem[]>>;
  names: string;
  setNames: Dispatch<SetStateAction<string>>;
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  allOrders: Order[];
  setAllOrders: Dispatch<SetStateAction<Order[]>>;
};

export const FoodContext = createContext<FoodContextType>(
  {} as FoodContextType
);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const { refresh, setRefresh } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<foodParams[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [foodCount, setFoodCount] = useState(1);
  const [basket, setBasket] = useState<cartItem[]>([]);
  const [names, setNames] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [allOrders, setAllOrders] = useState<Order[]>([]);

  const createFood = async (params: foodParams) => {
    try {
      const { data } = await api.post("/food/createFood", params, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setRefresh(refresh + 1);
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

  const updateFood = async (params: updateFoodParams) => {
    try {
      const { data } = await api.put(`/food/updateFood/${params._id}`, params, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setRefresh(refresh + 1);
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

  const deleteFood = async (_id: string) => {
    try {
      const { data } = await api.delete(`/food/deleteFood/${_id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setRefresh(refresh + 1);
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
        "category/createCategory",
        { foodCategory },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
      setRefresh(refresh + 1);
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

  const updateCategory = async (params: updateCategoryParams) => {
    try {
      const { data } = await api.put(
        `/category/updateCategory/${params._id}`,
        params,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setRefresh(refresh + 1);
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

  const deleteCategory = async (_id: string) => {
    try {
      const { data } = await api.delete(`/category/deleteCategory/${_id}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setRefresh(refresh + 1);
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

  const getCategories = async () => {
    try {
      const { data } = await api.get("category/getCategory", {
        headers: {
          Authorization: localStorage.getItem("token" ?? "temporaryAdmin"),
        },
      });
      setCategories(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const getFood = async () => {
    try {
      const { data } = await api.get("food/getFood", {
        headers: {
          Authorization: localStorage.getItem("token" ?? "temporaryAdmin"),
        },
      });
      setFoods(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  useEffect(() => {
    getCategories();
    getFood();
  }, [refresh]);

  return (
    <FoodContext.Provider
      value={{
        allOrders,
        setAllOrders,
        openDrawer,
        setOpenDrawer,
        setNames,
        names,
        updateCategory,
        deleteCategory,
        deleteFood,
        updateFood,
        foods,
        getFood,
        categories,
        getCategories,
        postCategory,
        createFood,
        selectedCategory,
        setSelectedCategory,
        foodCount,
        setFoodCount,
        basket,
        setBasket,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  return useContext(FoodContext);
};
