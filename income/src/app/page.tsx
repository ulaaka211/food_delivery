"use client";

import { Stack } from "@mui/material";
import { HomeImg, OrderDetail } from "@/components";
import { Deliver } from "@/components";
import { All } from "@/components";
import { Cart } from "@/components";
import { foodParams } from "@/components/provider/AuthenticationProvider";

export default function Home() {
  return (
    <Stack>
      <HomeImg />
      <Deliver />
      <All />
      <Cart />
    </Stack>
  );
}
