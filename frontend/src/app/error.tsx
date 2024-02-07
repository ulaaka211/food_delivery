"use client";

import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

export default function Error() {
  return (
    <Stack>
      <Container maxWidth="xl">
        <Stack height={"70vh"} justifyContent={"center"} alignItems={"center"}>
          <Stack justifyContent={"center"} alignItems={"center"} spacing={4}>
            <ErrorOutlineOutlinedIcon
              sx={{
                width: "80px",
                height: "80px",
                color: "#18BA51",
              }}
            />
            <Typography fontSize={14} fontWeight={400}>
              Уучлаарай, систем ачааллахад алдаа гарлаа.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
