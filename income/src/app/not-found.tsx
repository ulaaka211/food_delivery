import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function NotFound() {
  return (
    <Stack>
      <Container maxWidth="xl">
        <Stack height={"70vh"} justifyContent={"center"} alignItems={"center"}>
          <Stack justifyContent={"center"} alignItems={"center"} spacing={4}>
            <Image src="/NotFound.svg" width={133} height={133} alt="" />
            <Typography fontSize={14} fontWeight={400}>
              Уучлаарай илэрц олдсонгүй...
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
