import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";
import { text } from "stream/consumers";

type CustomInputV2Props = {
  label: string;
  placeholder?: string;
  value?: string;
};

export const CustomINputV2 = (props: CustomInputV2Props) => {
  const { label, placeholder, value } = props;

  return (
    <Stack gap={0.5} width={1}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        placeholder={placeholder}
        value={value}
        type={"text"}
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
          endAdornment: <InputAdornment position="end"></InputAdornment>,
        }}
      />
    </Stack>
  );
};
