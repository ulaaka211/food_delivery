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
    <Stack maxWidth={500} width={"40vw"} height={"100%"} px={4}>
      <Stack width={"100%"} height={"100%"} justifyContent={"space-between"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          position={"sticky"}
          top={0}
          right={0}
          paddingY={7}
          zIndex={1}
          borderBottom={1}
          bgcolor={"#fff"}
        >
          <Stack padding={"6px"}>
            <Image src="/arrow_forward_ios.svg" alt="" width={11} height={20} />
          </Stack>
          <Typography width={"57.6%"} fontSize={20} fontWeight={900}>
            Таны сагс
          </Typography>
        </Stack>
        <Stack justifySelf={"start"} flex={1}>
          {shareFood.map((item, index) => (
            <Stack paddingY={3} borderBottom={1}>
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
                          color={"common.black"}
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
                    maxWidth={500}
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
                        setFoodCount(item.foodCount);
                        if (item.foodCount == 1) {
                          return 1;
                        }
                        return item.foodCount--;
                      }}
                    >
                      <RemoveOutlinedIcon />
                    </Stack>
                    <Stack paddingX={"30px"} paddingY={1}>
                      <Typography fontSize={24} fontWeight={500}>
                        {item.foodCount}
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
                        let isShare = false;

                        const newShareFood = shareFood.map((element) => {
                          if (element.foodCount == item.foodCount) {
                            isShare = true;
                            element.foodCount += 1;
                            return element;
                          } else {
                            return element;
                          }
                        });

                        setFoodCount(newShareFood);
                        console.log(newShareFood);
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

        <Stack
          direction={"row"}
          alignItems={"center"}
          paddingY={7}
          bottom={0}
          right={30}
          zIndex={1}
          bgcolor={"#fff"}
          position={"sticky"}
        >
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
    </Stack>
  );
};
