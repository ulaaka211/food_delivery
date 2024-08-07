"use client";

import { Container, Stack } from "@mui/material";
import { AllCategories } from "..";
import { useRouter } from "next/navigation";
import { useAuth } from "../../provider/AuthenticationProvider";
import { useEffect, useState } from "react";
import { AllFoods } from "./AllFoods";

export const AdminSection = () => {
  const router = useRouter();
  const { isAdmin, refresh } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("");

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
        width={"27%"}
        bgcolor={"#fff"}
        position={"absolute"}
        zIndex={-1}
      ></Stack>
      <Stack
        width={"73%"}
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
          gap: "2.7%",
        }}
      >
        <AllCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AllFoods selectedCategory={selectedCategory} />
      </Container>
    </Stack>
  );
};
