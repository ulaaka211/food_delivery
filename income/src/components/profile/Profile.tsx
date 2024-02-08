import { Container, Stack, Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { CustomInput2, EditProfileImg } from "..";
import Image from "next/image";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/material";
import { useAuth } from "../provider/authprovider";

export const MyProfile = () => {
  return (
    <Stack height={"70vh"} justifyContent={"center"}>
      <Container>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Stack spacing={3}>
            <Stack
              spacing={5}
              justifyContent={"center"}
              alignItems={"center"}
              paddingX={"20px"}
            >
              <Stack position={"relative"}>
                <Image
                  src="/catler.png"
                  alt=""
                  width={133}
                  height={133}
                  style={{
                    borderRadius: "50%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <Box>
                  <Stack
                    position={"absolute"}
                    bottom={-5}
                    right={-1}
                    zIndex={1}
                    width={34}
                    height={34}
                    border={1}
                    borderRadius={"50%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bgcolor={"#FFF"}
                  >
                    <CreateOutlinedIcon sx={{ color: "primary.main" }} />
                  </Stack>
                </Box>
                {/* <EditProfileImg /> */}
              </Stack>
              <Typography fontSize={28} fontWeight={700}>
                Adolf Catler
              </Typography>
            </Stack>

            <Stack paddingX={"20px"} paddingTop={2} spacing={2}></Stack>
          </Stack>
          <Stack gap={2}>
            <CustomInput2 type="text" label="Таны нэр" />
            <CustomInput2 type="number" label="Утасны дугаар" />
            <CustomInput2 type="email" label="Имэйл хаяг" />
            <Stack
              direction={"row"}
              width={"100%"}
              py={2}
              px={1.7}
              gap={2}
              alignItems={"center"}
            >
              <Stack
                border={1}
                borderColor={"#EEEFF2"}
                p={"5px"}
                borderRadius={"50%"}
              >
                <HistoryOutlinedIcon />
              </Stack>
              <Typography>Захиалгын түүх</Typography>
            </Stack>
            <Stack
              direction={"row"}
              width={"100%"}
              py={2}
              px={1.7}
              gap={2}
              alignItems={"center"}
            >
              <Stack
                border={1}
                borderColor={"#EEEFF2"}
                p={"5px"}
                borderRadius={"50%"}
              >
                <ExitToAppIcon />
              </Stack>
              <Typography>Гарах</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
