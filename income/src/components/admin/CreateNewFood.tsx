"use client";
// .required("Хоолны зургаа оруулна уу"),

import { Stack, Typography, Button } from "@mui/material";
import { AddFoodImg, CustomInput, CustomInputSelect2, IOSSwitch } from "..";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction, useState } from "react";
import { useAuth } from "../provider/AuthenticationProvider";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

type CustomInputSelectProps = {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  open: boolean;
  handleClose: () => void;
};

export const CreateNewFood = (props: CustomInputSelectProps) => {
  const { open, handleClose } = props;
  const [checkDiscount, setCheckDiscount] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { createfood } = useAuth();

  const validationSchema = yup.object({
    name: yup.string().required("Хоолны нэрээ оруулна уу"),
    ingredients: yup.string().required("Хоолны орцнуудаа оруулна уу"),
    price: yup.number().required("Хоолны үнээ оруулна уу"),
    discount: yup.number(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      ingredients: "",
      foodimg: "",
      price: 0,
      discount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createfood({
        name: values.name,
        ingredients: values.ingredients,
        price: values.price,
        discount: values.discount,
        foodimg: imageUrl,
      });
    },
  });

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
          <CustomInput
            label="Хоолны нэр"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
          />
          <CustomInputSelect2 label="Хоолны ангилал" placeholder="" />
          <CustomInput
            label="Хоолны орц"
            name="ingredients"
            onChange={formik.handleChange}
            value={formik.values.ingredients}
            error={
              formik.touched.ingredients && Boolean(formik.errors.ingredients)
            }
            helperText={formik.touched.ingredients && formik.errors.ingredients}
            onBlur={formik.handleBlur}
          />
          <CustomInput
            label="Хоолны үнэ"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
            onBlur={formik.handleBlur}
          />
          <Stack>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <IOSSwitch
                onChange={() => {
                  setCheckDiscount((prev) => !prev);
                }}
              />
              <Typography>Хямдралтай эсэх</Typography>
            </Stack>
            <CustomInput
              name="discount"
              onClick={() => setCheckDiscount(true)}
              disabled={!checkDiscount}
              onChange={formik.handleChange}
              value={formik.values.discount}
              error={formik.touched.discount && Boolean(formik.errors.discount)}
              helperText={formik.touched.discount && formik.errors.discount}
              onBlur={formik.handleBlur}
            />
          </Stack>
        </Stack>
        <Stack gap={0.5} px={3} width={"55%"}>
          <Typography fontSize={14}>Хоолны зураг</Typography>
          <Stack alignItems={"center"} py={3} borderRadius={3}>
            <Stack
              sx={{
                backgroundImage: imageUrl,
              }}
            ></Stack>
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
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
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
          <Button
            onClick={() => {
              formik.handleSubmit();
            }}
            sx={{
              py: "8px",
              px: "16px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#fff",
              bgcolor: "#3f4145",
            }}
            variant="contained"
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};
