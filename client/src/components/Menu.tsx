"use client";

import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { useFood } from "../provider/FoodProvider";
import { FoodModel } from "./food-category/FoodModel";
import { DateFilter } from ".";
import Image from "next/image";

export const Menu = () => {
  const { categories, foods, selectedCategory, setSelectedCategory } =
    useFood();

  return (
    <Stack paddingBottom={9} width={"100vw"}>
      <Container maxWidth="xl">
        <Stack width={"100%"} height={"100%"}>
          <Stack paddingTop={4} paddingBottom={4}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
              overflow={"auto"}
            >
              <Stack gap={3} direction={"row"} py={0.1}>
                {categories.map((item) => (
                  <Stack
                    flex={1}
                    onClick={() => {
                      setSelectedCategory((prevCategory) =>
                        prevCategory === item.foodCategory
                          ? ""
                          : item.foodCategory
                      );
                    }}
                    bgcolor={
                      item.foodCategory == selectedCategory
                        ? "primary.main"
                        : "common.white"
                    }
                    border={1.5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"300px"}
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
            </Stack>
          </Stack>
          <DateFilter />
          <Stack overflow={"scroll"} borderRadius={3} height={"640px"} mt={4}>
            {foods.length > 0 ? (
              <Grid container spacing={3}>
                {foods
                  .filter((item) => item.category.includes(selectedCategory))
                  .map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                      <FoodModel {...item} />
                    </Grid>
                  ))}
              </Grid>
            ) : (
              <Stack
                height={"70vh"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={4}
                >
                  <Image src="/NotFound.svg" width={133} height={133} alt="" />
                  <Typography fontSize={14} fontWeight={400}>
                    Уучлаарай илэрц олдсонгүй...
                  </Typography>
                </Stack>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
