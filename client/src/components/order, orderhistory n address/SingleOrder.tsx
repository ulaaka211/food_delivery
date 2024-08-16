import { useFood } from "@/provider/FoodProvider";
import { Order } from "@/types";
import { Grid, Stack, Typography } from "@mui/material";
import { DeliveryDining, RamenDining } from "@mui/icons-material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

type SingleOrderProps = {
  selectedOrder: string;
  setSelectedOrder: Dispatch<SetStateAction<string>>;
};

export const SingleOrder = (props: SingleOrderProps) => {
  const { allOrders, changeOrderStatus } = useFood();
  const { selectedOrder } = props;
  const foods = allOrders.find((item) => item._id == selectedOrder)?.foods;
  const selected = allOrders.find((item) => item._id == selectedOrder);
  const address = allOrders.find(
    (item) => item._id == selectedOrder
  )?.deliveryAddress;

  return (
    <Stack gap={6} direction={"row"} py={0.5}>
      <Stack
        gap={1}
        p={3}
        boxShadow={3}
        borderRadius={3}
        height={"fit-content"}
      >
        <Typography fontSize={26} fontWeight={600} color={"primary.main"}>
          Order Detail
        </Typography>
        <Typography>Order Id: {selectedOrder}</Typography>
        <Typography>User Id: {selected?.userId}</Typography>
        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
          <Typography fontSize={18} fontWeight={600}>
            Delivery Status:
          </Typography>
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"center"}
            bgcolor={"#D6D8DB"}
            p={0.5}
            borderRadius={2}
          >
            <Stack
              onClick={() => {
                changeOrderStatus(
                  selectedOrder,
                  "Хүлээгдэж буй",
                  selected?.userId || ""
                );
              }}
              flexDirection={"row"}
              width={1}
              gap={1}
              bgcolor={
                selected?.deliveryStatus == "Амжилттай" ? "#D6D8DB" : "#0468C8"
              }
              borderRadius={2}
              p={1}
              color={"common.white"}
              sx={{ cursor: "pointer" }}
              alignItems={"center"}
            >
              <DeliveryDining />
              <Typography noWrap textOverflow={"ellipsis"}>
                Хүлээгдэж буй
              </Typography>
            </Stack>
            <Stack
              onClick={() => {
                changeOrderStatus(
                  selectedOrder,
                  "Амжилттай",
                  selected?.userId || ""
                );
              }}
              flexDirection={"row"}
              width={1}
              gap={1}
              bgcolor={
                selected?.deliveryStatus == "Амжилттай"
                  ? "primary.main"
                  : "#D6D8DB"
              }
              borderRadius={2}
              p={1}
              color={"common.white"}
              sx={{ cursor: "pointer" }}
            >
              <RamenDining />
              <Typography>Амжилттай</Typography>
            </Stack>
          </Stack>
        </Stack>

        {address &&
          address?.map((item, index) => (
            <Stack key={index} flexDirection={"column"} gap={2}>
              <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                <Typography fontSize={18} fontWeight={600}>
                  Delivery <br /> address:
                </Typography>
                <Typography>
                  {item.district}, {item.khoroo}, {item.bair},
                </Typography>
              </Stack>
              <Stack gap={2} flexDirection={"row"} alignItems={"center"}>
                <Typography fontSize={18} fontWeight={600}>
                  Additional:
                </Typography>
                <Typography>{item.additional}</Typography>
              </Stack>

              <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
                <Typography fontSize={18} fontWeight={600}>
                  Phone:
                </Typography>
                <Typography>{item.phone}</Typography>
              </Stack>
            </Stack>
          ))}
      </Stack>
      <Stack p={3} boxShadow={3} borderRadius={3} width={"50%"}>
        <Stack gap={2} borderRadius={3} overflow={"auto"} maxHeight={"310px"}>
          {foods &&
            foods?.map((item: any, index: any) => {
              return (
                <Stack key={index} direction={"row"} gap={4}>
                  <Stack
                    width="40%"
                    py={"15%"}
                    position={"relative"}
                    borderRadius={"8px"}
                    overflow={"hidden"}
                  >
                    <Image
                      objectFit="cover"
                      src={item.foodImg}
                      fill
                      alt="food image"
                    />
                    {Boolean(item.discount) && (
                      <Typography
                        color="common.white"
                        fontSize={12}
                        fontWeight={600}
                        bgcolor="primary.main"
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          border: 1,
                          borderColor: "common.white",
                          width: "fit-content",
                          p: "4px 8px",
                          borderRadius: "16px",
                        }}
                      >
                        {item.discount}%
                      </Typography>
                    )}
                  </Stack>
                  <Stack height={"100%"}>
                    <Stack>
                      <Typography
                        fontSize={{ md: 22, xs: 16 }}
                        fontWeight={600}
                      >
                        {item.foodName}
                      </Typography>
                      <Typography
                        fontSize={{ md: 22, xs: 16 }}
                        fontWeight={600}
                      >
                        тоо: {item.foodCount}
                      </Typography>
                    </Stack>
                    <Stack gap={1} flexDirection={"row"}>
                      <Typography
                        fontSize={{ md: 22, xs: 16 }}
                        fontWeight={600}
                      >
                        үнэ:
                      </Typography>
                      <Typography
                        fontSize={{ md: 22, xs: 16 }}
                        fontWeight={600}
                      >
                        {numberFormatter.format(
                          Boolean(item.discount)
                            ? item.price *
                                item.foodCount *
                                (1 - 0.01 * (item.discount || 0))
                            : item.price * item.foodCount
                        )}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
        </Stack>
      </Stack>
    </Stack>
  );
};
