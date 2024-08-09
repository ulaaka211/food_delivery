"use client";

import { Menu } from "@/components";
import { useAuth } from "@/provider/AuthenticationProvider";
import { useFood } from "@/provider/FoodProvider";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";

export default function Foodmenu() {
  return <Menu />;
}
