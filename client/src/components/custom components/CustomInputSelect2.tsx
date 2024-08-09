"use client";

import { InputAdornment, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const CustomInputSelect2 = (props: TextFieldProps) => {
  const { label, placeholder, ...rest } = props;

  return (
    <Stack bgcolor={"#ECEDF0"}>
      <Typography fontSize={14} py={0.5} bgcolor={"#fff"}>
        {label}
      </Typography>
      <TextField {...rest} select placeholder={placeholder} variant="outlined">
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};
