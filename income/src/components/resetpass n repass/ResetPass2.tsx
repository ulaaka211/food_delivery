"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../provider/authprovider";

const validationSchema = yup.object({
  code: yup.string().required("").min(4),
});

export const ResetPassword2 = () => {
  const { userEmail, setUserOtb, checkresetotb } = useAuth();
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      checkresetotb({ code: values.code });
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
        <Stack>
          <Typography>
            Таны <Typography component={"span"}>{userEmail}</Typography> сэргээх
            код илгээх болно.
          </Typography>
          <CustomInput
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            label="Нууц үг сэргээх код "
            placeholder="Нууц үг сэргээх кодоо оруулна уу"
            type="password"
          />
        </Stack>
        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          fullWidth
          variant="contained"
          disableElevation
          disabled={!password}
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
