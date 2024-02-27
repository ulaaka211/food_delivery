"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../provider/AuthenticationProvider";

const validationSchema = yup.object({
  code: yup.string().required("").min(4),
});

export const ResetPassword2 = () => {
  const { userEmail, setUserOtb, setIndex } = useAuth();
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUserOtb(values.code);
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
        <Stack gap={2}>
          <Typography>
            Таны{" "}
            <Typography color={"primary.main"} component={"span"}>
              {userEmail}
            </Typography>
            сэргээх код илгээх болно.
          </Typography>
          <CustomInput
            name="code"
            onChange={formik.handleChange}
            value={formik.values.code}
            error={formik.touched.code && Boolean(formik.errors.code)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.code && formik.errors.code}
            label="Нууц үг сэргээх код "
            placeholder="Нууц үг сэргээх кодоо оруулна уу"
            type="password"
          />
        </Stack>
        <Button
          onClick={() => {
            formik.handleSubmit();
            setIndex((prev) => prev + 1);
          }}
          fullWidth
          variant="contained"
          disableElevation
          // disabled={!password}\]
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
