"use client";

import { Container, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Button } from "@mui/material";
import { foodParams } from "../provider/AuthenticationProvider";
import { useState } from "react";

type orderDetailProps = {
  open: boolean;
  handleClose: () => void;
};

export const OrderDetail = (
  { open, handleClose }: orderDetailProps,
  props: foodParams
) => {
  const [count, setCount] = useState(1);
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
        <Stack width={"50%"} overflow={"hidden"} borderRadius={3} border={1}>
          <Image
            src="image 6.svg"
            alt=""
            width={500}
            height={400}
            objectFit="cover"
          />
        </Stack>

        <Stack justifyContent={"space-between"} width={"50%"} border={1}>
          <Stack alignSelf={"end"}>
            <CloseOutlinedIcon
              onClick={() => {
                handleClose();
              }}
            />
          </Stack>
          <Stack spacing={4}>
            <Stack>
              <Typography fontSize={28} fontWeight={700}>
                {props.name}
              </Typography>
              <Typography color={"#18BA51"} fontSize={18} fontWeight={600}>
                {props.price}
              </Typography>
            </Stack>
            <Stack spacing={1.5}>
              <Typography fontSize={18} fontWeight={600}>
                Орц
              </Typography>
              <Typography padding={1} bgcolor={"#F6F6F6"} color={"#767676"}>
                {props.ingredients}
              </Typography>
            </Stack>
            <Typography fontSize={18} fontWeight={600}>
              Тоо
            </Typography>
            <Stack
              spacing={2.5}
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
                  setCount((prev) => prev - 1);
                }}
              >
                <RemoveOutlinedIcon />
              </Stack>
              <Stack paddingX={"30px"} paddingY={1}>
                <Typography fontSize={24} fontWeight={500}>
                  {count}
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
                  setCount((prev) => prev + 1);
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
            >
              Сагслах
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};
