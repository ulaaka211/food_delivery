import { useFormik } from "formik";
import { PropsWithChildren, createContext } from "react";
import * as yup from "yup";

const ForgetContext = createContext<ForgetContextType>({} as ForgetContextType);

const validationSchema = yup.object({});

type State = {
  email: String;
  password: String;
};

type ForgetContextType = {
  email: State;
  password: State;
};

export const ForgetProvider = ({ children }: PropsWithChildren) => {
  return <ForgetContext.Provider value={{}}>{children}</ForgetContext.Provider>;
};
