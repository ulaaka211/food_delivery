"use client";

import { Container, Stack } from "@mui/material";
import { CreateNewPassword } from "..";
import { ResetPassword1 } from "..";
import { ResetPassword2 } from "..";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const [index, setIndex] = useState(0);

  const router = useRouter();

  return (
    <Stack width="100vw">
      <Stack
        width="300%"
        direction="row"
        sx={{
          transition: "0ms",
          transform: `translateX(calc(${(-100 * index) / 3}%))`,
        }}
      >
        {arr.map((item) => (
          <Container maxWidth="xl">
            <Stack width={"100%"} height={"70vh"} justifyContent={"center"}>
              <Stack width={"100%"} alignItems={"center"}>
                {item.component}
                <Stack
                  maxWidth={"450px"}
                  onClick={() => {
                    setIndex((prev) => prev + 1);
                    if (index === 2) {
                      router.push("/login");
                    }
                  }}
                  sx={{
                    width: "26%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    disableElevation
                    sx={{
                      py: "14.5px",
                    }}
                  >
                    Үргэлжлүүлэх
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        ))}
      </Stack>
    </Stack>
  );
};
