"use client";

import { InputAdornment, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

type CustomInputSelectProps = {
  option: string[];
};

type CombinedProps = TextFieldProps & CustomInputSelectProps;

export const CustomInputSelect = (props: CombinedProps) => {
  const { defaultValue, option, ...rest } = props;

  return (
    <Stack bgcolor={"#ECEDF0"}>
      <TextField
        select
        {...rest}
        defaultValue={defaultValue}
        variant="outlined"
        InputProps={{
          sx: {
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
    </Stack>
  );
};
