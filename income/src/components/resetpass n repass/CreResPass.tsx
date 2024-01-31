"use client";

import { Container, Stack } from "@mui/material";
import { CreateNewPassword } from "..";
import { ResetPassword1 } from "..";
import { ResetPassword2 } from "..";
import { Button } from "@mui/material";
import { useState } from "react";

export const CreResPass = () => {
  const [email, setEmail] = useState("");
  return (
    <Stack>
      <Container maxWidth="xl">
        <Stack width="100%" overflow={"hidden"}>
          <Stack width={"300%"} height={"70vh"} justifyContent={"center"}>
            <Stack direction={"row"}>
              <Stack
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ResetPassword1 />
                <Stack
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
                    disabled={!email}
                    sx={{
                      py: "14.5px",
                    }}
                  >
                    {" "}
                    Үргэлжлүүлэх
                  </Button>
                </Stack>
              </Stack>
              <Stack
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ResetPassword2 />
                <Stack
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
                    disabled={!email}
                    sx={{
                      py: "14.5px",
                    }}
                  >
                    {" "}
                    Үргэлжлүүлэх
                  </Button>
                </Stack>
              </Stack>
              <Stack
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CreateNewPassword />
                <Stack
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
                    disabled={!email}
                    sx={{
                      py: "14.5px",
                    }}
                  >
                    {" "}
                    Үргэлжлүүлэх
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
