"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";

export const ResetPassword2 = () => {
  const [resetCode, setResetCode] = useState("");

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
        <Typography>
          Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.{" "}
        </Typography>
        <CustomInput
          onChange={(event) => {
            setResetCode(event.target.value);
          }}
          value={resetCode}
          label="Нууц үг сэргээх код "
          placeholder="Нууц үг сэргээх кодоо оруулна уу"
          type="password"
        />
      </Stack>
    </Stack>
  );
};
