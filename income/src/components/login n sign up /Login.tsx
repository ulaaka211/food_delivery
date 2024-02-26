"use client";
// .matches(
//   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Case Character"
// )

import { Modal, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "../provider/AuthenticationProvider";

type LoginProps = {
  handleClose: () => void;
  open: boolean;
};

export const Login = ({ handleClose, open }: LoginProps) => {
  const router = useRouter();
  const { login } = useAuth();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("И-мэйл буруу байна")
      .required("И-мэйлээ оруулна уу"),
    password: yup
      .string()

      .required("Нууц үгээ оруулна уу"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login({ email: values.email, password: values.password });
    },
  });

  return (
    <Modal
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      onClose={() => {
        handleClose();
      }}
    >
      <Stack
        bgcolor={"#fff"}
        borderRadius={2}
        height={"100%"}
        maxHeight={"655px"}
        maxWidth={"450px"}
        width={"100%"}
        paddingX={4}
        paddingY={4}
        gap={6}
        alignItems={"center"}
      >
        <Typography fontSize={28} fontWeight={700}>
          Нэвтрэх
        </Typography>
        <Stack gap={2} width={"100%"} height={"100%"}>
          <CustomInput
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            label="Имэйл "
            placeholder="Имэйл хаягаа оруулна уу"
            type="text"
          />
          <Stack alignItems={"flex-end"}>
            <CustomInput
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onBlur={formik.handleBlur}
              label="Нууц үг"
              placeholder="Нууц үг"
              type="password"
            />

            <Typography
              onClick={() => {
                handleClose();
                router.push("/forget-pass");
              }}
              color={"#000"}
              fontSize={14}
              fontWeight={400}
            >
              Нууц үг сэргээх
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={"100%"}
          gap={4}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
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
              handleClose();
            }}
          >
            Нэвтрэх
          </Button>
          <Typography sx={{ fontSize: "14", fontWeight: "400" }}>
            Эсвэл
          </Typography>
          <Stack border={1} borderColor={"green"} width={"100%"}>
            <Button
              fullWidth
              variant="outlined"
              disableElevation
              sx={{
                py: "14px",
                color: "#000",
              }}
              onClick={() => {
                handleClose();
                router.push("/signup");
              }}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
};
