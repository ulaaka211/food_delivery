import { Container, Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Card } from "..";

const arr = [
  {
    image: "/food.svg",
    discount: "20%",
    name: " Өглөөний хоол",
    price: " 4,800₮",
    oldprice: "6,800₮",
  },
  {
    image: "/food.svg",
    discount: "20%",
    name: " Өглөөний хоол",
    price: " 4,800₮",
    oldprice: "6,800₮",
  },
  {
    image: "/food.svg",
    discount: "20%",
    name: " Өглөөний хоол",
    price: " 4,800₮",
    oldprice: "6,800₮",
  },
  {
    image: "/food.svg",
    discount: "20%",
    name: " Өглөөний хоол",
    price: " 4,800₮",
    oldprice: "6,800₮",
  },
];

export const Salad = () => {
  return (
    <Stack>
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            padding={2}
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Stack spacing={1} direction={"row"} alignItems={"center"}>
              <Image src="/Star 1.svg" alt="" width={32} height={32} />
              <Typography fontSize={22} fontWeight={700}>
                Салад ба зууш
              </Typography>
            </Stack>
            <Link href={"/food-menu"}>
              <Stack gap={2} direction={"row"} alignItems={"center"}>
                <Typography color={"#18BA51"} fontSize={14} fontWeight={400}>
                  Бүгдийг харах
                </Typography>
                <Image src="/q.svg" alt="" width={10} height={15} />
              </Stack>
            </Link>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Grid container spacing={3}>
              {arr.map((_, index) => (
                <Grid key={index} item xs={12} md={3}>
                  <Card />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
