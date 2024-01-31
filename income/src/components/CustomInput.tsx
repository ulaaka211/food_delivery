"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";
type CustomInputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
};
export const CustomInput = (props: CustomInputProps) => {
  const { placeholder, value, label, onChange, type = "text" } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Stack gap={0.5} width={1}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type === "password" && showPassword ? "text" : type}
        sx={{
          bgcolor: "#ECEDF0",
        }}
        inputProps={{
          style: {
            padding: "14px 16px",
            width: "100%",
          },
        }}
        InputProps={{
          style: {
            width: "100%",
          },
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
