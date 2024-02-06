"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";
import { useAuth } from "../provider/authprovider";

export const ResetPassword1 = () => {
  const { resetpassword, setIndex } = useAuth();
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
      <Stack gap={6} width={"100%"}>
        <CustomInput
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          label="Имэйл "
          placeholder="Имэйл хаягаа оруулна уу"
          type="text"
        />
        <Button
          onClick={() => {
            setIndex((prev) => prev + 1);
            resetpassword;
          }}
          fullWidth
          variant="contained"
          disableElevation
          disabled={!email}
          sx={{
            py: "14.5px",
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
