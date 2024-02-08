"use client";

import { Stack } from "@mui/material";
import { HomeImg } from "@/components";
import { Deliver } from "@/components";
import { All } from "@/components";
import { Cart } from "@/components";
import { EditProfileImg } from "@/components";

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
