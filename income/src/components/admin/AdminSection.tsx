"use client";

import { Stack } from "@mui/material";
import { AddNewCategory, AddNewFood } from "..";
import { useRouter } from "next/navigation";
import { useAuth } from "../provider/AuthenticationProvider";
import { useEffect } from "react";

export const AdminSection = () => {
  const router = useRouter();
  const { isAdmin } = useAuth();

  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, []);

  return (
    <Stack direction={"row"} height={"100vh"} width={"100vw"}>
      <AddNewCategory />
      <AddNewFood />
    </Stack>
  );
};
