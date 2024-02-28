"use client";

import { Menu } from "@/components";
import { useAuth } from "@/components/provider/AuthenticationProvider";
import { useFood } from "@/components/provider/FoodProvider";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";

export default function Foodmenu() {
  return <Menu />;
}
