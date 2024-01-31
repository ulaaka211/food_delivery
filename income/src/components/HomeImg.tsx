import { Divider, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Image from "next/image";

export const HomePage = () => {
  return (
    <>
      <Stack paddingTop={"70px"} paddingBottom={"122px"} spacing={""}>
        <Stack
          direction={"row"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"90vh"}
          bgcolor={"#18BA51"}
          sx={{
            backgroundImage: "url(/footerimg.svg)",
          }}
        >
          <Container maxWidth="xl">
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack width={"20vw"} spacing={2.9}>
                <Typography
                  color={"#fff"}
                  fontSize={55}
                  lineHeight={"90%"}
                  fontWeight={600}
                >
                  Pinecone Food delivery
                </Typography>
                <Divider
                  sx={{
                    borderColor: "#fff",
                  }}
                />
                <Typography color={"#fff"} fontSize={22} fontWeight={700}>
                  Horem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Stack>
              <Stack position={"relative"} marginTop={"80px"}>
                <Image
                  src="image 13 (1).svg"
                  alt=""
                  width={443}
                  height={438}
                  style={{
                    position: "absolute",
                    top: "-36%",
                    left: "-90%",
                  }}
                />
                <Image
                  src="image 14 (1).svg"
                  alt=""
                  width={313}
                  height={313}
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    zIndex: "1",
                  }}
                />
              </Stack>
            </Stack>
          </Container>
        </Stack>
      </Stack>
    </>
  );
};
