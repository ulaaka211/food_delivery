"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { CustomCheckBox } from "../custom components/CustomCheckBox";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "../provider/authprovider";

type CustomLoginProps = {};

export const Signup = (props: CustomLoginProps) => {
  const [checkBox, setCheckBox] = useState(false);
  const { signup } = useAuth();

  const validationSchema = yup.object({
    name: yup.string().required("Нэрээ оруулна уу"),
    email: yup
      .string()
      .email("И-мэйл буруу байна")
      .required("И-мэйлээ оруулна уу"),
    password: yup.string().required("Нууц үгээ оруулна уу"),

    address: yup.string().required("Хаягаа оруулна уу"),
    // repassword: yup.string().required("Нууц үгээ оруулна уу"),
    checkBox: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      rePassword: "",
      checkBox: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await signup({
        email: values.email,
        name: values.name,
        password: values.password,
        address: values.address,
      });
      // console.log(values);
    },
  });

  return (
    <Container
      sx={{
        height: "80vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack maxWidth={"450px"} width={"100%"} padding={4} gap={6}>
        <Typography fontSize={28} fontWeight={700}>
          Бүртгүүлэх
        </Typography>
        <Stack gap={2} width={"100%"}>
          <Stack alignItems={"flex-end"}>
            <CustomInput
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              label="Нэр"
              placeholder="Нэрээ оруулна уу"
              type="name"
            />
          </Stack>
          <CustomInput
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            label="Имэйл "
            placeholder="Имэйл хаягаа оруулна уу"
          />

          <CustomInput
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            label="Хаяг"
            placeholder="Та хаягаа оруулна уу"
            type="text"
          />

          <CustomInput
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            label="Нууц үг"
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
            label="Нууц үг давтах"
            placeholder="Нууц үгээ оруулна уу"
            type="password"
          />
        </Stack>
        <Stack width={"100%"} gap={4}>
          <Stack
            width={"100%"}
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={"start"}
          >
            <Stack
              onClick={() => {
                setCheckBox(!checkBox);
              }}
            >
              {(!checkBox && <CloudQueueIcon />) || (checkBox && <CloudIcon />)}
            </Stack>
            <Typography fontSize={14} fontWeight={400}>
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Typography>
          </Stack>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              py: "14.5px",
            }}
            disabled={
              !formik.values.name ||
              !formik.values.email ||
              !formik.values.address ||
              !formik.values.password ||
              !formik.values.rePassword ||
              !checkBox
            }
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            {" "}
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
