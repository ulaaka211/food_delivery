"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Button } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Link from "next/link";
import { useFood } from "../../provider/FoodProvider";
import { useAuth } from "../../provider/AuthenticationProvider";
import { useRouter } from "next/navigation";

const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const DrawerDetail = () => {
  const { basket, setOpenDrawer, setBasket } = useFood();
  const { isLoggedIn, setOpen } = useAuth();
  const router = useRouter();
  const tatolPrice = basket.reduce((sum, currentValue) => {
    return (
      sum +
      currentValue.price *
        currentValue.foodCount *
        (1 - 0.01 * (currentValue.discount || 0))
    );
  }, 0);

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
          {isLoggedIn ? (
            basket.map((item, index) => (
              <Stack paddingY={3} borderBottom={1} key={index}>
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
                    <Image src={item.foodImg} alt="" fill objectFit="cover" />
                  </Stack>
                  <Stack width={"50%"}>
                    <Stack
                      direction={"row"}
                      width={"100%"}
                      justifyContent={"space-between"}
                    >
                      <Stack>
                        <Typography fontSize={18} fontWeight={600}>
                          {item.foodName}
                        </Typography>
                        <Stack gap={1} direction={"row"}>
                          <Typography
                            color={"primary.main"}
                            fontSize={18}
                            fontWeight={600}
                          >
                            {Boolean(item.discount)
                              ? numberFormatter.format(
                                  item.price * (1 - item.discount * 0.01)
                                ) + "₮"
                              : numberFormatter.format(item.price) + "₮"}
                          </Typography>
                          <Typography
                            color={"common.black"}
                            fontSize={18}
                            fontWeight={600}
                            sx={{
                              textDecorationLine: "line-through",
                            }}
                          >
                            {Boolean(item.discount) &&
                              numberFormatter.format(item.price) + "₮"}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        onClick={() => {
                          const newBasket = basket.filter(
                            (element) => element.foodId != item.foodId
                          );
                          setBasket(newBasket);
                        }}
                      >
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
                          setBasket((prev) => {
                            const clone = [...prev];
                            return clone.map((element) => {
                              {
                                if (element.foodId == item.foodId) {
                                  if (element.foodCount != 1) {
                                    element.foodCount--;
                                  }
                                }
                                return element;
                              }
                            });
                          });
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
                          setBasket((prev) => {
                            const clone = [...prev];

                            return clone.map((element) => {
                              if (element.foodId === item.foodId)
                                return {
                                  ...element,
                                  foodCount: element.foodCount + 1,
                                };
                              return element;
                            });
                          });
                        }}
                      >
                        <AddOutlinedIcon />
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            ))
          ) : (
            <Stack
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                display={"flex"}
                flexDirection={"column"}
                textAlign={"center"}
                fontSize={18}
                fontWeight={600}
              >
                Нэвтрэж орно уу <br />
                <Button
                  onClick={() => {
                    setOpenDrawer(false);
                    setOpen(true);
                  }}
                  sx={{
                    color: "purple",
                    "&:hover": {
                      bgcolor: "white",
                    },
                  }}
                >
                  Нэвтрэх
                </Button>
              </Typography>
            </Stack>
          )}
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
              {numberFormatter.format(tatolPrice)}
            </Typography>
          </Stack>
          <Stack
            width={"50%"}
            onClick={() => {
              if (!isLoggedIn) {
                return;
              } else if (basket.length === 0 && isLoggedIn) {
                alert("Сагс хоосон байна");
              } else {
                router.push("/order");
                setOpenDrawer(false);
              }
            }}
          >
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
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
