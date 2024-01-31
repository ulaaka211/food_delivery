"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@mui/material";

type CustomLoginProps = {};

export const Login = (props: CustomLoginProps) => {
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
      <Stack
        maxWidth={"450px"}
        width={"100%"}
        padding={4}
        gap={6}
        sx={{ justifyContent: "center", alignItems: " center" }}
      >
        <Typography fontSize={28} fontWeight={700}>
          Нэвтрэх
        </Typography>
        <Stack gap={2} width={"100%"}>
          <CustomInput
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            label="Имэйл "
            placeholder="Имэйл хаягаа оруулна уу"
            type="text"
          />
          <Stack alignItems={"flex-end"}>
            <CustomInput
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              label="Нууц үг"
              placeholder="Нууц үг"
              type="password"
            />
            <Link href={"/forget-pass"}>
              <Typography color={"#000"} fontSize={14} fontWeight={400}>
                Нууц үг сэргээх
              </Typography>
            </Link>
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
            disabled={!email || !password}
          >
            {" "}
            Нэвтрэх
          </Button>
          <Typography sx={{ fontSize: "14", fontWeight: "400" }}>
            Эсвэл
          </Typography>
          <Stack border={1} borderColor={"green"} width={"100%"}>
            <Link href={"/signup"}>
              <Button
                fullWidth
                variant="outlined"
                disableElevation
                sx={{
                  py: "14px",
                  color: "#000",
                }}
              >
                Бүртгүүлэх
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
