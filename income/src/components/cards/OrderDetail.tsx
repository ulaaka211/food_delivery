"use client";

import { Container, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Button } from "@mui/material";
import { foodParams } from "../provider/AuthenticationProvider";
import { useState } from "react";
import { useFood } from "../provider/FoodProvider";

type orderDetailProps = {
  open: boolean;
  handleClose: () => void;
  foodParams: foodParams;
};

export const OrderDetail = ({
  open,
  handleClose,
  foodParams,
}: orderDetailProps) => {
  const [count, setCount] = useState(1);
  const { foodCount, setFoodCount, shareFood, setShareFood } = useFood();
  const { name, ingredients, discount, foodimg, price, category } = foodParams;

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
          <Image src={foodParams.foodimg} alt="" fill objectFit="cover" />
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
                {foodParams.name}
              </Typography>
              <Stack direction={"row"} gap={2}>
                <Typography color={"#18BA51"} fontSize={18} fontWeight={600}>
                  {Boolean(foodParams.discount)
                    ? foodParams.price * (1 - foodParams.discount * 0.01)
                    : foodParams.price}
                </Typography>
                <Typography
                  color={"common.black"}
                  fontSize={18}
                  fontWeight={600}
                  sx={{
                    textDecorationLine: "line-through",
                  }}
                >
                  {Boolean(foodParams.discount) && foodParams.price}
                </Typography>
              </Stack>
            </Stack>
            <Stack gap={1}>
              <Typography fontSize={18} fontWeight={600}>
                Орц
              </Typography>
              <Typography
                padding={1}
                bgcolor={"#F6F6F6"}
                color={"#767676"}
                overflow={"scroll"}
                noWrap
                textOverflow={"ellipsis"}
                sx={{
                  lineClamp: "1",
                }}
              >
                {foodParams.ingredients}
              </Typography>
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
                let isShare = false;

                const newShareFood = shareFood.map((element) => {
                  if (element.name == foodParams.name) {
                    isShare = true;
                    element.foodCount += foodCount;
                    return element;
                  } else {
                    return element;
                  }
                });

                if (!isShare) {
                  setShareFood([
                    ...shareFood,
                    {
                      name,
                      ingredients,
                      discount,
                      foodimg,
                      price,
                      category,
                      foodCount,
                    },
                  ]);
                } else {
                  setShareFood(newShareFood);
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
