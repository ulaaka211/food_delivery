import { Check } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
type OrderHistoryProps = {
  deliveryStatus: string;
  createdAt: Date;
  _id: string;
  setSelectedOrder: Dispatch<SetStateAction<string>>;
};
export const OrderHistory = (props: OrderHistoryProps) => {
  const { deliveryStatus, createdAt, _id, setSelectedOrder } = props;
  const [status, setStatus] = useState(false);
  const handleStatus = () => {
    if (deliveryStatus == "Амжилттай") {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  useEffect(() => {
    handleStatus();
  });
  return (
    <Stack
      direction={"row"}
      p={2}
      gap={1}
      borderBottom={1}
      borderColor={status ? "primary.main" : "#0468C8"}
      alignItems={"center"}
      onClick={() => {
        setSelectedOrder(_id);
      }}
      sx={{
        cursor: "pointer",
        "&:hover": {
          bgcolor: "#cccccc90",
        },
      }}
    >
      <Stack
        p={1}
        border={1}
        borderRadius={"50%"}
        borderColor={!status ? "#0468C8" : "primary.main"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={status ? "primary.main" : "common.white"}
      >
        <Stack
          width={{ md: 24, xs: 16 }}
          height={{ md: 24, xs: 16 }}
          bgcolor={!status ? "#0468C8" : "primary.main"}
          borderRadius={"50%"}
          color={"common.white"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {status && <Check color="inherit" />}
        </Stack>
      </Stack>
      <Stack direction={"row"}>
        <Stack minWidth={150}>
          <Typography fontSize={16} fontWeight={400}>
            Захиалга #{_id.slice(-6)}
          </Typography>
          <Typography
            fontSize={14}
            fontWeight={400}
            color={status ? "primary.main" : "#0468C8"}
          >
            {deliveryStatus}
          </Typography>
        </Stack>
        <Typography fontSize={16} fontWeight={400} color={"#272727"}>
          {createdAt.toString().slice(0, 10)}
        </Typography>
      </Stack>
    </Stack>
  );
};
