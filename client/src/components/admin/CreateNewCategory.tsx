"use client";

import { Button, Stack, Typography } from "@mui/material";
import { CustomInput } from "..";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import * as yup from "yup";
import { useFood } from "../../provider/FoodProvider";

const validationSchema = yup.object({
  foodCategory: yup.string().required("Ангилалын нэрээ оруулна уу"),
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
            sx={{
              cursor: "pointer",
            }}
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
            placeholder="Ангилалын нэр"
            name="foodCategory"
            value={formik.values.foodCategory}
            onChange={formik.handleChange}
            error={
              formik.touched.foodCategory && Boolean(formik.errors.foodCategory)
            }
            helperText={
              formik.touched.foodCategory && formik.errors.foodCategory
            }
            onBlur={formik.handleBlur}
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
            }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            sx={{
              py: "8px",
              px: "16px",
              fontSize: "16px",
              fontWeight: "700",
              color: "white",
              bgcolor: "#3F4145",
              "&:hover": {
                bgcolor: "#3F4145",
              },
            }}
            disabled={!formik.isValid}
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};
