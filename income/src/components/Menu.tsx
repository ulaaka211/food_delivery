"use client";

import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { CardModel } from ".";
import { useFood } from "./provider/FoodProvider";

const tabs = [
  {
    link: "/breakfast",
    label: "Breakfast",
  },
  {
    link: "/soup",
    label: "Soup",
  },
  {
    link: "/main-course",
    label: "Main course",
  },
  {
    link: "/desserts",
    label: "Desserts",
  },
];

export const Menu = () => {
  const { categories, foods } = useFood();

  return (
    <Stack height={"120vh"} width={"100vw"}>
      <Container maxWidth="xl">
        <Stack width={"100%"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingTop={4}
            paddingBottom={10}
            gap={7}
          >
            {categories.map((item) => (
              <Stack
                flex={1}
                onClick={() => {}}
                border={1}
                justifyContent={"center"}
                alignItems={"center"}
                width={"15vw"}
                borderRadius={"18px"}
                paddingY={1}
                paddingX={2}
              >
                <Typography
                  key={item.foodCategory}
                  fontSize={18}
                  fontWeight={600}
                >
                  {item.foodCategory}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Grid container spacing={3}>
            {foods.filter.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <CardModel {...item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};
