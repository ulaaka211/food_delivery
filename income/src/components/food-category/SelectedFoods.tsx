"use client";

import { Container, Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useFood } from "../provider/FoodProvider";
import { CardModel } from "..";

type SelectedFoodsProps = {
  category: string;
};

export const SelectedFoods = (props: SelectedFoodsProps) => {
  const { category } = props;
  const { foods } = useFood();
  return (
    <Stack>
      <Stack>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              padding={2}
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
              <Link href={"/food-menu"}>
                <Stack gap={2} direction={"row"} alignItems={"center"}>
                  <Typography color={"#18BA51"} fontSize={14} fontWeight={400}>
                    Бүгдийг харах
                  </Typography>
                  <Image src="/q.svg" alt="" width={10} height={15} />
                </Stack>
              </Link>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Grid container spacing={3}>
                {foods
                  .filter((item) => item.category == category)
                  .map((item, index) => (
                    <Grid key={index} item xs={12} md={3}>
                      <CardModel {...item} />
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
