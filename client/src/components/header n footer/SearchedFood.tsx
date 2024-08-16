"use client";

import { foodParams } from "@/types";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { OrderDetail } from "..";
import { useFood } from "@/provider/FoodProvider";

export const SearchedFood = (props: foodParams) => {
  const [open, setOpen] = useState(false);
  const { numberFormatter } = useFood();

  return (
    <Stack borderBottom={1}>
      <Stack
        onClick={() => {
          setOpen(true);
        }}
        paddingY={1}
        gap={2}
        height={"100%"}
        width={"100%"}
        direction={"row"}
        alignItems={"center"}
      >
        <Stack
          position="relative"
          borderRadius={2}
          overflow={"hidden"}
          width={"100%"}
          height={"100%"}
        >
          <Image src={props.foodImg} alt="" fill objectFit="cover" />
        </Stack>
        <Stack width={"50%"}>
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Stack>
              <Typography fontSize={18} fontWeight={600}>
                {props.foodName}
              </Typography>
              <Stack gap={1} direction={"row"}>
                <Typography
                  color={"primary.main"}
                  fontSize={18}
                  fontWeight={600}
                >
                  {Boolean(props.discount)
                    ? numberFormatter.format(
                        props.price * (1 - props.discount * 0.01)
                      ) + "₮"
                    : numberFormatter.format(props.price) + "₮"}
                </Typography>
                <Typography
                  color={"common.black"}
                  fontSize={18}
                  fontWeight={600}
                  sx={{
                    textDecorationLine: "line-through",
                  }}
                >
                  {Boolean(props.discount) &&
                    numberFormatter.format(props.price) + "₮"}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Typography
            padding={1}
            color={"#767676"}
            noWrap
            maxWidth={500}
            textOverflow={"ellipsis"}
            sx={{
              lineClamp: "1",
            }}
          >
            {props.ingredients}
          </Typography>
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
