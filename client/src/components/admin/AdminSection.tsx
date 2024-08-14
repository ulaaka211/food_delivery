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
  const [tab, setTab] = useState(false);

  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, [refresh]);

  return (
    <Stack
      position={"relative"}
      direction={"row-reverse"}
      height={"100vh"}
      width={"100%"}
    >
      <Stack
        width={"70%"}
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
          tab={tab}
          setTab={setTab}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AllFoods selectedCategory={selectedCategory} />
      </Container>
    </Stack>
  );
};
