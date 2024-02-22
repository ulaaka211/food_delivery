"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuth } from "../provider/AuthenticationProvider";
import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type SignOutProps = {
  openSignOut: boolean;
  setOpenSignOut: Dispatch<SetStateAction<boolean>>;
  handleOut: () => void;
};

export const SignOutConfirm = ({
  openSignOut,
  setOpenSignOut,
  handleOut,
}: SignOutProps) => {
  const router = useRouter();
  const { signout } = useAuth();

  console.log(openSignOut);

  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={openSignOut}
      onClose={() => {
        handleOut();
      }}
    >
      <Stack bgcolor={"#fff"} p={1}>
        <Typography
          py={5}
          color={"#171717"}
          fontSize={20}
          fontWeight={600}
          width={1}
          textAlign={"center"}
        >
          Та системээс гарахдаа итгэлтэй байна уу?
        </Typography>
        <Stack flexDirection={"row"} width={1} gap={"1px"}>
          <Typography
            onClick={() => {
              signout();
              router.push("/");
            }}
            width={0.5}
            bgcolor={"#18BA5133"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={600}
            padding={"20px"}
            sx={{
              "&:hover": {
                backgroundColor: "#18BA51",
                color: "common.white",
              },
            }}
          >
            Тийм
          </Typography>
          <Button
            onClick={() => {
              handleOut();
            }}
          >
            <Typography
              width={0.5}
              bgcolor={"#18BA5133"}
              textAlign={"center"}
              fontSize={20}
              fontWeight={600}
              padding={"20px"}
              sx={{
                "&:hover": {
                  backgroundColor: "#18BA51",
                  color: "common.white",
                },
              }}
            >
              Үгүй
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};
