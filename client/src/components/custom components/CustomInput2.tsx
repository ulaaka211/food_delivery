"use client";

import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import {
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
} from "@mui/material";

export const CustomInput2 = (props: TextFieldProps) => {
  const {
    variant = "standard",
    label,
    defaultValue,
    type = "text",
    ...rest
  } = props;

  return (
    <Stack gap={1}>
      <TextField
        sx={{
          bgcolor: "#F6F6F6",
          border: "none",
          width: "392px",
        }}
        defaultValue={defaultValue}
        {...rest}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Stack
                sx={{
                  bgcolor: "white",
                  borderRadius: "100%",
                  p: "5px",
                  border: "solid 1px #EEEFF2",
                }}
              >
                {(type === "text" && (
                  <PersonOutlineSharpIcon sx={{ color: "black" }} />
                )) ||
                  (type === "number" && (
                    <CallOutlinedIcon sx={{ color: "black" }} />
                  )) ||
                  (type === "email" && (
                    <ForwardToInboxOutlinedIcon sx={{ color: "black" }} />
                  ))}
              </Stack>
              <Stack
                sx={{
                  position: "absolute",
                  top: "5px",
                  left: "58px",
                  fontSize: "12px",
                }}
              >
                {label}
              </Stack>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <EditOutlinedIcon
                sx={{
                  color: "primary.main",
                }}
              />
            </InputAdornment>
          ),
        }}
        inputProps={{
          style: { marginTop: "7px" },
        }}
      ></TextField>
    </Stack>
  );
};
