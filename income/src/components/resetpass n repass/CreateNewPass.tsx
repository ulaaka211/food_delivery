"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Router, { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthenticationProvider";
import { useAuth } from "../provider/AuthenticationProvider";

const validationSchema = yup.object({
  password: yup.string().required(""),
  rePassword: yup
    .string()
    .required("")
    .oneOf([yup.ref("password")]),
});

export const CreateNewPassword = () => {
  const router = useRouter();
  const { setOpen, checkresetotb, userOtb } = useAuth();
  const { index, setIndex } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const formik = useFormik({
    initialValues: {
      password: "",
      rePassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      checkresetotb({ password: values.password, code: userOtb });
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
            onBlur={formik.handleBlur}
            helperText={formik.touched.password && formik.errors.password}
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
            onBlur={formik.handleBlur}
            helperText={formik.touched.rePassword && formik.errors.rePassword}
            label="Нууц үг давтах "
            placeholder="Нууц үгээ оруулна уу"
            type="password"
          />
        </Stack>
        <Button
          fullWidth
          variant="contained"
          disableElevation
          disabled={!password || !rePassword}
          onClick={() => {
            setIndex((prev) => prev + 1);
            if (index === 2) {
              router.push("/");
              setIndex(0);
              setOpen(true);
            }
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
