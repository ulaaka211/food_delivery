import { Stack, Typography } from "@mui/material";

type OrderHistoryFoodsProps = { foodName: string; foodCount: number };

export const OrderHistoryFoods = (props: OrderHistoryFoodsProps) => {
  const { foodName, foodCount } = props;

  return (
    <Stack
      flexDirection={"row"}
      px={2}
      py={3.5}
      gap={1}
      borderBottom={1}
      borderColor={"#D6D8DB"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack minWidth={200}>
        <Typography fontSize={16} fontWeight={400}>
          {foodName}
        </Typography>
      </Stack>
      <Stack>
        <Typography fontSize={16} fontWeight={400} color={"#272727"} gap={2}>
          тоо ширхэг: {foodCount}
        </Typography>
      </Stack>
    </Stack>
  );
};
