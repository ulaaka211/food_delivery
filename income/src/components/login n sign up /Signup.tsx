"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { CustomCheckBox } from "../custom components/CustomCheckBox";

type CustomLoginProps = {};

export const Signup = (props: CustomLoginProps) => {
  const [checkBox, setCheckBox] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
              label="Нэр"
              placeholder="Нэрээ оруулна уу"
              type="name"
            />
          </Stack>
          <CustomInput
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            label="Имэйл "
            placeholder="Имэйл хаягаа оруулна уу"
          />

          <CustomInput
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            value={address}
            label="Хаяг"
            placeholder="Та хаягаа оруулна уу"
            type="text"
          />

          <CustomInput
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            label="Нууц үг"
            placeholder="Нууц үгээ оруулна уу"
            type="password"
          />

          <CustomInput
            onChange={(event) => {
              setRePassword(event.target.value);
            }}
            value={rePassword}
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
              !name ||
              !email ||
              !address ||
              !password ||
              !rePassword ||
              !checkBox
            }
          >
            {" "}
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
