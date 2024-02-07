import { Login } from "@/components/login n sign up /Login";

type CustomLoginProps = {
  label: string;
  variant: string;
};

export default function CustomLogin(props: CustomLoginProps) {
  return <Login />;
}
