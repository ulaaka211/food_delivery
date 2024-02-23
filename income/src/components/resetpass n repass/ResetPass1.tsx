"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";
import { useAuth } from "../provider/AuthenticationProvider";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("И-мэйл буруу байна")
    .required("И-мэйлээ оруулна уу"),
});

export const ResetPassword1 = () => {
  const { checkresetemail, setUserEmail } = useAuth();
  const [isClicked, setIsClicked] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUserEmail(values.email);
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
        Нууц үг сэргээх
      </Typography>
      <Stack gap={6} width={"100%"}>
        <CustomInput
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.email && formik.errors.email}
          label="Имэйл "
          placeholder="Имэйл хаягаа оруулна уу"
          type="text"
        />
        <Button
          fullWidth
          variant="contained"
          disableElevation
          disabled={!formik.isValid || isClicked}
          sx={{
            py: "14.5px",
          }}
          onClick={() => {
            formik.handleSubmit();
            setIsClicked(true);
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
