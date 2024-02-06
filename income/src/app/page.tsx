"use client";

import { Stack } from "@mui/material";
import { CartCard, HomeImg, MyProfile } from "@/components";
import { Deliver } from "@/components";
import { All } from "@/components";
import { Cart } from "@/components";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Stack>
      <HomeImg />;
      <Deliver />
      <All />
      <Cart />
      <MyProfile />
    </Stack>
  );
}
