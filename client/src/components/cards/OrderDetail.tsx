"use client";

import { Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Button } from "@mui/material";
import { useAuth } from "../../provider/AuthenticationProvider";
import { useFood } from "../../provider/FoodProvider";
import { useState } from "react";
import { foodParams } from "@/types";

type orderDetailProps = {
  open: boolean;
  handleClose: () => void;
  foodParams: foodParams;
};

export const OrderDetail = ({
  open,
  foodParams,
  handleClose,
}: orderDetailProps) => {
  const { basket, setBasket, setOpenDrawer, numberFormatter } = useFood();
  const [foodCount, setFoodCount] = useState(1);
  const { isLoggedIn, isAdmin } = useAuth();
  const { _id, foodName, ingredients, discount, foodImg, price, category } =
    foodParams;

  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <Stack
        bgcolor={"#fff"}
        maxWidth={"981px"}
        width={"100%"}
        padding={4}
        borderRadius={2}
        gap={4}
        direction={"row"}
      >
        <Stack
          position="relative"
          width={"50%"}
          height={"100%"}
          overflow={"hidden"}
          borderRadius={3}
          border={1}
          sx={{
            aspectRatio: "1/1",
          }}
        >
          <Image src={foodParams.foodImg} alt="" fill objectFit="cover" />
        </Stack>

        <Stack width={"50%"}>
          <Stack alignSelf={"end"}>
            <CloseOutlinedIcon
              onClick={() => {
                handleClose();
              }}
            />
          </Stack>
          <Stack gap={4.4}>
            <Stack>
              <Typography fontSize={28} fontWeight={700}>
                {foodParams.foodName}
              </Typography>
              <Stack direction={"row"} gap={2}>
                <Typography color={"#18BA51"} fontSize={18} fontWeight={600}>
                  {Boolean(foodParams.discount)
                    ? foodParams.price * (1 - foodParams.discount * 0.01)
                    : numberFormatter.format(foodParams.price) + "₮"}
                </Typography>
                <Typography
                  color={"common.black"}
                  fontSize={18}
                  fontWeight={600}
                  sx={{
                    textDecorationLine: "line-through",
                  }}
                >
                  {Boolean(foodParams.discount) &&
                    numberFormatter.format(foodParams.price) + "₮"}
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={1}>
              <Typography fontSize={18} fontWeight={600}>
                Орц
              </Typography>
              <Stack
                padding={1}
                bgcolor={"#F6F6F6"}
                color={"#767676"}
                width={"100%"}
                height={"80%"}
              >
                <Stack width={"100%"} bgcolor={"#F6F6F6"} overflow={"scroll"}>
                  <Typography noWrap width={"fit-content"}>
                    {foodParams.ingredients}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Typography fontSize={18} fontWeight={600}>
              Тоо
            </Typography>
            <Stack
              gap={2}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack
                width={"45px"}
                height={"40px"}
                borderRadius={"10px"}
                bgcolor={"#18BA51"}
                color={"#fff"}
                justifyContent={"center"}
                alignItems={"center"}
                onClick={() => {
                  setFoodCount((prev) => {
                    if (prev == 1) {
                      return prev;
                    }
                    return prev - 1;
                  });
                }}
              >
                <RemoveOutlinedIcon />
              </Stack>
              <Stack paddingX={"30px"} paddingY={1}>
                <Typography fontSize={24} fontWeight={500}>
                  {foodCount}
                </Typography>
              </Stack>
              <Stack
                width={"45px"}
                height={"40px"}
                borderRadius={"10px"}
                bgcolor={"#18BA51"}
                color={"#fff"}
                justifyContent={"center"}
                alignItems={"center"}
                onClick={() => {
                  setFoodCount((prev) => prev + 1);
                }}
              >
                <AddOutlinedIcon />
              </Stack>
            </Stack>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              sx={{
                py: "14.5px",
                bgcolor: "#18BA51",
              }}
              onClick={() => {
                if (isLoggedIn || isAdmin) {
                  let isShare = false;
                  const newBasket = basket.map((element) => {
                    if (element.foodId == foodParams._id) {
                      isShare = true;
                      element.foodCount += foodCount;
                      return element;
                    } else {
                      return element;
                    }
                  });
                  if (!isShare) {
                    setBasket([
                      ...basket,
                      {
                        foodId: _id,
                        foodName,
                        ingredients,
                        discount,
                        foodImg,
                        price,
                        category,
                        foodCount,
                      },
                    ]);
                  } else {
                    setBasket(newBasket);
                  }
                  handleClose();
                } else {
                  handleClose();
                  setOpenDrawer(true);
                }
              }}
            >
              Сагслах
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};
