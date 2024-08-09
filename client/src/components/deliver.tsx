import { Divider, Stack, Typography, Grid } from "@mui/material";
import { Container } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

const cardsItem = [
  {
    title: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явц хянах",
    link: "/OrderList",
    icon: (
      <ImportContactsIcon
        sx={{ color: "green", width: "30px", height: "30px" }}
      />
    ),
  },
  {
    title: "Шуурхай хүргэлт",
    text: "Хүргэлтийн явц хянах",
    link: "/OrderList",
    icon: (
      <AccessTimeIcon sx={{ color: "green", width: "30px", height: "30px" }} />
    ),
  },
  {
    title: "Эрүүл, баталгаат орц",
    text: "Бүтээгдэхүүний орц харах",
    link: "/Menu",
    icon: (
      <RamenDiningIcon sx={{ color: "green", width: "30px", height: "30px" }} />
    ),
  },
  {
    title: "Хоолны өргөн сонголт",
    text: "Хоолны цэсээс хонголт хийх",
    link: "/Menu",
    icon: (
      <RamenDiningIcon sx={{ color: "green", width: "30px", height: "30px" }} />
    ),
  },
];

export const Deliver = () => {
  return (
    <Stack>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {cardsItem.map((item, index) => (
            <Grid key={index} item md={3}>
              <Stack
                padding={3}
                gap={"15px"}
                border={1}
                width={"100%"}
                borderRadius={3}
              >
                <Stack padding={"15px"}>{item.icon}</Stack>

                <Stack>
                  <Typography fontWeight={700} fontSize={18}>
                    {item.title}
                  </Typography>
                  <Typography fontSize={14} fontWeight={400}>
                    {item.title}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};
