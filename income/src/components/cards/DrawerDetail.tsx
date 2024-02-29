"use client";

import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button } from "@mui/material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Link from "next/link";
import { useState } from "react";
import { useFood } from "../provider/FoodProvider";
import { relative } from "path";

export const DrawerDetail = () => {
  const { shareFood, foodCount, setFoodCount } = useFood();

  return (
    <Container maxWidth="xl">
      <Stack width={"100%"} height={"90vh"} justifyContent={"space-between"}>
        <Stack gap={10}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack padding={"6px"}>
              <Image
                src="/arrow_forward_ios.svg"
                alt=""
                width={11}
                height={20}
              />
            </Stack>
            <Typography width={"57.6%"} fontSize={20} fontWeight={900}>
              Таны сагс
            </Typography>
          </Stack>
          {shareFood.map((item, index) => (
            <Stack paddingY={3} borderTop={1} borderBottom={1}>
              <Stack
                padding={2}
                gap={2}
                height={"100%"}
                width={"100%"}
                direction={"row"}
                alignItems={"center"}
              >
                <Stack
                  position="relative"
                  borderRadius={2}
                  overflow={"hidden"}
                  width={"100%"}
                  height={"100%"}
                >
                  <Image src={item.foodimg} alt="" fill objectFit="cover" />
                </Stack>
                <Stack width={"50%"}>
                  <Stack
                    direction={"row"}
                    width={"100%"}
                    justifyContent={"space-between"}
                  >
                    <Stack>
                      <Typography fontSize={18} fontWeight={600}>
                        {item.name}
                      </Typography>
                      <Stack gap={1} direction={"row"}>
                        <Typography
                          color={"primary.main"}
                          fontSize={18}
                          fontWeight={600}
                        >
                          {item.price}
                        </Typography>
                        <Typography
                          color={"primary.main"}
                          fontSize={18}
                          fontWeight={600}
                          sx={{
                            textDecorationLine: "line-through",
                          }}
                        >
                          {Boolean(item.discount)
                            ? item.price * (1 - item.discount * 0.01)
                            : item.price}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack alignSelf={"center"}>
                      <CloseOutlinedIcon />
                    </Stack>
                  </Stack>
                  <Typography
                    padding={1}
                    color={"#767676"}
                    noWrap
                    textOverflow={"ellipsis"}
                    sx={{
                      lineClamp: "1",
                    }}
                  >
                    {item.ingredients}
                  </Typography>
                  <Stack
                    spacing={2.5}
                    direction={"row"}
                    justifyContent={"start"}
                    alignItems={"center"}
                  >
                    <Stack
                      width={"45px"}
                      height={"40px"}
                      borderRadius={"10px"}
                      bgcolor={"#18BA51"}
                      color={"#fff"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      onClick={() => {
                        setFoodCount((prev) => {
                          if (prev == 1) {
                            return prev;
                          }
                          return prev - 1;
                        });
                      }}
                    >
                      <RemoveOutlinedIcon />
                    </Stack>
                    <Stack paddingX={"30px"} paddingY={1}>
                      <Typography fontSize={24} fontWeight={500}>
                        {foodCount}
                      </Typography>
                    </Stack>
                    <Stack
                      width={"45px"}
                      height={"40px"}
                      borderRadius={"10px"}
                      bgcolor={"#18BA51"}
                      color={"#fff"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      onClick={() => {
                        setFoodCount((prev) => prev + 1);
                      }}
                    >
                      <AddOutlinedIcon />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Stack direction={"row"} alignItems={"center"}>
          <Stack width={"50%"}>
            <Typography color={"#5E6166"} fontSize={18} fontWeight={400}>
              Нийт төлөх дүн
            </Typography>
            <Typography color={"#121316"} fontSize={18} fontWeight={700}>
              34,800₮
            </Typography>
          </Stack>
          <Stack width={"50%"}>
            <Link href={"/order"}>
              <Button
                fullWidth
                variant="contained"
                disableElevation
                sx={{
                  py: "14.5px",
                  bgcolor: "#18BA51",
                }}
              >
                Захиалах
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
