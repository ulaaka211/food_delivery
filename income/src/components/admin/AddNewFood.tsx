"use client";

import { Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CreateNewFood } from "./CreateNewFood";
import { useRouter } from "next/navigation";
import { useAuth } from "../provider/AuthenticationProvider";
import { CardSale } from "..";

export const AddNewFood = () => {
  const { foods, getFood } = useAuth();
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  return (
    <Stack width={"75.7%"}>
      <Stack
        width={"100%"}
        height={"100vh"}
        paddingTop={6}
        paddingLeft={4}
        gap={6}
        bgcolor={"#F7F7F8"}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
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
          <CreateNewFood
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            open={open}
            handleClose={() => setOpen(false)}
          />
        </Stack>
        <Grid container spacing={3}>
          {foods.map((item, index) => (
            <Grid key={index} item xs={12} md={3}>
              <CardSale {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
