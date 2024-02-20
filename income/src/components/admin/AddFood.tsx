"use client";

import { Button, Stack, Typography } from "@mui/material";
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
          <Button
            variant="text"
            onClick={() => {
              setOpen(true);
            }}
            sx={{
              color: "common.white",
              padding: "8px",
              bgcolor: "primary.main",
              borderRadius: "8px",
            }}
          >
            Add new food
          </Button>
          <CreateFood open={open} handleClose={() => setOpen(false)} />
        </Stack>
      </Stack>
    </Stack>
  );
};
