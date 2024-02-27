"use client";

import { Stack, Typography } from "@mui/material";
import { CustomInput, OrderDetail } from "..";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as yup from "yup";
import { useFood } from "../provider/FoodProvider";
import { useState } from "react";

const validationSchema = yup.object({
  foodCategory: yup.string(),
});

type CustomInputSelectProps = {
  open: boolean;
  handleClose: () => void;
};

export const CreateNewCategory = (props: CustomInputSelectProps) => {
  const { open, handleClose } = props;
  const { postCategory } = useFood();

  const formik = useFormik({
    initialValues: {
      foodCategory: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postCategory(values.foodCategory);
    },
  });

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack maxWidth={587} width={"100%"} bgcolor={"#fff"} borderRadius={3}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={2}
          px={3}
          width={"74%"}
        >
          <CloseIcon
            onClick={() => {
              handleClose();
            }}
          />
          <Typography fontSize={22} fontWeight={700}>
            Create new category
          </Typography>
        </Stack>
        <Stack py={2} px={3}>
          <CustomInput
            label="Category name"
            placeholder="Placeholder"
            name="foodCategory"
            value={formik.values.foodCategory}
            onChange={formik.handleChange}
          />
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
            onClick={() => {
              formik.handleSubmit();
            }}
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
