"use client";
// .required("Хоолны зургаа оруулна уу"),

import { Stack, Typography, Button, MenuItem, IconButton } from "@mui/material";
import { AddFoodImg, CustomInput, IOSSwitch } from "..";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";
import { useFood } from "../../provider/FoodProvider";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

type CustomInputSelectProps = {
  foodName: string;
  update: boolean;
  handleUpdateClose: () => void;
  // foodInfo: {
  //   foodName: string;
  //   price: number;
  //   foodImg: string;
  //   discount: number;
  //   ingredients: string;
  //   category: string;
  // };
};

export const UpdateFood = (props: CustomInputSelectProps) => {
  const { updateFood } = useFood();
  const { update, handleUpdateClose, foodName } = props;
  const { categories } = useFood();
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
      foodName: "",
      ingredients: "",
      foodImg: "",
      price: 0,
      discount: 0,
      category: "",
      // name: foodInfo.foodName ?? "",
      // ingredients: foodInfo.ingredients ?? "",
      // foodimg: foodInfo.foodImg ?? "",
      // price: foodInfo.price ?? 0,
      // discount: foodInfo.discount ?? 0,
      // category: foodInfo.category ?? "",
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateFood({
        foodName: values.foodName,
        ingredients: values.ingredients,
        price: values.price,
        discount: values.discount,
        foodImg: imageUrl,
        category: values.category,
        editFood: foodName,
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
      open={update}
      onClose={() => {
        handleUpdateClose();
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
              handleUpdateClose();
            }}
          />
          <Typography fontSize={22} fontWeight={700}>
            Update Food
          </Typography>
        </Stack>
        <Stack py={2} gap={1}>
          <CustomInput
            label="Хоолны нэр"
            name="foodName"
            onChange={formik.handleChange}
            value={formik.values.foodName}
            error={formik.touched.foodName && Boolean(formik.errors.foodName)}
            helperText={formik.touched.foodName && formik.errors.foodName}
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
              height={"100%"}
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

                <Button
                  sx={{
                    py: "8px",
                    px: "16px",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#fff",
                    bgcolor: "#3F4145",
                    borderRadius: "16px",
                    "&:hover": {
                      bgcolor: "#383a3e",
                    },
                  }}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Add Image
                </Button>
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
                    top={0}
                    left={0}
                    overflow={"hidden"}
                    position={"absolute"}
                    borderRadius={3}
                    width={"100%"}
                    height={"100%"}
                    sx={{
                      "&:hover .deleteImgBtn": {
                        display: "flex",
                      },
                    }}
                  >
                    <Image src={imageUrl} alt="" fill objectFit="cover" />
                    <IconButton
                      className="deleteImgBtn"
                      onClick={() => {
                        setShowPicture(false);
                      }}
                      sx={{
                        display: "none",
                        bgcolor: "#000",
                        position: "absolute",
                        top: "2%",
                        right: "1%",
                        width: 10,
                        height: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          bgcolor: "#121316",
                        },
                      }}
                    >
                      <ClearOutlinedIcon
                        sx={{
                          color: "#fff",
                          fontSize: "12px",
                        }}
                      />
                    </IconButton>
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
          <Button
            sx={{
              py: "8px",
              px: "16px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#3F4145",
            }}
            onClick={() => {
              formik.resetForm();
              setShowPicture(false);
              setImageUrl("");
            }}
          >
            Clear
          </Button>

          <Button
            sx={{
              py: "8px",
              px: "16px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#fff",
              bgcolor: "#3f4145",
              "&:hover": {
                bgcolor: "#383a3e",
              },
            }}
            variant="contained"
            disabled={!formik.isValid}
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Update
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};
