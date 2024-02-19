"use client";

import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { CreateFood } from "./CreateFood";

export const AddFood = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack width={"72.5vw"}>
      <Stack
        width={"100%"}
        height={"100vh"}
        paddingTop={6}
        paddingX={4}
        bgcolor={"#F7F7F8"}
      >
        <Stack
          direction={"row"}
          width={"86.2%"}
          justifyContent={"space-between"}
        >
          <Typography fontSize={22} fontWeight={700}>
            Breakfast
          </Typography>
          <Typography
            onClick={() => {
              setOpen(true);
            }}
            bgcolor={"primary.main"}
            p={1}
            color={"common.white"}
            borderRadius={1}
          >
            Add new food
          </Typography>
          <CreateFood open={open} handleClose={() => setOpen(false)} />
        </Stack>
      </Stack>
    </Stack>
  );
};
