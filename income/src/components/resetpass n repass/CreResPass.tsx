"use client";

import { Container, Stack } from "@mui/material";
import { CreateNewPassword } from "..";
import { ResetPassword1 } from "..";
import { ResetPassword2 } from "..";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const arr =[
  {
    component: <ResetPassword1/>
  },
  {
    component: <ResetPassword2/>
  },
{
component: <CreateNewPassword/>
}
  
]

export const CreResPass = () => {
  const [index, setIndex] = useState(0)


  return (
    <Stack>
      <Container maxWidth="xl">
          <Stack width={"100"} overflow={"hidden"}  sx={{
            
             tranform: index === 0 ? "translate(-50% -50%)" : "translate(200%)"
          }}  >
              <Stack
                width={"300%"}
                height={"70vh"}
                justifyContent={"center"}
                
              > 
              <Stack direction={"row"}>

              {arr.map((item) => (
                <Stack  width={"100%"}  alignItems={"center"}   >
                  {item.component}
                  <Stack maxWidth={"450px"} onClick={() =>{
                    setIndex(index + 1);
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
                    {" "}
                    Үргэлжлүүлэх
                  </Button>
              </Stack>
                </Stack>
              ))}
              </Stack>
                
               
                </Stack>
          </Stack>
      </Container>
    </Stack>
  );
};
