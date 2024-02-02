"use client";

import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { CardSale } from ".";

const tabs = [
  {
    link: "/main-course",
    label: "Main course",
  },
  {
    link: "/appetizers",
    label: "Appetizers",
  },
  {
    link: "/beverage",
    label: "Beverage",
  },
  {
    link: "/on-sale",
    label: "On sale",
  },
];

export const Menu = () => {
  const [getCards, setGetCards] = useState("");
  const [page, setPages] = useState("");
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Stack height={"120vh"} width={"100vw"}>
      <Container maxWidth="xl">
        <Stack width={"100%"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingTop={4}
            paddingBottom={10}
            gap={7}
          >
            {tabs.map((item) => (
              <Stack
                flex={1}
                onClick={() => {
                  setActiveTab(item);
                }}
                sx={{
                  bgcolor:
                    item.label === activeTab.label ? "#18BA51" : "common.white",
                  color:
                    item.label === activeTab.label
                      ? "common.white"
                      : "common.black",
                }}
                border={1}
                justifyContent={"center"}
                alignItems={"center"}
                width={"15vw"}
                borderRadius={"18px"}
                paddingY={1}
                paddingX={2}
              >
                <Typography key={item.label} fontSize={18} fontWeight={600}>
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Grid container spacing={3}>
            {new Array(12).fill(0).map((_, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <CardSale />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};
