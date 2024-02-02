"use client";

import { Stack } from "@mui/material";
import { CartCard, HomeImg } from "@/components";
import { Deliver } from "@/components";
import { All } from "@/components";
import { Cart } from "@/components";

export default function Home() {
  return (
    <Stack>
      <HomeImg />;
      <Deliver />
      <All />
      <Cart />
    </Stack>
  );
}
