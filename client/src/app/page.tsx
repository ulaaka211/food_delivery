"use client";

import { Stack } from "@mui/material";
import { AllFoods, Deliver, HomeImg } from "@/components";
import { SelectedFoods } from "@/components";
import { useFood } from "@/provider/FoodProvider";

export default function Home() {
  const { categories } = useFood();
  return (
    <Stack>
      <HomeImg />
      <Deliver />
      <Stack gap={10} paddingY={15}>
        <AllFoods />
        {categories.map((item, index) => (
          <SelectedFoods key={index} category={item.foodCategory} />
        ))}
      </Stack>
    </Stack>
  );
}
