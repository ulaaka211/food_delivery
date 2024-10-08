"use client";

import { Container, Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useFood } from "../../provider/FoodProvider";
import { CardModel } from "..";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FoodModel } from "./FoodModel";

type SelectedFoodsProps = {
  category: string;
};

export const SelectedFoods = (props: SelectedFoodsProps) => {
  const router = useRouter();
  const { category } = props;
  const { foods, setSelectedCategory } = useFood();

  return (
    <Stack>
      <Stack>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              paddingY={2}
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Stack spacing={1} direction={"row"} alignItems={"center"}>
                <Image src="/Star 1.svg" alt="" width={32} height={32} />
                <Typography fontSize={22} fontWeight={700}>
                  {category}
                </Typography>
              </Stack>

              <Stack
                sx={{
                  cursor: "pointer",
                }}
                gap={2}
                direction={"row"}
                alignItems={"center"}
                onClick={() => {
                  setSelectedCategory(category);
                  router.push("/food-menu");
                }}
              >
                <Typography color={"#18BA51"} fontSize={14} fontWeight={400}>
                  Бүгдийг харах
                </Typography>
                <Image src="/q.svg" alt="" width={10} height={15} />
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Grid container spacing={3}>
                {foods
                  .filter((item) => item.category.includes(category))
                  .filter((_item, index) => index < 4)
                  .map((item, index) => (
                    <Grid key={index} item xs={12} md={3}>
                      <FoodModel {...item} />
                    </Grid>
                  ))}
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};
