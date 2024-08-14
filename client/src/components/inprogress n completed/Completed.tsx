import { Stack, Typography } from "@mui/material";

type CompletedProps = {
  step: string;
  addressInfo: string;
  status: string;
};

export const Completed = (props: CompletedProps) => {
  const { step, addressInfo, status } = props;

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      paddingY={2}
      paddingX={3}
      gap={2}
    >
      <Stack
        width={"50px"}
        height={"50px"}
        borderRadius={"50%"}
        bgcolor={"#18BA51"}
        padding={1}
      >
        <img src="/check (1).svg" alt="" />
      </Stack>
      <Stack gap={"4px"}>
        <Typography color={"#8B8E95"} fontSize={14} fontWeight={400}>
          {step}
        </Typography>
        <Typography fontSize={20} fontWeight={400}>
          {addressInfo}
        </Typography>
        <Typography color={"#0468C8"} fontSize={16} fontWeight={400}>
          {status}
        </Typography>
      </Stack>
    </Stack>
  );
};
