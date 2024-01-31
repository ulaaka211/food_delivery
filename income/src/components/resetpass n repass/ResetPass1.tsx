"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";

export const ResetPassword1 = () => {
  const [email, setEmail] = useState("");

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
      </Stack>
    </Stack>
  );
};
