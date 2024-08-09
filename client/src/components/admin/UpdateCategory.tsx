"use client";

import { Stack, Typography } from "@mui/material";
import { CustomInput, EditCategory } from "..";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as yup from "yup";
import { useFood } from "../../provider/FoodProvider";

type CustomInputSelectProps = {
  openEdit: boolean;
  handleEditClose: () => void;
  categoryName: string;
};

const validationSchema = yup.object({
  foodCategory: yup.string(),
});

export const UpdateCategory = (props: CustomInputSelectProps) => {
  const { openEdit, handleEditClose, categoryName } = props;
  const { updateCategory } = useFood();

  const formik = useFormik({
    initialValues: {
      foodCategory: categoryName ? categoryName : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateCategory({
        editCategory: categoryName,
        newCategory: values.foodCategory,
      });
    },
  });

  return (
    <Modal
      open={openEdit}
      onClose={() => {
        handleEditClose();
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
              handleEditClose();
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
            onClick={() => {
              formik.resetForm();
            }}
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
            Update
          </Typography>
        </Stack>
      </Stack>
    </Modal>
  );
};
