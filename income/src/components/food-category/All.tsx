import { Stack } from "@mui/material";
import { Sale } from "..";
import { Salad } from "..";
import { Main } from "..";
import { Dessert } from "..";

export const All = () => {
  return (
    <Stack spacing={10} paddingY={"122px"}>
      <Sale />
      <Main />
      <Salad />
      <Dessert />
    </Stack>
  );
};
