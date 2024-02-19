"use client";

import { Stack, Typography } from "@mui/material";
import {
  AddFoodImg,
  CustomInput,
  CustomInput2,
  CustomInputSelect,
  CustomInputSelect2,
} from "..";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

type CustomInputSelectProps = {
  open: boolean;
  handleClose: () => void;
};

export const CreateFood = (props: CustomInputSelectProps) => {
  const { open, handleClose } = props;
  const [openModal, setOpenModal] = useState(false);

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
      <Stack maxWidth={587} width={"100%"} bgcolor={"#fff"} borderRadius={3}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={2}
          px={3}
          width={"65%"}
        >
          <CloseIcon />
          <Typography fontSize={22} fontWeight={700}>
            Create food
          </Typography>
        </Stack>
        <Stack py={2} px={3} gap={1}>
          <CustomInput label="Хоолны нэр" />
          <CustomInputSelect2 label="Хоолны ангилал" placeholder="" />
          <CustomInput label="Хоолны орц" />
          <CustomInput label="Хоолны үнэ" />
          <CustomInput label="Хямдралтай эсэх" />
        </Stack>
        <Stack gap={0.5} px={3} width={"55%"}>
          <Typography fontSize={14}>Хоолны зураг</Typography>
          <Stack
            bgcolor={"#ECEDF0"}
            alignItems={"center"}
            py={3}
            borderRadius={3}
          >
            <Typography
              py={1}
              px={2}
              fontSize={16}
              fontWeight={700}
              color={"#3F4145"}
            >
              Add image for the food
            </Typography>
            <Typography
              onClick={() => {
                setOpenModal(true);
              }}
              py={1.5}
              px={1.5}
              borderRadius={3}
              fontSize={16}
              fontWeight={700}
              color={"#fff"}
              bgcolor={"#3F4145"}
              width={"fit-content"}
            >
              Add Image
            </Typography>
            <AddFoodImg
              open={openModal}
              handleClose={() => {
                setOpenModal(false);
              }}
            />
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"end"}
          alignItems={"center"}
          py={2}
          px={3}
          gap={1}
        >
          <Typography
            py={1}
            px={2}
            fontSize={16}
            fontWeight={700}
            color={"#3F4145"}
          >
            Clear
          </Typography>
          <Typography
            py={1}
            px={2}
            fontSize={16}
            fontWeight={700}
            color={"#fff"}
            bgcolor={"#3F4145"}
          >
            Continue
          </Typography>
        </Stack>
      </Stack>
    </Modal>
  );
};
