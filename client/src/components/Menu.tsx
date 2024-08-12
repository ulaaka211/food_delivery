"use client";

import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";

import { useFood } from "../provider/FoodProvider";
import { FoodModel } from "./food-category/FoodModel";

export const Menu = () => {
  const { categories, foods, selectedCategory, setSelectedCategory } =
    useFood();

  return (
    <Stack paddingBottom={10} width={"100vw"}>
      <Container maxWidth="xl">
        <Stack width={"100%"} minHeight={"30vh"}>
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
                onClick={() => {
                  setSelectedCategory((prevCategory) =>
                    prevCategory === item.foodCategory ? "" : item.foodCategory
                  );
                }}
                bgcolor={
                  item.foodCategory == selectedCategory
                    ? "primary.main"
                    : "common.white"
                }
                border={1}
                justifyContent={"center"}
                alignItems={"center"}
                width={"15vw"}
                borderRadius={"18px"}
                paddingY={1}
                paddingX={2}
                sx={{
                  cursor: "pointer",
                }}
              >
                <Typography
                  key={item.foodCategory}
                  fontSize={18}
                  fontWeight={600}
                  color={
                    item.foodCategory == selectedCategory
                      ? "common.white"
                      : "common.black"
                  }
                >
                  {item.foodCategory}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Grid container spacing={3}>
            {foods
              .filter((item) => item.category.includes(selectedCategory))
              .map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <FoodModel {...item} />
                </Grid>
              ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};
