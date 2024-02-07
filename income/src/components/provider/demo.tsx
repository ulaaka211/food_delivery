// "use client";

// import { PropsWithChildren, useContext, createContext, useState } from "react";

// const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// type AuthContextType = {
//   isLogged: boolean;
//   count: Number;
// };

// type Food = {
//   _id: string;
// };

// type CartItem = {
//   food: Food;
//   quantity: number;
// };

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [open, setIsOpen] = useState();

//   const [foods, setFoods] = useState<CartItem[]>([
//     {
//       food: ,
//       quantity: 5
//     },
//     {
//       food:,
//       quantity:1
//     }
//   ]);

//   handleAddFood

//   return (
//     <AuthContext.Provider
//       value={{
//         isLogged,
//         count,

//       }}
//     >
//       {children}
//       <Drawer foods={foods} />
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
