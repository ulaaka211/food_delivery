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
  allOrders: Order[];
  setAllOrders: Dispatch<SetStateAction<Order[]>>;
  filteredFood: foodParams[];
  setFilteredFood: Dispatch<SetStateAction<foodParams[]>>;
  filterByDate: (startDate: string, endDate: string) => Promise<void>;
  filterByDay: (date: string) => Promise<void>;
  filterByWeek: (date: string) => Promise<void>;
  filterByMonts: (date: string) => Promise<void>;
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
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [filteredFood, setFilteredFood] = useState<foodParams[]>([]);

  const filterByDate = async (startDate: string, endDate: string) => {
    try {
      const { data } = await api.get("/filter/filterByDate", {
        params: { startDate, endDate },
      });
      setFoods(data);
      console.log(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const filterByDay = async (date: string) => {
    try {
      const { data } = await api.get("/filter/filterByDay", {
        params: { date },
      });
      setFilteredFood(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const filterByWeek = async (date: string) => {
    try {
      const { data } = await api.get("/filter/filterByWeek", {
        params: { date },
      });
      setFilteredFood(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const filterByMonts = async (date: String) => {
    try {
      const { data } = await api.get("/filter/filterByDate", {
        params: { date },
      });
      setFilteredFood(data);
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
  }, [refresh]);

  return (
    <FoodContext.Provider
      value={{
        filteredFood,
        setFilteredFood,
        filterByDate,
        filterByDay,
        filterByWeek,
        filterByMonts,
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

// const FilterFoodsByDate = () => {
//   const searchParams = useSearchParams();
//   const [filteredFoods, setFilteredFoods] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const startDate = searchParams.get('startDate');
//     const endDate = searchParams.get('endDate');

//     if (startDate && endDate) {
//       fetchFilteredFoods(startDate, endDate);
//     }
//   }, [searchParams]);

//   const fetchFilteredFoods = async (startDate, endDate) => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await fetch(`/api/foods/filter-by-date?startDate=${startDate}&endDate=${endDate}`);

//       if (!response.ok) {
//         throw new Error('Failed to filter foods by date');
//       }

//       const data = await response.json();
//       setFilteredFoods(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateUrlParams = (startDate, endDate) => {
//     const params = new URLSearchParams();
//     if (startDate) params.set('startDate', startDate);
//     if (endDate) params.set('endDate', endDate);

//     window.history.replaceState(null, '', `?${params.toString()}`);
//   };

//   return (
//     <div>
//       <h2>Filter Foods by Date</h2>
//       <div>
//         <label>
//           Start Date:
//           <input
//             type="date"
//             value={searchParams.get('startDate') || ''}
//             onChange={(e) => updateUrlParams(e.target.value, searchParams.get('endDate'))}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           End Date:
//           <input
//             type="date"
//             value={searchParams.get('endDate') || ''}
//             onChange={(e) => updateUrlParams(searchParams.get('startDate'), e.target.value)}
//           />
//         </label>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       <div>
//         {loading ? (
//           <p>Loading...</p>
//         ) : filteredFoods.length > 0 ? (
//           <ul>
//             {filteredFoods.map((food) => (
//               <li key={food._id}>
//                 {food.foodName} - {food.price} USD
//               </li>
//             ))}
//           </ul>
//         ) : (
//           !loading && <p>No foods found for the selected dates.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterFoodsByDate;
