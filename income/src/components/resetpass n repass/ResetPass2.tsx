"use client";

import { Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../provider/authprovider";

export const ResetPassword2 = () => {
  const { index, setIndex } = useContext(AuthContext);
  const [password, setPassword] = useState("");

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
        <Stack>
          <Typography>
            Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.{" "}
          </Typography>
          <CustomInput
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            label="Нууц үг сэргээх код "
            placeholder="Нууц үг сэргээх кодоо оруулна уу"
            type="password"
          />
        </Stack>
        <Button
          onClick={() => {
            setIndex((prev) => prev + 1);
          }}
          fullWidth
          variant="contained"
          disableElevation
          disabled={!password}
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
