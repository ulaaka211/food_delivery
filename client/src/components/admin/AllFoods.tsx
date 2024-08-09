"use client";

import { Button, Grid, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CreateNewFood } from "./CreateNewFood";
import { CardModel } from "..";
import { useFood } from "../../provider/FoodProvider";
import { SelectAllRounded } from "@mui/icons-material";

type AllFoodsProps = {
  selectedCategory: string;
};

export const AllFoods = (props: AllFoodsProps) => {
  const { foods } = useFood();
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  return (
    <Stack width={"77.5%"} height={"100%"}>
      <Stack
        width={"100%"}
        overflow={"scroll"}
        paddingY={6}
        paddingLeft={6}
        gap={6}
        bgcolor={"#F7F7F8"}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography fontSize={22} fontWeight={700}>
            {props.selectedCategory ? props.selectedCategory : "All Foods "}
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
          {foods
            .filter((item) => item.category.includes(props.selectedCategory))
            .map((item, index) => (
              <Grid key={index} item xs={12} md={3}>
                <CardModel {...item} />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
