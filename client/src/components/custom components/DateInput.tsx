import { Stack, TextField, TextFieldProps } from "@mui/material";

export const DateInput = (props: TextFieldProps) => {
  const { ...rest } = props;

  return (
    <Stack gap={0.5} width={1}>
      <TextField
        {...rest}
        sx={{
          bgcolor: "#ECEDF0",
        }}
        inputProps={{
          style: {
            padding: "14px 14px",
            width: "100%",
          },
        }}
        InputProps={{
          style: {
            width: "100%",
          },
        }}
      />
    </Stack>
  );
};
