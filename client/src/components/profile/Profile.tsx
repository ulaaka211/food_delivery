"use client";

import { Button, IconButton, Stack, Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { CustomInput2, EditProfileImg, SignOutConfirm } from "..";
import Image from "next/image";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../provider/AuthenticationProvider";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  name: yup.string().required("Нэр оруулна уу"),
  email: yup.string().email("Буруу имэйл формат").required("Имэйл оруулна уу"),
  phone: yup.string().required("Утасны дугаар оруулна уу"),
  address: yup.string().required("Хаяг оруулна уу"),
  userImg: yup.number(),
});

export const MyProfile = () => {
  const { user, updateUser } = useAuth();
  const { _id, name, email, phone, userImg, address } = user;
  const [open, setOpen] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const [edit, setEdit] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const router = useRouter();

  useEffect(() => {
    if (userImg) {
      setImageUrl(userImg);
    }
  }, [userImg]);

  const formik = useFormik({
    initialValues: {
      name: name ?? "",
      email: email ?? "",
      phone: phone ?? "",
      address: address ?? "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (
        name == values.name &&
        email == values.email &&
        phone == values.phone &&
        address == values.address &&
        imageUrl === userImg
      ) {
        setEdit(false);
      } else {
        updateUser({
          _id: _id,
          name: values.name,
          email: values.email,
          phone: values.phone,
          address: values.address,
          userImg: imageUrl,
        });
        setEdit(false);
      }
    },
  });

  return (
    <Stack width={"100%"} height={"100vh"} justifyContent={"center"}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={3}>
          <Stack
            spacing={5}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={"20px"}
          >
            <Stack position={"relative"} width={"100%"} height={"100%"}>
              <Stack
                p={"50%"}
                border={1}
                borderRadius={"50%"}
                overflow={"hidden"}
                position={"relative"}
              >
                <Image fill objectFit="cover" src={imageUrl} alt="" />
              </Stack>
              <Box
                onClick={() => {
                  setOpen(true);
                }}
              >
                {edit && (
                  <Stack
                    position={"absolute"}
                    bottom={0}
                    right={"10%"}
                    zIndex={1}
                    width={34}
                    height={34}
                    border={1}
                    borderRadius={"50%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bgcolor={"#FFF"}
                  >
                    <IconButton>
                      <CreateOutlinedIcon sx={{ color: "primary.main" }} />
                    </IconButton>
                  </Stack>
                )}
              </Box>
              <EditProfileImg
                open={open}
                handleClose={() => setOpen(false)}
                setImageUrl={setImageUrl}
                imageUrl={imageUrl}
              />
            </Stack>
            <Stack
              direction={"row"}
              gap={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography fontSize={28} fontWeight={700} ml={"40%"}>
                {user.name}
              </Typography>

              <Button
                disabled={edit}
                onClick={() => {
                  setEdit(true);
                }}
                sx={{
                  display: "flex",
                  gap: "4px",
                }}
              >
                <Typography fontSize={14} fontWeight={400}>
                  edit
                </Typography>
                <CreateOutlinedIcon
                  sx={{
                    color: !edit ? "primary.main" : "#BDBDBD",
                    fontSize: "18px",
                  }}
                />
              </Button>
            </Stack>
          </Stack>

          <Stack paddingX={"20px"} paddingTop={2} spacing={2}></Stack>
        </Stack>
        <Stack gap={2}>
          <CustomInput2
            name="name"
            type="text"
            label="Таны нэр"
            edit={edit}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
          />
          <CustomInput2
            name="email"
            type="email"
            label="Имэйл хаяг"
            edit={edit}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <CustomInput2
            name="phone"
            type="number"
            label="Утасны дугаар"
            edit={edit}
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            onBlur={formik.handleBlur}
          />
          <CustomInput2
            name="address"
            type="text"
            label="Хаяг"
            edit={edit}
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            onBlur={formik.handleBlur}
          />
          {edit && (
            <Button
              onClick={() => {
                formik.handleSubmit();
              }}
              variant="contained"
              sx={{
                py: "8px",
              }}
            >
              хадгалах
            </Button>
          )}
          <Stack
            direction={"row"}
            width={"100%"}
            py={2}
            px={1.7}
            gap={2}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              "&:hover": { backgroundColor: "#F6F6F6" },
            }}
            onClick={() => {
              router.push("/order-history");
            }}
          >
            <Stack
              border={1}
              borderColor={"#EEEFF2"}
              p={"5px"}
              borderRadius={"50%"}
            >
              <HistoryOutlinedIcon />
            </Stack>
            <Typography>Захиалгын түүх</Typography>
          </Stack>
          <Stack
            direction={"row"}
            width={"100%"}
            py={2}
            px={1.7}
            gap={2}
            alignItems={"center"}
            onClick={() => {
              setOpenSignOut(true);
            }}
            sx={{
              cursor: "pointer",
              "&:hover": { backgroundColor: "#F6F6F6" },
            }}
          >
            <Stack
              border={1}
              borderColor={"#EEEFF2"}
              p={"5px"}
              borderRadius={"50%"}
            >
              <ExitToAppIcon />
            </Stack>
            <Typography>Гарах</Typography>
          </Stack>
          <SignOutConfirm
            openSignOut={openSignOut}
            handleOut={() => {
              setOpenSignOut(false);
            }}
            setOpenSignOut={setOpenSignOut}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
