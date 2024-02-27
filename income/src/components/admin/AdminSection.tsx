"use client";

import { Container, Stack } from "@mui/material";
import { AddNewCategory, AddNewFood } from "..";
import { useRouter } from "next/navigation";
import { useAuth } from "../provider/AuthenticationProvider";
import { useEffect } from "react";

export const AdminSection = () => {
  const router = useRouter();
  const { isAdmin, refresh } = useAuth();

  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, []);

  return (
    <Stack
      position={"relative"}
      direction={"row-reverse"}
      height={"100vh"}
      width={"100%"}
    >
      <Stack
        width={"50%"}
        bgcolor={"#fff"}
        position={"absolute"}
        zIndex={-1}
      ></Stack>
      <Stack
        width={"50%"}
        height={"100%"}
        bgcolor={"#F7F7F8"}
        position={"absolute"}
        zIndex={-1}
      ></Stack>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <AddNewCategory />
        <AddNewFood />
      </Container>
    </Stack>
  );
};
