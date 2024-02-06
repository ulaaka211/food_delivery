import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { CustomInput2 } from ".";

export const MyProfile = () => {
  return (
    <Stack>
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
              </Stack>
              <Typography fontSize={28} fontWeight={700}>
                Adolf Catler
              </Typography>
            </Stack>

            <Stack paddingX={"20px"} paddingTop={2} spacing={2}></Stack>
          </Stack>
          <Stack>
            <CustomInput2 type="text"/>
            <CustomInput2 type="number"/>
            <CustomInput2 type="email"/>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
