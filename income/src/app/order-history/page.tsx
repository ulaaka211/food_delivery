import { OrderDetails, OrderHistory } from "@/components";
import { Container, Stack } from "@mui/material";

export default function Order_History() {
  return (
    <Stack width={"100vw"} height={"92vh"}>
      <Container maxWidth="xl">
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          paddingTop={"8%"}
        >
          <OrderHistory />
          <OrderDetails />
        </Stack>
      </Container>
    </Stack>
  );
}
