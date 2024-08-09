"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "../../provider/AuthenticationProvider";

export const Signup = () => {
  const [checkBox, setCheckBox] = useState(false);
  const { signup } = useAuth();

  const validationSchema = yup.object({
    name: yup.string().required("Нэрээ оруулна уу"),
    email: yup
      .string()
      .email("И-мэйл буруу байна")
      .required("И-мэйлээ оруулна уу"),
    phone: yup
      .string()
      .matches(/^\d{8}$|^\d{10}$/)
      .required("Утасны дугаараа оруулна уу"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Case Character"
      )
      .required("Нууц үгээ оруулна уу"),
    rePassword: yup
      .string()
      .required("Нууц үгээ оруулна уу")
      .oneOf([yup.ref("password")]),
    address: yup.string().required("Хаягаа оруулна уу"),
    checkBox: yup.boolean().isTrue("Yйлчилгээний нөхцөлийг зөвшөөрнө үү"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      rePassword: "",
      checkBox: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await signup({
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        address: values.address,
      });
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
      <Stack
        maxWidth={"450px"}
        width={"100%"}
        padding={4}
        gap={2}
        alignItems={"center"}
      >
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
              onBlur={formik.handleBlur}
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
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
            label="Имэйл "
            placeholder="Имэйл хаягаа оруулна уу"
          />

          <CustomInput
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.phone && formik.errors.phone}
            label="Утас"
            placeholder="Утасны дугаараа оруулна уу"
          />

          <CustomInput
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.touched.address && Boolean(formik.errors.address)}
            onBlur={formik.handleBlur}
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
                formik.setFieldValue("checkBox", !checkBox);
                setCheckBox(!checkBox);
              }}
            >
              {(!checkBox && <CloudQueueIcon />) || (checkBox && <CloudIcon />)}
            </Stack>
            <Typography fontSize={14} fontWeight={400}>
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Typography>
          </Stack>

          {formik.errors.checkBox && (
            <Typography fontSize={12} color="error">
              Үйлчилгээний нөхцөлийг зөвшөөрнө үү
            </Typography>
          )}

          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              py: "14.5px",
            }}
            disabled={!formik.isValid}
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
