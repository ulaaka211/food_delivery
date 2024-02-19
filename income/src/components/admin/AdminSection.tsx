import { Stack } from "@mui/material";
import { AddCategory, AddFood } from "..";

export const AdminSection = () => {
  return (
    <Stack direction={"row"} height={"100vh"} width={"100vw"}>
      <AddCategory />
      <AddFood />
    </Stack>
  );
};
