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
  DeliveryAddress,
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
  setFoods: Dispatch<SetStateAction<foodParams[]>>;
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
  orderList: Order[];
  allOrders: Order[];
  filterByDate: (startDate: string, endDate: string) => Promise<void>;
  filterByDay: (date: string) => Promise<void>;
  filterByWeek: (date: string) => Promise<void>;
  filterByMonts: (date: string) => Promise<void>;
  createOrder: (
    deliveryAddress: DeliveryAddress,
    order: cartItem[]
  ) => Promise<void>;
  changeOrderStatus: (
    selectedCategoryID: string,
    newStatus: string,
    userID: string
  ) => Promise<void>;
};

export const FoodContext = createContext<FoodContextType>(
  {} as FoodContextType
);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { refresh, setRefresh } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<foodParams[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [foodCount, setFoodCount] = useState(1);
  const [basket, setBasket] = useState<cartItem[]>([]);
  const [names, setNames] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [allOrders, setAllOrders] = useState<Order[]>([]);

  const filterByDate = async (startDate: string, endDate: string) => {
    try {
      const { data } = await api.get("/filter/filterByDate", {
        params: { startDate, endDate },
      });
      setFoods(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const filterByDay = async (date: string) => {
    try {
      const { data } = await api.get("/filter/filterByDay", {
        params: { date },
      });
      setFoods(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const filterByWeek = async (date: string) => {
    try {
      const { data } = await api.get("/filter/filterByWeek", {
        params: { date },
      });
      setFoods(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const filterByMonts = async (date: String) => {
    try {
      const { data } = await api.get("/filter/filterByMonts", {
        params: { date },
      });
      setFoods(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

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

  const createOrder = async (
    deliveryAddress: DeliveryAddress,
    order: cartItem[]
  ) => {
    try {
      const { data } = await api.post(
        "/order/createOrder",
        { deliveryAddress, order },
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
    }
  };

  const changeOrderStatus = async (
    selectedOrderID: string,
    newStatus: string,
    userID: string
  ) => {
    try {
      const { data } = await api.post(
        "/order/changeOrderStatus",
        {
          selectedOrderID,
          newStatus,
          userID,
        },
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
    }
  };
  const getOrderList = async () => {
    try {
      const { data } = await api.get("/order/getOrderList", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setOrderList(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const getAllOrders = async () => {
    try {
      const { data } = await api.get("/order/getAllOrders", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setAllOrders(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await api.get("/getCategory");
      setCategories(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const getFood = async () => {
    try {
      const { data } = await api.get("/getFood");
      setFoods(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  useEffect(() => {
    const basket = localStorage.getItem("basket");
    if (basket) {
      setBasket(JSON.parse(basket));
    }
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (isFirstRender) return;
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    getCategories();
    getFood();
    getOrderList();
    getAllOrders();
  }, [refresh]);

  return (
    <FoodContext.Provider
      value={{
        createOrder,
        changeOrderStatus,
        filterByDate,
        filterByDay,
        filterByWeek,
        filterByMonts,
        allOrders,
        orderList,
        openDrawer,
        setOpenDrawer,
        setNames,
        names,
        updateCategory,
        deleteCategory,
        deleteFood,
        updateFood,
        foods,
        setFoods,
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
