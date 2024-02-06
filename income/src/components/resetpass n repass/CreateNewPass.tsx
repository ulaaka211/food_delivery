"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Router, { useRouter } from "next/navigation";

const validationSchema = yup.object({
  password: yup.string().required(),
  rePassword: yup.string().required(),
});

export const CreateNewPassword = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      password: "",
      rePassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Stack
      maxWidth={"450px"}
      width={"100%"}
      padding={4}
      spacing={6}
      sx={{ justifyContent: "center", alignItems: " center" }}
    >
      <Typography fontSize={28} fontWeight={700}>
        Шинэ нууц үг зохиох
      </Typography>
      <Stack gap={6} width={"100%"}>
        <Stack>
          <CustomInput
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            label="Нууц үг "
            placeholder="Нууц үгээ оруулна уу"
            type="password"
          />

          <CustomInput
            name="rePassword"
            onChange={formik.handleChange}
            value={formik.values.rePassword}
            error={
              formik.touched.rePassword && Boolean(formik.errors.rePassword)
            }
            helperText={formik.touched.rePassword && formik.errors.rePassword}
            onBlur={formik.handleBlur}
            label="Нууц үг давтах "
            placeholder="Нууц үгээ оруулна уу"
            type="password"
          />
        </Stack>
        <Button
          fullWidth
          variant="contained"
          disableElevation
          disabled={!formik.values.password || !formik.values.rePassword}
          onClick={() => {
            router.push("/");
          }}
          sx={{
            py: "14.5px",
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
