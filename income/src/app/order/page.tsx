import { Address } from "@/components";
import { OrderCard } from "@/components";
import { Container, Stack } from "@mui/material";

export default function Order() {
  return (
    <Stack width={"100vw"} height={"100vh"}>
      <Container maxWidth="xl">
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          paddingTop={"8%"}
        >
          <Address />
          <OrderCard />
        </Stack>
      </Container>
    </Stack>
  );
}
