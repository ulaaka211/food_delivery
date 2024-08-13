import { CircularProgress, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Loading() {
  return (
    <Stack>
      <Container maxWidth="xl">
        <Stack height={"70vh"} justifyContent={"center"} alignItems={"center"}>
          <Stack justifyContent={"center"} alignItems={"center"} spacing={4}>
            <CircularProgress
              sx={{
                color: "primary.main",
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
