"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useAuth } from "../../provider/AuthenticationProvider";
import { useState } from "react";
import { OrderDetail } from "..";
import { foodParams } from "@/types";

export const FoodModel = (props: foodParams) => {
  const { foodName, foodImg, price, discount } = props;
  const [open, setOpen] = useState(false);

  return (
    <Stack>
      <Stack
        onClick={() => {
          setOpen(true);
        }}
        spacing={1.75}
        sx={{
          "&:hover .editBtn": {
            display: "flex",
            zIndex: 10,
          },
        }}
      >
        <Stack position={"relative"}>
          <Stack
            position={"relative"}
            width={"100%"}
            pt="66.6%"
            top={0}
            left={0}
            overflow={"hidden"}
            borderRadius={3}
          >
            <Image src={foodImg} alt="" fill objectFit="cover" />
          </Stack>
          {Boolean(discount) && (
            <Typography
              top={10}
              right={10}
              position={"absolute"}
              zIndex={1}
              width={"fit-content"}
              paddingY={0.5}
              paddingX={2}
              color={"#fff"}
              bgcolor={"#18BA51"}
              border={1}
              borderRadius={16}
              borderColor={"#fff"}
              fontSize={18}
              fontWeight={600}
            >
              {discount}%
            </Typography>
          )}
        </Stack>
        <Stack>
          <Typography fontSize={20} fontWeight={590}>
            {foodName}
          </Typography>
          <Stack direction={"row"} spacing={1.9}>
            <Typography color={"#18BA51"} fontSize={18} fontWeight={590}>
              {Boolean(discount) ? price * (1 - discount * 0.01) : price}
            </Typography>
            <Typography
              sx={{
                textDecorationLine: "line-through",
              }}
              fontSize={18}
              fontWeight={590}
            >
              {Boolean(discount) && price}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <OrderDetail
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        foodParams={props}
      />
    </Stack>
  );
};
