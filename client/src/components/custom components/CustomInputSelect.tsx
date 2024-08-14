"use client";

import { InputAdornment, Stack, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

type CustomInputSelectProps = {
  option: string[];
};

type CombinedProps = TextFieldProps & CustomInputSelectProps;

export const CustomInputSelect = (props: CombinedProps) => {
  const { defaultValue, label, option, helperText, ...rest } = props;

  return (
    <Stack gap={0.5} width={1}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        select
        {...rest}
        defaultValue={defaultValue}
        variant="outlined"
        InputProps={{
          sx: {
            bgcolor: "#ecedf0",
            justifyContent: "center",
            alignItems: "center",
          },
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnOutlinedIcon />
            </InputAdornment>
          ),
        }}
      >
        {option.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Typography fontSize={12} color={"#b91c1c"}>
        {helperText}
      </Typography>
    </Stack>
  );
};
