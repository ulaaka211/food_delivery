"use client";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import {
  Badge,
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useRouter } from "next/navigation";
import { DrawerDetail, Login } from "..";
import { useAuth } from "../../provider/AuthenticationProvider";
import { ShoppingBasketOutlined } from "@mui/icons-material";
import { useFood } from "../../provider/FoodProvider";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import { useState } from "react";
import { SearchedFood } from "./SearchedFood";

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
  const { basket, foods } = useFood();
  const router = useRouter();
  const { openDrawer, setOpenDrawer } = useFood();
  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((item) =>
    item.foodName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Stack
      width="100%"
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
            <Image src="/Logo.svg" width={30} height={30} alt="" />

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
                  color: pathname.includes("admin") ? "green" : "black",
                  cursor: "pointer",
                }}
              >
                ADMIN
              </Typography>
            )}
          </Stack>

          <Stack spacing={3} direction={"row"} alignItems={"center"}>
            <TextField
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
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

            {search && (
              <Stack
                bgcolor={"white"}
                maxWidth={"432px"}
                minHeight={"500px"}
                height={"100%"}
                width={"100%"}
                padding={3}
                borderRadius={2}
                position={"absolute"}
                top={"100%"}
                right={"10%"}
              >
                <Stack overflow={"scroll"}>
                  {filteredFoods.map((item) => (
                    <SearchedFood key={item._id} {...item} />
                  ))}
                </Stack>
              </Stack>
            )}
            <Stack
              onClick={() => {
                setOpenDrawer(true);
              }}
              spacing={1}
              direction={"row"}
              alignItems={"center"}
              sx={{
                cursor: "pointer",
              }}
            >
              <IconButton>
                <Badge badgeContent={basket.length} color="warning">
                  <ShoppingBasketOutlined
                    sx={{
                      color: "#000",
                    }}
                  />
                </Badge>
              </IconButton>
              <Typography fontSize={14} fontWeight={700}>
                Сагс
              </Typography>
            </Stack>

            <Drawer
              sx={{
                width: "100%",
              }}
              anchor="right"
              open={openDrawer}
              onClose={() => {
                setOpenDrawer(false);
              }}
            >
              <DrawerDetail />
            </Drawer>

            <Box
              onClick={() => {
                if (isLoggedIn) {
                  router.push("/profile");
                } else {
                  setOpen(true);
                }
              }}
            >
              <Stack
                spacing={1}
                direction={"row"}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                }}
              >
                <IconButton
                  sx={{
                    overflow: "hidden",
                    width: "28px",
                    height: "28px",
                  }}
                >
                  {isLoggedIn ? (
                    <Image
                      src={
                        user.userImg
                          ? user.userImg
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      }
                      alt=""
                      width={28}
                      height={28}
                    />
                  ) : (
                    <PersonOutlineSharpIcon
                      sx={{ color: "black", width: "28px", height: "28px" }}
                    />
                  )}
                </IconButton>
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
