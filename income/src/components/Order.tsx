import { Stack, Typography } from "@mui/material";
import { CartCard } from ".";
import { Button } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Image from "next/image";

export const Order = () => {
  return (
    <Stack
      maxWidth={"432px"}
      height={"58.9vh"}
      border={1}
      padding={3}
      borderRadius={2}
      width={"100%"}
      justifyContent={"space-between"}
    >
      <Stack gap={5}>
        <Stack paddingY={3} borderTop={1} borderBottom={1}>
          <Stack direction={"row"} alignItems={"center"}>
            <Stack width={"50%"}>
              <Image src="/image (1).svg" alt="" width={184} height={150} />
            </Stack>
            <Stack width={"50%"}>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Stack>
                  <Typography fontSize={18} fontWeight={600}>
                    Main Pizza{" "}
                  </Typography>
                  <Typography
                    color={"primary.main"}
                    fontSize={18}
                    fontWeight={600}
                  >
                    34,800₮
                  </Typography>
                </Stack>
                <Stack alignSelf={"center"}>
                  <CloseOutlinedIcon />
                </Stack>
              </Stack>
              <Typography padding={1} color={"#767676"}>
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <Stack width={"50%"}>
          <Typography color={"#5E6166"} fontSize={18} fontWeight={400}>
            Нийт төлөх дүн
          </Typography>
          <Typography color={"#121316"} fontSize={18} fontWeight={700}>
            34,800₮
          </Typography>
        </Stack>
        <Stack width={"50%"}>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              py: "14.5px",
              bgcolor: "#18BA51",
            }}
          >
            Захиалах
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
