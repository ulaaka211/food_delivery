import { Stack } from "@mui/material";
import { HomeImg } from "@/components";
import { Deliver } from "@/components";
import { All } from "@/components";
import { Cart } from "@/components";

export default function HomePage() {
  return (
    <Stack>
      <HomeImg />;
      <Deliver />
      <All />
      <Cart />
    </Stack>
  );
}
