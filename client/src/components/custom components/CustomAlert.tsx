"use client";
import Alert, { AlertColor } from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

type CustomAlertProps = {
  severity?: AlertColor;
};

export const CustomALert = (props: CustomAlertProps) => {
  const { severity } = props;
  return (
    <Alert
      sx={{
        borderRadius: "20px",
      }}
      icon={<CheckIcon fontSize="inherit" />}
      severity={severity}
    >
      Амжилттай бүртгэгдлээ.
    </Alert>
  );
};
