"use client";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import { Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Login, MyProfile } from "..";
import { useAuth } from "../provider/Authprovider";

const arr = [
  {
    link: "/",
    label: "НҮҮР",
  },
  {
    link: "/food-menu",
    label: "ХООЛНЫ ЦЭС",
  },
  {
    link: "/delivery-area",
    label: "ХҮРГЭЛТИЙН БҮС",
  },
];

export const Header = () => {
  const pathname = usePathname();
  const { open, setOpen, user, isLoggedIn, isAdmin } = useAuth();
  const router = useRouter();

  return (
    <Stack
      width="100vw"
      bgcolor={"#fff"}
      position={"sticky"}
      top={0}
      left={0}
      zIndex={10}
      boxShadow={5}
    >
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent={"space-between"} paddingY={1}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <Image src="/logo.svg" width={30} height={30} alt="" />
            {arr.map((item, index) => (
              <Stack padding={[1, 2]} key={index}>
                <Link key={item.link} href={item.link}>
                  <Typography
                    sx={{
                      color: pathname === item.link ? "green" : "black",
                    }}
                    key={item.label}
                    fontSize={14}
                    fontWeight={700}
                    color={"#000"}
                  >
                    {item.label}
                  </Typography>
                </Link>
              </Stack>
            ))}
            {isAdmin && (
              <Typography
                onClick={() => {
                  router.push("/admin");
                }}
                fontSize="14px"
                fontWeight={700}
                color="primary.main"
                sx={{
                  color: pathname.includes("/admin" ? "green" : "black"),
                }}
              >
                ADMIN
              </Typography>
            )}
          </Stack>

          <Stack spacing={3} direction={"row"} alignItems={"center"}>
            <TextField
              variant="outlined"
              type="search"
              placeholder="Хайх"
              InputProps={{
                sx: { borderRadius: "8px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: { padding: "8px 16px" },
              }}
            />

            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Image src="/component 2 (1).svg" alt="" width={24} height={24} />
              <Typography fontSize={14} fontWeight={700}>
                Сагс
              </Typography>
            </Stack>
            <Box
              onClick={() => {
                if (isLoggedIn) {
                  router.push("/profile");
                } else {
                  setOpen(true);
                }
              }}
            >
              <Stack spacing={1} direction={"row"} alignItems={"center"}>
                <Image src="/vector (4).svg" alt="" width={19} height={19} />
                <Typography fontSize={14} fontWeight={700}>
                  {isLoggedIn ? user.name : "Нэвтрэх"}
                </Typography>
              </Stack>
            </Box>

            <Login open={open} handleClose={() => setOpen(false)} />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
