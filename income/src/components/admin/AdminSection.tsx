import { Stack } from "@mui/material";
import { AddNewCategory, AddNewFood } from "..";

export const AdminSection = () => {
  return (
    <Stack direction={"row"} height={"100vh"} width={"100vw"}>
      <AddNewCategory />
      <AddNewFood />
    </Stack>
  );
};
