"use client";

import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const arr = [
  {
    link: "/",
    label: "Нүүр",
  },
  {
    link: "/contact",
    label: "Холбоо барих",
  },
  {
    link: "/food-menu",
    label: "Хоолны цэс",
  },
  {
    link: "/terms-of-service",
    label: "Үйлчилгээний нөхцөл",
  },
  {
    link: "/delivery-area",
    label: "Хүргэлтийн бүс",
  },
  {
    link: "/privacy-policy",
    label: "Нууцлалын бодлого",
  },
];

export const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundImage: "url(/footerimg.svg)",
      }}
      width={"100vw"}
      spacing={5}
      paddingTop={14.2}
      paddingBottom={13.6}
      paddingX={15}
      bgcolor={"#18BA51"}
    >
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src="/Logo1.svg" alt="" width={31} height={26} />

        <Typography
          sx={{
            margin: "auto",
          }}
          color={"#fff"}
          fontSize={20}
          fontWeight={700}
        >
          Food Delivery
        </Typography>
      </Stack>

      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        color={"#fff"}
      >
        {arr.map((item) => (
          <Link key={item.link} href={item.link}>
            <Typography
              key={item.label}
              fontSize={16}
              fontWeight={590}
              textAlign="center"
            >
              {item.label}
            </Typography>
          </Link>
        ))}
      </Stack>

      <Stack
        spacing={2.25}
        direction={"row"}
        justifyContent={"center"}
        padding={1}
      >
        <Image
          onClick={() => {
            window.open(
              "https://www.facebook.com/profile.php?id=100023804023479"
            );
          }}
          src="/facebook.svg"
          alt=""
          width={40}
          height={46}
        ></Image>
        <Image
          onClick={() => {
            window.open("https://www.instagram.com/saikhanbaiars/");
          }}
          src="/instagram.svg"
          alt=""
          width={40}
          height={46}
        ></Image>
        <Image src="/twitter.svg" alt="" width={40} height={46}></Image>
      </Stack>

      <Divider sx={{ borderColor: "#fff" }} />

      <Stack alignItems={"center"}>
        <Typography color={"#fff"} fontSize={16} fontWeight={400}>
          © 2024 Cайханбаяр.
        </Typography>
        <Typography color={"#fff"} fontSize={16} fontWeight={400}>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Stack>
    </Stack>
  );
};
