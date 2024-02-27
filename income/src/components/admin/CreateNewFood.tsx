"use client";
// .required("Хоолны зургаа оруулна уу"),

import { Stack, Typography, Button, TextField, MenuItem } from "@mui/material";
import { AddFoodImg, CustomInput, CustomInputSelect2, IOSSwitch } from "..";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import { useFood } from "../provider/FoodProvider";
import { relative } from "path";

type CustomInputSelectProps = {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  open: boolean;
  handleClose: () => void;
};

export const CreateNewFood = (props: CustomInputSelectProps) => {
  const { open, handleClose } = props;
  const { createFood, categories } = useFood();
  const [checkDiscount, setCheckDiscount] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [showPicture, setShowPicture] = useState(false);

  const validationSchema = yup.object({
    name: yup.string().required("Хоолны нэрээ оруулна уу"),
    ingredients: yup.string().required("Хоолны орцнуудаа оруулна уу"),
    price: yup.number().required("Хоолны үнээ оруулна уу"),
    discount: yup.number(),
    category: yup.string().required("Хоолны төрлөө оруулна уу"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      ingredients: "",
      foodimg: "",
      price: 0,
      discount: 0,
      category: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createFood({
        name: values.name,
        ingredients: values.ingredients,
        price: values.price,
        discount: values.discount,
        foodimg: imageUrl,
        category: values.category,
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
      <Stack
        maxWidth={587}
        width={"100%"}
        bgcolor={"#fff"}
        borderRadius={3}
        px={3}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={2}
          width={"65%"}
        >
          <CloseIcon
            onClick={() => {
              handleClose();
            }}
          />
          <Typography fontSize={22} fontWeight={700}>
            Create food
          </Typography>
        </Stack>
        <Stack py={2} gap={1}>
          <CustomInput
            label="Хоолны нэр"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
          />
          <CustomInput
            select={true}
            label="Хоолны ангилал"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
            error={formik.touched.category && Boolean(formik.errors.category)}
            helperText={formik.touched.category && formik.errors.category}
            onBlur={formik.handleBlur}
          >
            {categories.map((item: any) => (
              <MenuItem key={item.foodCategory} value={item.foodCategory}>
                {item.foodCategory}
              </MenuItem>
            ))}
          </CustomInput>
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
        <Stack direction={"row"}>
          <Stack
            width={"50%"}
            gap={0.5}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography alignSelf={"flex-start"} fontSize={14}>
              Хоолны зураг
            </Typography>
            <Stack
              alignSelf={"flex-start"}
              width={"100%"}
              py={3}
              bgcolor={"#F7F7F8"}
              border={"dashed"}
              borderRadius={3}
              position={"relative"}
            >
              <Stack alignItems={"center"} borderRadius={3}>
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
                  showPicture={showPicture}
                  handleCloseImg={() => {
                    setShowPicture(true);
                  }}
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  open={openModal}
                  handleClose={() => {
                    setOpenModal(false);
                  }}
                />
                {showPicture && (
                  <Stack
                    onClick={() => {
                      setShowPicture(false);
                    }}
                    top={0}
                    position={"absolute"}
                    zIndex={1}
                    borderRadius={3}
                    overflow={"hidden"}
                    width={"100%"}
                    height={"100%"}
                  >
                    <Image src={imageUrl} alt="" fill objectFit="cover" />
                  </Stack>
                )}
              </Stack>
            </Stack>
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
