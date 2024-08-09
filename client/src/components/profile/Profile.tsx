"use client";

import { Stack, Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { CustomInput2, EditProfileImg, SignOutConfirm } from "..";
import Image from "next/image";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../provider/AuthenticationProvider";

export const MyProfile = () => {
  const [open, setOpen] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const { user } = useAuth();
  const { name, email, phone, userImg } = user;
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userPhone, setUserPhone] = useState(phone);
  const [imageUrl, setImageUrl] = useState(userImg);

  return (
    <Stack width={"100%"} height={"80vh"} justifyContent={"center"}>
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
                <Stack
                  position={"absolute"}
                  bottom={0}
                  right={0}
                  zIndex={1}
                  width={34}
                  height={34}
                  border={1}
                  borderRadius={"50%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"#FFF"}
                >
                  <CreateOutlinedIcon sx={{ color: "primary.main" }} />
                </Stack>
              </Box>
              <EditProfileImg
                open={open}
                handleClose={() => setOpen(false)}
                setImageUrl={setImageUrl}
                imageUrl={imageUrl}
              />
            </Stack>
            <Typography fontSize={28} fontWeight={700}>
              {user.name}
            </Typography>
          </Stack>

          <Stack paddingX={"20px"} paddingTop={2} spacing={2}></Stack>
        </Stack>
        <Stack gap={2}>
          <CustomInput2 type="text" label="Таны нэр" defaultValue={userName} />
          <CustomInput2
            type="number"
            label="Утасны дугаар"
            defaultValue={userPhone}
          />
          <CustomInput2
            type="email"
            label="Имэйл хаяг"
            defaultValue={userEmail}
          />
          <Stack
            direction={"row"}
            width={"100%"}
            py={2}
            px={1.7}
            gap={2}
            alignItems={"center"}
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
