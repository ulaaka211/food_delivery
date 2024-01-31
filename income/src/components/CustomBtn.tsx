import { FitScreen } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { type } from "os";

type CustomBTnProps = {
  variant: string;
};

export const CustomBtn = (props: CustomBTnProps) => {
  const { variant } = props;
  return (
    <Stack sx={{ width: "100%" }}>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          fontSize: "16",
          fontWeight: "400",
          padding: "8 , 16",
        }}
      >
        {variant}
      </Button>
    </Stack>
  );
};
