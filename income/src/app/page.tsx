"use client";

import { Login } from "@/components/login n sign up /Login";
import { Divider, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Signup } from "@/components/login n sign up /Signup";
import { Container } from "@mui/material";
import {
  Card,
  Completed,
  CreateNewPassword,
  Foods,
  ResetPassword1,
  ResetPassword2,
  HomePage,
  Deliver,
  Sale,
  All,
  MyProfile,
  OrderDetail,
  Cart,
  Address,
  Order,
} from "@/components";
import { CardSale } from "@/components";
import ForgetPass from "./forget-pass/page";
import Image from "next/image";
import NotFound from "./not-found";

export default function Home() {
  return (
    <Stack>
      <HomePage />;
      <Deliver />
      <All />
      <Cart />
      {/* <Stack direction={"row"}>
        <Order />
        <Address />
      </Stack> */}
    </Stack>
  );
}
