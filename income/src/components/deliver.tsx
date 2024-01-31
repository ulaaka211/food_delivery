import { Divider, Stack, Typography, Grid } from "@mui/material";
import { Container } from "@mui/material";
import Image from "next/image";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

const arr = [
  {
    title: "1",
  },
  {
    title: "1",
  },
  {
    title: "1",
  },
  {
    title: "1",
  },
];

export const Deliver = () => {
  return (
    <Stack>
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {arr.map(() => (
            <Grid item md={3}>
              <Stack
                padding={3}
                gap={"15px"}
                border={1}
                width={"100%"}
                borderRadius={3}
              >
                <Stack padding={"15px"}>
                  <ImportContactsIcon
                    sx={{ color: "green", width: "30px", height: "30px" }}
                  />
                </Stack>

                <Stack>
                  <Typography fontWeight={700} fontSize={18}>
                    Хүргэлтийн төлөв хянах
                  </Typography>
                  <Typography fontSize={14} fontWeight={400}>
                    Захиалга бэлтгэлийн явцыг хянах
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
