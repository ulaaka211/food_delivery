"use client";

import { OrderHistoryFoods } from "@/components/order, orderhistory n address/OrderDetails";
import { OrderHistory } from "@/components/order, orderhistory n address/OrderHistory";
import { useAuth } from "@/provider/AuthenticationProvider";
import { useFood } from "@/provider/FoodProvider";
import { Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Order_History() {
  const { isLoggedIn, refresh } = useAuth();
  const { orderList, allOrders } = useFood();
  const [selectedOrder, setSelectedOrder] = useState("");
  const router = useRouter();

  const foods = orderList.find((item) => item._id == selectedOrder)?.foods;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [refresh]);

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
          <Stack
            minHeight={"592x"}
            maxHeight={"592px"}
            maxWidth={"432px"}
            width={"100%"}
            height={"100%"}
            borderRadius={2}
            boxShadow={3}
            p={3}
            gap={2}
          >
            <Typography fontSize={20} fontWeight={400}>
              Захиалгын түүх
            </Typography>
            <Stack height={"487px"} overflow={"auto"}>
              {orderList
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .map((item, index) => (
                  <OrderHistory
                    key={index}
                    {...item}
                    setSelectedOrder={setSelectedOrder}
                  />
                ))}
            </Stack>
          </Stack>
          <Stack
            minHeight={"592x"}
            maxHeight={"592px"}
            maxWidth={"432px"}
            width={"100%"}
            height={"100%"}
            borderRadius={2}
            boxShadow={3}
            p={3}
            gap={2}
          >
            <Typography fontSize={20} fontWeight={400}>
              Захиалгын дэлгэрэнгүй
            </Typography>
            <Stack height={"487px"} overflow={"auto"}>
              {foods?.map((item, index) => (
                <OrderHistoryFoods key={index} {...item} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
