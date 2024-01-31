"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@mui/material";

export const CreateNewPassword = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <Stack
      maxWidth={"450px"}
      width={"100%"}
      padding={4}
      spacing={6}
      sx={{ justifyContent: "center", alignItems: " center" }}
    >
      <Typography fontSize={28} fontWeight={700}>
        Шинэ нууц үг зохиох
      </Typography>
      <Stack gap={2} width={"100%"}>
        <CustomInput
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
          label="Нууц үг "
          placeholder="Нууц үгээ оруулна уу"
          type="password"
        />

        <CustomInput
          onChange={(event) => {
            setRePassword(event.target.value);
          }}
          value={rePassword}
          label="Нууц үг давтах "
          placeholder="Нууц үгээ оруулна уу"
          type="password"
        />
      </Stack>
    </Stack>
  );
};
