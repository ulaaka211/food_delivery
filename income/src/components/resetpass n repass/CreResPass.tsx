"use client";

import { Container, Stack } from "@mui/material";
import { CreateNewPassword } from "..";
import { ResetPassword1 } from "..";
import { ResetPassword2 } from "..";
import { Button } from "@mui/material";
import { useState } from "react";

const arr =[
  {
    component: <CreateNewPassword/>
  },
  {
    component: <ResetPassword1/>
  },
  {
    component: <ResetPassword2/>
  }
]

export const CreResPass = () => {
 
  return (
    <Stack>
      <Container maxWidth="xl">
          <Stack width={"100"} overflow={""} >
              <Stack
                width={"300%"}
                height={"70vh"}
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
              > 
              {arr.map((item) => (
                <Stack width={"100%"}  >
                  {item.component}
                </Stack>
              ))}
                
                </Stack>
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
                   
                    sx={{
                      py: "14.5px",
                    }}
                  >
                    {" "}
                    Үргэлжлүүлэх
                  </Button>
              </Stack>
          </Stack>
      </Container>
    </Stack>
  );
};
