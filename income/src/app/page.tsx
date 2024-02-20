"use client";

import { Stack } from "@mui/material";
import { HomeImg } from "@/components";
import { Deliver } from "@/components";
import { All } from "@/components";
import { Cart } from "@/components";

// type ProfileProps = {
//   handleClose: () => void;
//   open: boolean;
// };

export default function Home() {
  // const { show, handleClose } = props;
  return (
    <Stack>
      <HomeImg />
      <Deliver />
      <All />
      <Cart />
    </Stack>
  );
}
