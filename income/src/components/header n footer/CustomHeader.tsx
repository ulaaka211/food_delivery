import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname } from "next/navigation";

type CustomHeaderProps = {};

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

export const CustomHeader = (props: CustomHeaderProps) => {
  const pathname = usePathname();
  const {} = props;
  console.log(pathname);
  return (
    <Stack
      width="100vw"
      bgcolor={"#fff"}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={10}
    >
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent={"space-between"} paddingY={1}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <Image src="/logo.svg" width={30} height={30} alt="" />
            {arr.map((item) => (
              <Stack padding={[1, 2]}>
                <Link href={item.link}>
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

            <Link href={"/login"}>
              <Stack spacing={1} direction={"row"} alignItems={"center"}>
                <Image src="/vector (4).svg" alt="" width={19} height={19} />
                <Typography fontSize={14} fontWeight={700}>
                  Нэвтрэх
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
