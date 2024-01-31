"use client";

import { InputAdornment, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { type } from "os";

type CustomInputSelectProps = {
  placeholder: string;
};

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

export const CustomInputSelect = (props: CustomInputSelectProps) => {
  const { placeholder } = props;

  return (
    <Stack>
      <TextField
        select
        placeholder={placeholder}
        variant="filled"
        InputProps={{
          sx: {
            justifyContent: "center",
            alignItems: "center",
            paddingX: "20px",
            paddingBottom: "15px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnOutlinedIcon />
            </InputAdornment>
          ),
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
};
