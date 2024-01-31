import { Stack } from "@mui/material";

export const InProgressIcon = () => {
  return (
    <Stack
      border={1}
      borderRadius={"50%"}
      borderColor={"#0468C8"}
      padding={1.5}
    >
      <Stack
        width={24}
        height={24}
        borderRadius={"50%"}
        bgcolor={"#0468C8"}
      ></Stack>
    </Stack>
  );
};
