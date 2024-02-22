"use client";

import { Container, Stack } from "@mui/material";
import { CreateNewPassword } from "..";
import { ResetPassword1 } from "..";
import { ResetPassword2 } from "..";
import { useAuth } from "../provider/AuthenticationProvider";

const arr = [
  {
    component: <ResetPassword1 />,
  },
  {
    component: <ResetPassword2 />,
  },
  {
    component: <CreateNewPassword />,
  },
];

export const CreResPass = () => {
  const { index } = useAuth();

  return (
    <Stack width="100%" overflow={"hidden"}>
      <Stack
        width="300%"
        direction="row"
        sx={{
          transition: "0",
          transform: `translateX(calc(${(-100 * index) / 3}%))`,
        }}
      >
        {arr.map((item) => (
          <Container maxWidth="xl">
            <Stack
              width={"100%"}
              height={"70vh"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {item.component}
            </Stack>
          </Container>
        ))}
      </Stack>
    </Stack>
  );
};
