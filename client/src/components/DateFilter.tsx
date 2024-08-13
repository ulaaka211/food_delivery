"use client";

import { Stack } from "@mui/material";
import { FilterByDate } from "./filter/filterByDate";
import { FilterByDays } from "./filter/filterByDays";

export const DateFilter = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
      <FilterByDate />
      <FilterByDays />
    </Stack>
  );
};
